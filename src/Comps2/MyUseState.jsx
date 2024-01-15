import { useState } from "react";

// function createTodos() {
//   return [];
// }

const names = ["James", "Hope", "Joy", "Taylor"];

const MyUseState = () => {
  //   const [age, setAge] = useState(28);
  const [name, setName] = useState("Taylor");
  //   const [todos, setTodos] = useState(() => createTodos());
  function handleClick() {
    const i = Math.floor(Math.random() * names.length);
    setName(names[i]);
    // console.log(name);
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </>
  );
};

export default MyUseState;
