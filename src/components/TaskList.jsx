import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskItem from "./TaskItem";
import { MdOutlineClose, MdNoteAdd } from "react-icons/md";

// TaskList component renders the list of tasks from context
function TaskList() {
  const { filteredTasks, dispatch } = useContext(TaskContext);

  return (
    <div>
      {/* Show the clear all button only when there are tasks */}
      {filteredTasks.length > 0 && (
        <div className="flex justify-end mt-8 mb-4">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear all tasks?")) {
                dispatch({ type: "CLEAR_TASKS" });
              }
            }}
            className="flex items-center gap-2 px-4 py-2 font-medium 
           text-red-600 dark:text-red-400 border-2 border-red-300 dark:border-red-500/30 
           bg-transparent rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 
           transition-all duration-300 cursor-pointer active:scale-95"
          >
            <MdOutlineClose className="w-5 h-5" />
            Clear All
          </button>
        </div>
      )}

      {filteredTasks.length === 0 ? (
        // Show message if no tasks are available
        <div className="flex flex-col items-center justify-center gap-2 p-16 text-slate-500">
          <MdNoteAdd className="w-8 h-8 md:w-16 md:h-16" />
          <p className="md:text-lg text-center">No tasks added yet!</p>
        </div>
      ) : (
        // Render a list of TaskItem components for each task
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
