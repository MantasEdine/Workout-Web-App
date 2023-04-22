const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    exercise: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
