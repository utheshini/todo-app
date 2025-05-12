import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskItem from "./TaskItem";

// TaskList component renders the list of tasks from context
function TaskList() {
  const { tasks } = useContext(TaskContext); // Access tasks from context

  return (
    <div className="mt-10 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-5">
      {tasks.length === 0 ? (
         // Show message if no tasks are available
        <p className="text-center text-gray-500 text-lg">No tasks added yet!</p>
      ) : (
        // Render a list of TaskItem components for each task
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
