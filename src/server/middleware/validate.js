import {sendError, H3Error} from 'h3'
import interfaces from '../core/interfaces.js'

export default defineEventHandler(async (ev) => {
  const {url} = ev.req
  const [path, ifaceName, methodName] = url.split('/').slice(1)
  if (path != 'api' || ifaceName == 'introspect') return

  const iface = interfaces[ifaceName][methodName]
  const body = await useBody(ev)
  for (const key in body) {
    if(!(key in iface)) {
      sendError(ev, new H3Error(`Error, key ${key} does not exist in ${ifaceName}/${methodName}`, 400))
      return 
    }
    if (typeof body[key] != iface[key]) {
      sendError(ev, new H3Error(`Error, field ${key} is type ${typeof body[key]}, but should be ${iface[key]}`, 400))
      return 
    }
  }
})
