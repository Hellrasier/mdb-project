import mdb from '~/server/core/mdb'

export default defineEventHandler(async (ev) => {
  const {name} = await useBody(ev)
  const args ={
    query: {
      query: name,
    }
  }

  const {data} = await mdb.search.people(args)
  return data.results
})
