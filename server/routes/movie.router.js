const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// This GET is to retrieve movies from the DB
router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

router.get('/details/:id', (req, res) => {
  console.log('this is req.params', req.params.id);
  const query = `SELECT "movies".id, "movies".title, "genres".name, "movies".description, "movies".poster
  FROM "movies_genres"
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  JOIN "genres" ON "movies_genres".genre_id = "genres".id
  WHERE "movies".id = $1
  GROUP BY "movies".id, "genres".name, "movies".title
  ORDER BY "movies".title;`;
  pool.query(query, [req.params.id])
    .then( result => {
      // console.log(result.rows);
      let genres = [];

      for (let instance of result.rows) {
        genres.push(instance.name);
      }

      console.log('this is genres:', genres);

      let movieObj = {
        id: result.rows[0].id,
        title: result.rows[0].title,
        description: result.rows[0].description,
        poster: result.rows[0].poster,
        genres: genres
      };

      console.log('this is movieObj', movieObj);

      res.send(movieObj);
    })
    .catch(err => {
      console.log('ERROR: Get movie details', err);
      res.sendStatus(500)
    })

});


module.exports = router;