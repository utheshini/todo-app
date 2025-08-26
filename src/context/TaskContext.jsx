import { createContext, useReducer, useEffect } from "react";

// // Create Context
const TaskContext = createContext();

// Initial state from localStorage or empty array
const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

// Reducer to handle task actions
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );
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

// Provider component to wrap the app
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // Persist tasks to Local Storage
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
