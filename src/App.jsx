import TaskForm from "./components/TaskForm";
import {TaskProvider}  from "./context/TaskContext";
import TaskList from "./components/TaskList";

function App() {
  return (
 
 <TaskProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          To-Do List
          </h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
 
  );
}

export default App;
