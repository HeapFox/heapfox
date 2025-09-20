# HeapFox Monorepo

[![HeapFox](https://github.com/user-attachments/assets/c8cf53db-1764-41c2-a539-3dde26439b98)](https://heapfox.com)

Fully hosted, customizable documentation as a service, built for teams and devs who want beautiful docs without maintaining infra.

This monorepo contains the landing site, UI package(s), and space for future apps like the dashboard and backend services.

## Structure

- `apps/`
  - `landing/` — Public marketing site for HeapFox Docs (Next.js / App Router)
  - `dashboard/` — (planned) Admin & editor UI for docs projects
  - `api/` or `backend/` — (planned) backend services
- `packages/`
  - `ui/` — Shared UI component library used across apps

## Requirements

- Node.js LTS
- pnpm (recommended for Turborepo workspaces)

## Getting Started

Install dependencies from the monorepo root:

```bash
pnpm install
```

### Run the landing app (marketing site)

```bash
pnpm --filter @heapfox/landing dev
```

The landing app uses Next.js 15 (App Router + Turbopack). It’s configured to statically generate the home page for best SEO, includes canonical/OpenGraph metadata, and serves a sitemap/robots.

### Build all apps

```bash
pnpm -w build
```

### Start a built app

```bash
pnpm --filter @heapfox/landing start
```

## Environment Variables

Create `.env.local` files within each app as needed. Do not commit secrets.

Common patterns:

- `apps/landing/.env.local` — marketing-only values (generally minimal)
- `apps/dashboard/.env.local` — dashboard/auth/integrations (when added)
- `apps/api/.env` — server secrets (never commit)

We keep `.env*` files gitignored but you should add `*.example` files when introducing new config.

## Turborepo

This monorepo is configured for pnpm workspaces and Turborepo.

- Root files: `turbo.json`, `pnpm-workspace.yaml`
- Shared packages are imported via `workspace:*` ranges.

## Roadmap (high-level)

- Dashboard with Markdown/MDX editor and live preview
- GitHub/GitLab sync for `docs/` or custom folders
- Hosting (subdomains, custom domains + SSL)
- Themes & branding (light/dark, colors, logos, sidebar)
- Collaboration (roles: admin/editor/viewer)
- Deploy pipeline (auto-build on push)
- Versioned docs, OpenAPI → API docs, built-in search, AI helpers (future)

## License

- Code: [Apache License 2.0](./LICENSE)
- Trademarks/Branding: See [TRADEMARKS.md](./TRADEMARKS.md)

You may self-host with HeapFox branding. If you offer a hosted service based on this project, you must remove HeapFox brand elements (logos, marks, and confusingly similar UI) per the trademark policy.
