type Opts = { project?: string; api: string }
export async function publish(path: string | undefined, opts: Opts) {
  const p = path || '.'
  console.log(`Publishing ${p} to ${opts.api} for project ${opts.project ?? '(from config)'} (MVP placeholder)`) 
}
