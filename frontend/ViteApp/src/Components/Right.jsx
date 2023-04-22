import React from "react";
import style from "./Right.module.css";
import { useState } from "react";
import { AiTwotoneAudio } from "react-icons/ai";
import { workoutContext } from "./Context";
import { useContext } from "react";
import { Dispatch } from "react";
import { json } from "body-parser";

const Right = () => {
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [exercise, setExercise] = useState("");
  const [value, setValue] = useState("");
  const [emptyField, setEmptyField] = useState([]);
  const [error, setError] = useState(null);
  const { dispatch, ACTIONS } = useContext(workoutContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, weight, exercise };
    const response = await fetch("api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (!response.ok) {
      console.log("error on response");
      setError(result.error);
      setEmptyField(result.emptyField);
    } else {
      setError("You Can't live it out");
      setTitle("");
      setWeight("");
      setExercise("");
      setEmptyField([]);
      setError(null);
      dispatch({ type: ACTIONS.ADD, payload: result });
    }
  };

  return (
    <div>
      (
      <div>
        <form className={style.inputs}>
          {" "}
          <label className={style.labels}>Enter Number Of title: </label>
          <input
            value={title}
            className={
              (style.inputholder, emptyField.includes(title) ? error : "")
            }
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Number Of Reps..."
          />
          <label className={style.labels}>Enter Your Weight:</label>
          <input
            value={weight}
            className={
              (style.inputholder, emptyField.includes(weight) ? error : "")
            }
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter Your Weight....."
          />
          <label className={style.labels}>Enter The Exercise Name :</label>
          <input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className={
              (style.inputholder, emptyField.includes(exercise) ? error : "")
            }
            type="text"
            placeholder="The Exercise Name ..."
          />
          <button className={style.submit} type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <h3 className={style.use} style={{ paddingLeft: "1rem" }}>
            Wanna Use Vocals Instead{" "}
            <a href="#">
              <AiTwotoneAudio />
            </a>
          </h3>
        </form>
      </div>
      );
    </div>
  );
};

export default Right;
