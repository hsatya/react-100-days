/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CountdownClock = ({ timer }) => {
  const [seconds, setSeconds] = useState(timer);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
        }
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (timeInSeconds) => {
    const mints = Math.floor(timeInSeconds / 60);
    const secs = timeInSeconds % 60;
    return `${String(mints).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
      <h1>Coundown Timer</h1>
      <p>Time Remaining: {formatTime(seconds)}</p>
    </>
  );
};

export default CountdownClock;
