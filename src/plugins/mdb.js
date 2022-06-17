export default defineNuxtPlugin(async () => {
  
  const api = await $fetch('/api/introspect')
  for (const interfaceName in api) {
    for (const methodName in api[interfaceName]) {
      api[interfaceName][methodName] = (args) => $fetch(`/api/${interfaceName}/${methodName}`, {
        method: 'POST',
        body: JSON.stringify(args)
      }).then((data) => {
        return data
      })
    }
  }
  return {
    provide: {mdb: api}
  }
})
