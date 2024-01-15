import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title) => {
    const newTodo = {
      id: new Date().getTime(),
      todo: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    const newtodos = todos.filter((todo) => todo.id !== id);
    setTodos(newtodos);
  };

  const handleChange = (nextTodo) => {
    const newtodos = todos.map((todo) => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    });
    setTodos(newtodos);
  };

  return (
    <>
      <h1>Todos</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onDeleteHandle={handleDelete}
        onChangeHandle={handleChange}
      />
    </>
  );
};

export default Todos;
