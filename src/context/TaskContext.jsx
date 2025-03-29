import { createContext, useReducer, useEffect } from "react";

// // Create Context
const TaskContext = createContext();

// Define Initial State
const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

// Define the reducer function first
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload]; // Adds a new task to the state array
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_COMPLETE":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

// Inside the component, useReducer is called
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
