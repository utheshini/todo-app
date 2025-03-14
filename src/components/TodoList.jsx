import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function TodoList({
  listItems,
  toggleTaskCompletion,
  deleteTask,
  startEditing,
  saveTask,
  handleEditInputChange,
}) {
  return (
    <ul>
      {listItems.map((listItem, index) => (
        <li
          key={index}
          style={{
            listStyle: "none",
            
          }}
        >
          <input
            type="checkbox"
            checked={listItem.completed}
            onChange={() => toggleTaskCompletion(index)}
          />

          {listItem.editing ? (
            <>
              <input
                type="text"
                value={listItem.editInput} // Display the editInput for that task
                onChange={(e) => handleEditInputChange(index, e.target.value)} // Update editInput for that specific task
                style={{fontWeight:"bold"
                }}
              />
              <button
                id="save"
                onClick={() => saveTask(index, listItem.editInput)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <label  style={{textDecoration: listItem.completed ? "line-through" : "none",}}>
                {listItem.text}
              </label>

              <button id="edit" onClick={() => startEditing(index)}>
                <MdEdit />
              </button>
              <button id="delete" onClick={() => deleteTask(index)}>
                <MdDelete />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
