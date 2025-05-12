import React from "react";
import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Ensure all fields are filled before creating a task
    if (input.trim() !== "" && category !== "" && priority !== "") {
      const newTask = {
        id: Date.now(), // Unique task ID
        text: input,
        category: category,
        priority: priority,
        completed: false,
      };

      dispatch({ type: "ADD_TASK", payload: newTask }); // Send task to reducer

      // Clear form fields
      setInput("");
      setCategory("");
      setPriority("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border m-4 p-6 rounded-lg flex flex-col md:flex-row gap-4 items-center bg-white shadow-md"
    >
      <input
        type="text"
        name="task"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Category</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="shopping">Shopping</option>
      </select>
      <select
        name="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full md:w-auto hover:bg-blue-700 transition-all"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
