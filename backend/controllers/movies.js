const Movie = require("../models/movie");

exports.listMovies = (req, res, next) => {
  const movieQuery = Movie.find({});
  let fetchedMovies;
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
      res.status(200).json(fetchedMovies);   
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};