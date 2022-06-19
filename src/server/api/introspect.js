import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  const api = {}
  const ifaceNames = await fs.readdir('./server/api')
  for (const ifaceName of ifaceNames) {
    if(path.extname(ifaceName) == '') {
      api[ifaceName] = {}
      const methodNames = await fs.readdir(`./server/api/${ifaceName}`)
      methodNames.forEach(name => api[ifaceName][path.basename(name, '.js')] = '')
    }
  }
  return api
})
