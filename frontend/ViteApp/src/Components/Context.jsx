import React, { createContext, useReducer } from "react";

const ACTIONS = {
  CREATE: "create",
  ADD: "add",
  DELETE: "delete",
};

const workoutReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE:
      return { ...state, creaWorkout: action.payload };
    case ACTIONS.ADD:
      return { ...state, workouts: [action.payload, ...state.workouts] };
    case ACTIONS.DELETE:
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export const workoutContext = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    creaWorkout: null,
    workouts: [],
  });

  return (
    <workoutContext.Provider value={{ state, dispatch }}>
      {children}
    </workoutContext.Provider>
  );
};

export default Context;
