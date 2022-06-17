import MovieDB from 'node-themoviedb'

const mdb = new MovieDB(process.env.API_KEY, {language: 'ru-RU'})

export default mdb
