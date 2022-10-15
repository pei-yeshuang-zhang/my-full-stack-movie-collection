/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      title: 'The Batman',
      imdb_id: 'tt1877830',
      watched: false,
      img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg',
      plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
    },
    {
      id: 2,
      title: 'Arrival',
      imdb_id: 'tt2543164',
      watched: true,
      img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg',
      plot: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
    },
  ])
}
