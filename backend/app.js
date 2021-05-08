const express = require("express");
const mongoose = require("mongoose");

const moviesRoutes = require("./routes/movies");

const app = express();

mongoose
  .connect(
    "mongodb://localhost:27017/mongoDB-tricks"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/movies", moviesRoutes);

module.exports = app;
