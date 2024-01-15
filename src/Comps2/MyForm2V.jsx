import { useState } from "react";

const MyForm2V = () => {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(18);
  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <button onClick={() => setAge(age - 1)}>Decrement age</button>
      <br />
      <p>
        Hello, {name} your age is {age}
      </p>
    </>
  );
};

export default MyForm2V;
