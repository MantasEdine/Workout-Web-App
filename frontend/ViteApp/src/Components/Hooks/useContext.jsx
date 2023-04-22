import { Context } from "../Context";
import { useContext } from "react";
import { workoutContext } from "../Context";

import React from "react";

export const useContext = () => {
  const context = useContext(workoutContext);
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  } else return context;
};
