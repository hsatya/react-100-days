/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          type='text'
          value={todo.todo}
          onChange={(e) => {
            onChange({
              ...todo,
              todo: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.todo}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <input
        type='checkbox'
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />{" "}
      {todoContent}
      <button
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Task;
