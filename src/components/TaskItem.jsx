import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { MdDelete } from "react-icons/md";

// Function to apply category-based background colors
const getCategoryClass = (category) => {
  switch (category) {
    case "personal":
      return "bg-blue-100 text-blue-700";
    case "work":
      return "bg-green-100 text-green-700";
    case "shopping":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

// Function to apply priority-based border colors
const getPriorityClass = (priority) => {
  switch (priority) {
    case "low":
      return "border-l-5  border-green-400";
    case "medium":
      return "border-l-5 border-yellow-400";
    case "high":
      return "border-l-5 border-red-400";
    default:
      return "border-l-5 border-gray-300";
  }
};

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center p-4 border rounded-lg shadow-md ${getCategoryClass(
        task.category
      )} ${getPriorityClass(task.priority)} transition-all`}
    >
      {/* Task Content & Completion Toggle */}
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
          }
          className="w-5 h-5 cursor-pointer accent-blue-500"
        />
        <div className="w-full">
          <h3
            className={`text-md md:text-lg font-medium ${
              task.completed ? "line-through text-gray-400" : "text-gray-500"
            }`}
          >
            {task.text}
          </h3>
          <p className="text-sm text-gray-500">
            {task.category} | {task.priority}
          </p>
        </div>
      </div>

      {/* Delete Task Button */}
      <button
        onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all mt-2 md:mt-0 cursor-pointer"
      >
        <MdDelete className="w-5 h-5" />
      </button>
    </div>
  );
}

export default TaskItem;
