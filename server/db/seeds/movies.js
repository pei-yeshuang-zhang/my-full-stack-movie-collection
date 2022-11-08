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
      watched: false,
      img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg',
      plot: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
    },
    {
      id: 3,
      title: 'Inception',
      imdb_id: 'tt1375666',
      watched: false,
      img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    },
    {
      id: 4,
      title: 'Fight Club',
      imdb_id: 'tt0137523',
      watched: true,
      img: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
      plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    },
    {
      id: 5,
      title: 'Arcane',
      imdb_id: 'tt11126994',
      watched: true,
      img: 'https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
      plot: 'Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.',
    },
    {
      id: 6,
      title: 'Detachment',
      imdb_id: 'tt1683526',
      watched: true,
      img: 'https://m.media-amazon.com/images/M/MV5BMTM3NzQzMDA5Ml5BMl5BanBnXkFtZTcwODA5NTcyNw@@._V1_SX300.jpg',
      plot: 'A substitute teacher who drifts from classroom to classroom finds a connection to the students and teachers during his latest assignment.',
    },
    {
      id: 7,
      title: 'Mad Max: Fury Road',
      imdb_id: 'tt1392190',
      watched: true,
      img: 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    },
    {
      id: 8,
      title: 'The Sixth Sense',
      imdb_id: 'tt1392190',
      watched: false,
      img: 'https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg',
      plot: "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    },
  ])
}
