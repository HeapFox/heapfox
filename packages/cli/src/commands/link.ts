type Opts = { project: string }
export async function link(opts: Opts) {
  console.log(`Linking current folder to project ${opts.project}`)
}
