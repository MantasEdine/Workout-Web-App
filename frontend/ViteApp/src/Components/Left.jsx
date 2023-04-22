import React from "react";
import style from "./Left.module.css";
import { useContext } from "react";
import { workoutContext } from "./Context";
const Left = ({ workout }) => {
  const { dispatch } = useContext(workoutContext);
  const handleClick = async (e) => {
    e.preventDefault();
    const workout = await fetch("api/workout", {
      method: "DELETE",
    });
    const response = await workout.json();
    if (!response.ok) {
      dispatch({ type: ACTIONS.DELETE, payload: response });
    }
  };
  return (
    <div>
      <div className={style.left}>
        {" "}
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (kg): </strong>
          {workout.load}
        </p>
        <p>
          <strong>Number of reps: </strong>
          {workout.reps}
        </p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>delete</span>
      </div>
      ;
    </div>
  );
};

export default Left;
