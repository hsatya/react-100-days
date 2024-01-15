import { useState } from "react";

const MyCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You have pressed me {count} times
    </button>
  );
};

export default MyCounter;
