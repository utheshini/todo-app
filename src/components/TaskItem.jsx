import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { MdEdit, MdDelete, MdCheck, MdClose } from "react-icons/md";

// Badge styles for categories and priorities
const categoryBadge = {
  work: "text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/15",
  study:
    "text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-500/15",
  personal: "text-pink-600 dark:text-pink-300 bg-pink-100 dark:bg-pink-500/15",
};

const priorityBadge = {
  high: "text-red-600 dark:text-red-300 bg-red-100 dark:bg-red-500/15",
  medium:
    "text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-500/15",
  low: "text-green-600 dark:text-green-300 bg-green-100 dark:bg-green-500/15",
};

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Save edited task
  const handleSave = () => {
    if (editText.trim() !== "") {
      dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: editText } });
      setIsEditing(false);
    }
  };

  return (
    <div
      className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 
      rounded-2xl shadow-sm transition-colors duration-300"
    >
      <div className="flex items-start gap-3">
        {/* Task complete checkbox */}
        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
            }
            className="peer appearance-none mt-1 w-4 h-4 border-2 border-slate-300 rounded-sm bg-slate-50 dark:bg-slate-700 
            checked:bg-purple-600 checked:border-purple-600 transition-all duration-200 cursor-pointer"
          />

          {/* Checkmark icon */}
          <svg
            className="absolute left-0 right-0 top-0 bottom-0 m-auto w-3.5 h-3.5 translate-y-[1px] text-white opacity-0 peer-checked:opacity-100 transition-opacity 
            duration-200 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </label>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            {/* Render task text or editable input */}
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
                autoFocus
                className="p-1 text-sm md:text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md
                transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <h2
                className={`max-w-xs md:max-w-md break-all text-sm md:text-base font-semibold  ${
                  task.completed
                    ? "line-through text-slate-500 dark:text-slate-400 [text-decoration-thickness:1px]"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {task.text}
              </h2>
            )}

            {/* Category and priority badges */}
            <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
              <span className={`badge ${categoryBadge[task.category.value]}`}>
                {task.category.label}
              </span>
              <span className={`badge ${priorityBadge[task.priority.value]}`}>
                {task.priority.label}
              </span>
            </div>
          </div>

          {/* timestamp  */}
          <p className="mt-2 font-[10px] md:text-xs text-slate-500 dark:text-slate-400">
            Added {new Date(task.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Action buttons: edit/save/cancel/delete */}
      <div className="flex justify-center gap-2 md:justify-end md:items-center">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleSave}
              aria-label="Save task"
              className="p-2 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-500/15 rounded-xl
              transition-colors duration-300 cursor-pointer hover:bg-green-200 dark:hover:bg-green-500/25"
            >
              <MdCheck className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditText(task.text);
              }}
              aria-label="Cancel editing task"
              className="p-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-500/15 rounded-xl
              transition-colors duration-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500/25 "
            >
              <MdClose className="w-5 h-5" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
            className="p-2 text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/15 rounded-xl
            transition-colors duration-300 cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-500/25"
          >
            <MdEdit className="w-5 h-5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
          aria-label="Delete task"
          className="p-2 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/15 rounded-full
          transition-colors duration-300 cursor-pointer hover:bg-red-200 dark:hover:bg-red-500/25 "
        >
          <MdDelete className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
