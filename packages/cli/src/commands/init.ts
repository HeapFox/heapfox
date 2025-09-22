type Opts = { api: string }
export async function init(opts: Opts) {
  console.log(`Initializing HeapFox in current folder with API ${opts.api}`)
}
