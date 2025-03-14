import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { IoMdAddCircle } from "react-icons/io";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false, editing: false, editInput: "" }]);
      setInput(""); // Clear input field
    }
  };

  const deleteTask = (index) => { 
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, editing: true, editInput: task.text } : task
      )
    );
  };

  const saveTask = (index, newText) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, text: newText, editing: false } : task
      )
    );
  };

  const handleEditInputChange = (index, newValue) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, editInput: newValue } : task
      )
    );
  };

  return (
    <>

      <div className="container" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>To-Do List</h1>
      <div className="input-field">
      <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button id="add" onClick={addTask}> <IoMdAddCircle /></button>
      </div>


        <TodoList 
          listItems={tasks} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
          startEditing={startEditing} 
          saveTask={saveTask} 
          handleEditInputChange={handleEditInputChange}
        />
      </div>
    </>
  );
}

export default App;
