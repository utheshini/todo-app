import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

// Task categories and priorities
const CATEGORIES = [
  { value: "work", label: "Work" },
  { value: "study", label: "Study" },
  { value: "personal", label: "Personal" },
];

const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(null);
  const [priority, setPriority] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    if (input.trim().length > 100) {
      alert("Task name must be less than 100 characters.");
      return;
    }
    if (!/[a-zA-Z0-9]/.test(input)) {
      alert("Task name must contain at least one letter.");
      return;
    }

    if (category === null || priority === null) {
      alert("Select Category and Priority.");
      return;
    }

    // Ensure all fields are filled before creating a task
    if (input.trim() !== "" && category !== null && priority !== null) {
      const newTask = {
        id: Date.now(),
        text: input,
        category: category,
        priority: priority,
        completed: false,
        createdAt: Date.now(),
      };

      dispatch({ type: "ADD_TASK", payload: newTask });

      // Clear form fields
      setInput("");
      setCategory(null);
      setPriority(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center md:justify-between gap-4 my-10"
    >
      {/* Task input */}
      <label htmlFor="task" className="sr-only">
        Task Name
      </label>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Enter a task... "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        className="w-full md:w-1/4 p-2 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 
        border border-slate-300 dark:border-slate-700 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      {/* Category selector */}
      <label htmlFor="category" className="sr-only">
        Category
      </label>
      <select
        id="category"
        name="category"
        value={category?.value || ""}
        onChange={(e) => {
          const selected = CATEGORIES.find(
            (cat) => cat.value === e.target.value
          );
          setCategory(selected);
        }}
        className="w-full md:w-1/4 p-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 
        rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <option value="">Select Category</option>
        {CATEGORIES.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      {/* Priority selector */}
      <label htmlFor="priority" className="sr-only">
        Priority
      </label>
      <select
        id="priority"
        name="priority"
        value={priority?.value || ""}
        onChange={(e) => {
          const selected = PRIORITIES.find((p) => p.value === e.target.value);
          setPriority(selected);
        }}
        className="w-full md:w-1/4 p-2 bg-white dark:bg-slate-800 border border-slate-300  dark:border-slate-700 
        rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <option value="">Select Priority</option>
        {PRIORITIES.map((priority) => (
          <option key={priority.value} value={priority.value}>
            {priority.label}
          </option>
        ))}
      </select>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full md:w-auto px-4 py-2 text-white bg-purple-600 rounded-xl 
        transition-colors duration-300 cursor-pointer hover:bg-purple-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
