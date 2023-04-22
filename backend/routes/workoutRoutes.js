const express = require("express");
const mongoose = require("mongoose");
const workout = require("../controllers/workoutControllers");
const router = express.Router();
router.get("/", workout.workout_get);
router.post("/", workout.workout_post);
router.delete("/:id", workout.delete_workout);
router.get("/:id", workout.getbyid_workout);
router.patch("/:id", workout.update_workout);

module.exports = router;
