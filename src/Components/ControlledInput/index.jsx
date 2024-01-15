import { useState } from "react";

const ControlledInput = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type='text' value={text} onChange={handleInputChange} />
      <div>
        {text.length > 0 ? (
          <>
            <p>Text: {text}</p>
            <p>Text Length: {text.length}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ControlledInput;
