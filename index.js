require('dotenv').config()
const MovieDB = require('node-themoviedb')


const mdb = new MovieDB(process.env.API_KEY, {language: 'ru-RU'});

(async () => {
  try {
    const args = {
      query: {
        query: "Akira Kurosawa",
      }
    };
    const {data} = await mdb.search.people(args);
    const person_id = data.results[0].id
    const kurosawa_films = await mdb.person.getMovieCredits({pathParameters: {person_id}})
    // console.log(kurosawa_films.data.crew.map(x => [x.id, x.title]))
    const sams = await mdb.movie.getDetails({pathParameters: {movie_id: 346}})
    console.dir(sams, {depth: 5})
  } catch (error) {
    console.error(error);
  }
})();
