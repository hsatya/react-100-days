/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          handleAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
