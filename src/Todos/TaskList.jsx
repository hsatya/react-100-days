/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ todos = [], onDeleteHandle, onChangeHandle }) => {
  return (
    <ul>
      {todos.length > 0
        ? todos.map((todo) => (
            <li key={todo.id}>
              <Task
                todo={todo}
                onChange={onChangeHandle}
                onDelete={onDeleteHandle}
              />
            </li>
          ))
        : ""}
    </ul>
  );
};

export default TaskList;
