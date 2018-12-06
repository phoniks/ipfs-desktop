import autoLaunch from './auto-launch'
import downloadHash from './download-hash'
import ipfs from './ipfs'
import webui from './webui'
import openDataFolder from './open-data-folder'
import takeScreenshot from './take-screenshot'
import implementation from './implementation'

export default async function (ctx) {
  await webui(ctx)
  await autoLaunch(ctx)
  await downloadHash(ctx)
  await ipfs(ctx)
  await openDataFolder(ctx)
  await takeScreenshot(ctx)
  await implementation(ctx)
}
