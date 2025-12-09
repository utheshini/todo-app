import { createContext, useReducer, useEffect, useState } from "react";

// Create Context
const TaskContext = createContext();

// Load initial state from Local Storage or reset to empty array
let initialState = [];

try {
  const data = localStorage.getItem("tasks");
  initialState = data ? JSON.parse(data) : [];
} catch {
  initialState = [];
}

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
    case "CLEAR_TASKS":
      return [];
    default:
      return state;
  }
};

// Provider component to wrap the app
export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // States for filtering, sorting, and searching tasks
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [sortOption, setSortOption] = useState("date");
  const [searchTerm, setSearchTerm] = useState("");

  // Persist tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Apply filtering, searching, and sorting to the task list
  const filteredTasks = tasks
    .filter((task) => {
      // Filter by completion status
      if (filterStatus === "active") return !task.completed;
      if (filterStatus === "completed") return task.completed;
      return true;
    })
    .filter((task) => {
      // Filter by category
      if (filterCategory === "all") return true;
      return task.category.value === filterCategory;
    })
    .filter((task) => {
      // Filter by priority
      if (filterPriority === "all") return true;
      return task.priority.value === filterPriority;
    })
    .filter((task) =>
      // Search tasks by keyword
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sort tasks by priority or date
      if (sortOption === "priority") {
        const order = { high: 1, medium: 2, low: 3 };
        return order[a.priority.value] - order[b.priority.value];
      }
      return b.createdAt - a.createdAt;
    });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
        filteredTasks,
        filterStatus,
        setFilterStatus,
        searchTerm,
        setSearchTerm,
        filterCategory,
        setFilterCategory,
        filterPriority,
        setFilterPriority,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
