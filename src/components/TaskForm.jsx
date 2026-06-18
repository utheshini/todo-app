import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { CATEGORY_OPTIONS, PRIORITY_OPTIONS } from "../constants/options";

function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(null);
  const [priority, setPriority] = useState(null);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    if (input.trim() === "") {
      setError("Task name is required.");
      return;
    }

    if (input.trim().length > 100) {
      setError("Task name must be less than 100 characters.");
      return;
    }
    if (!/[a-zA-Z0-9]/.test(input)) {
      setError("Task name must contain at least one letter or number.");
      return;
    }

    if (!category || !priority) {
      setError("Please select category and priority.");
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

      // Clear form fields and error
      setError("");
      setInput("");
      setCategory(null);
      setPriority(null);
    }
  };

  return (
    <div className="mt-10 mb-16">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center md:justify-between gap-4"
      >
        {/* Task input */}
        <label htmlFor="task" className="sr-only">
          Task Name
        </label>
        <input
          type="text"
          id="task"
          name="task"
          required
          maxLength={100}
          placeholder="Enter a task... "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          className="form-input text-slate-500 dark:text-slate-400"
        />

        {/* Category selector */}
        <label htmlFor="category" className="sr-only">
          Category
        </label>
        <select
          id="category"
          name="category"
          required
          value={category?.value || ""}
          onChange={(e) => {
            const selected = CATEGORY_OPTIONS.find(
              (category) => category.value === e.target.value,
            );
            setCategory(selected);
            setError("");
          }}
          className="form-input"
        >
          <option value="" disabled>
            Select Category
          </option>
          {CATEGORY_OPTIONS.map((category) => (
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
          required
          value={priority?.value || ""}
          onChange={(e) => {
            const selected = PRIORITY_OPTIONS.find(
              (priority) => priority.value === e.target.value,
            );
            setPriority(selected);
            setError("");
          }}
          className="form-input"
        >
          <option value="" disabled>
            Select Priority
          </option>
          {PRIORITY_OPTIONS.map((priority) => (
            <option key={priority.value} value={priority.value}>
              {priority.label}
            </option>
          ))}
        </select>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full md:w-auto px-4 py-2 text-white bg-purple-600 rounded-xl 
        transition-colors duration-300
         hover:bg-purple-700"
        >
          Add Task
        </button>
      </form>

      {/* Error message */}
      {error && (
        <p
          role="alert"
          className="mt-2 text-sm text-center md:text-left text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default TaskForm;
