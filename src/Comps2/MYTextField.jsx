import { useState } from "react";

const MYTextField = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <p>You Typed: {text}</p>
      <button onClick={() => setText("")}>Reset</button>
    </>
  );
};
export default MYTextField;
