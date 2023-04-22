const express = require("express");
const morgan = require("morgan");
const lodash = require("lodash");
const bodyParser = require("body-parser");
require("dotenv").config();

const workoutRoutes = require("./routes/workoutRoutes");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use(morgan("dev"));
const Port = process.env.PORT || 3000;
const DB_url = process.env.DB_URL;
mongoose
  .connect(DB_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connect) => {
    console.log("connected to database");
    app.listen(Port, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("error" + error.message);
  });

app.use("/api/workouts", workoutRoutes);
