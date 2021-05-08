const express = require("express");
const MovieController = require("../controllers/movies");
const router = express.Router();

router.get("/getMovies/", MovieController.listMovies);

module.exports = router;
