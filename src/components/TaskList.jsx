import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="mt-10 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-5">
      {/* <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Task List</h2> */}

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No tasks added yet!</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
