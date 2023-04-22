const { create } = require("lodash");
const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

const workout_get = async (req, res, next) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json({ workouts });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const workout_post = async (req, res, next) => {
  const { title, weight, exercise } = req.body;
  const emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!weight) {
    emptyFields.push("weight");
  }
  if (!exercise) {
    emptyFields.push("exercise");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill the missing gaps", emptyFields });
  }
  try {
    const workout = await Workout.create({ title, exercise, weight });
    res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getbyid_workout = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    return res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const delete_workout = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    return res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update_workout = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  try {
    const workout = await Workout.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    return res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  workout_get,
  workout_post,
  getbyid_workout,
  delete_workout,
  update_workout,
};
