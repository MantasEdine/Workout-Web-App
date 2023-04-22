import React from "react";
import Nav from "./Nav";
import Left from "./Left";
import Right from "./Right";
import style from "./Home.module.css";
import { useContext } from "react";
import { workoutContext } from "./Context";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const { workouts, dispatch } = useContext(workoutContext);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("api/workout");
      const response = await data.json();
      if (!response.ok) {
        throw new Error("Error fetching data");
      } else {
        dispatch({ type: ACTIONS.CREATE, payload: response });
      }
    }; //
    getData();
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div className={style.Home}>
        <Right />
        {workouts &&
          workouts.map((workout) => {
            <Left key={workout._id} workout={workout} />;
          })}
      </div>
    </>
  );
};

export default Home;
