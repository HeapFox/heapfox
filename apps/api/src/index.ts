import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { Env } from 'hono/types'
import { PrismaClient } from '@prisma/client'
import { BillingProvider, NoopBilling, StripeBilling } from '@heapfox/billing'
import { z } from 'zod'
import 'dotenv/config'

const prisma = new PrismaClient()

type Bindings = {
    // Future: add bindings like R2/S3 or KV
}

type Variables = {
    projectId?: string
    plan?: 'free' | 'pro' | 'team'
}

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>()

// Billing provider selection
let billing: BillingProvider
switch (process.env.BILLING_PROVIDER) {
    case 'stripe':
        billing = new StripeBilling(process.env.STRIPE_SECRET_KEY || '')
        break
    default:
        billing = new NoopBilling()
}

// Simple auth: Bearer <project-token>
app.use('*', async (c, next) => {
    const auth = c.req.header('authorization') || ''
    if (c.req.path.startsWith('/health') || c.req.method === 'GET') {
        // Allow GET for public reads in MVP; write routes still require token
        return next()
    }
    if (!auth.startsWith('Bearer ')) {
        return c.json({ error: 'Unauthorized' }, 401)
    }
    const token = auth.slice('Bearer '.length)
    const project = await prisma.project.findFirst({ where: { token } })
    if (!project) return c.json({ error: 'Unauthorized' }, 401)
    c.set('projectId', project.id)

    // Billing plan resolution (MVP): provider lookup
    const plan = await billing.getCustomerPlan({ projectId: project.id })
    c.set('plan', plan)
    await next()
})

app.get('/health', (c) => c.json({ ok: true }))

// Create project (admin or bootstrap route)
app.post('/v1/projects', async (c) => {
    const body = await c.req.json()
    const schema = z.object({ name: z.string().min(1), slug: z.string().min(1) })
    const parsed = schema.safeParse(body)
    if (!parsed.success) return c.json({ error: parsed.error.flatten() }, 400)

    const { name, slug } = parsed.data
    // In MVP, create with random token
    const token = crypto.randomUUID().replace(/-/g, '')
    try {
        const project = await prisma.project.create({ data: { name, slug, token, owner: { create: { email: `${slug}@example.com` } } } })
        return c.json({ id: project.id, slug: project.slug, token })
    } catch (e: any) {
        return c.json({ error: e?.message || 'Failed to create project' }, 400)
    }
})

// Upload build (MVP: accept JSON placeholder; real flow will be multipart zip)
app.post('/v1/projects/:id/builds', async (c) => {
    const projectId = c.req.param('id')
    const authedProjectId = c.get('projectId')
    if (projectId !== authedProjectId) return c.json({ error: 'Forbidden' }, 403)

    const build = await prisma.build.create({ data: { projectId, status: 'PENDING' } })
    return c.json({ buildId: build.id, status: build.status })
})

// Public read: get a page by project slug + path
app.get('/v1/projects/:slug/pages', async (c) => {
    const slug = c.req.param('slug')
    const path = c.req.query('path') || '/'
    const project = await prisma.project.findUnique({ where: { slug } })
    if (!project) return c.json({ error: 'Not found' }, 404)
    const latest = await prisma.build.findFirst({ where: { projectId: project.id, status: 'COMPLETE' }, orderBy: { createdAt: 'desc' } })
    if (!latest) return c.json({ error: 'No builds' }, 404)
    const page = await prisma.page.findUnique({ where: { buildId_path: { buildId: latest.id, path } } })
    if (!page) return c.json({ error: 'Not found' }, 404)
    return c.json({ path: page.path, title: page.title, content: page.content, headings: page.headings })
})

const port = Number(process.env.PORT || 3001)
serve({ fetch: app.fetch, port })
console.log(`HeapFox API running on http://localhost:${port}`)
