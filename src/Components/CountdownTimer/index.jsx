/* eslint-disable react/prop-types */
import { useEffect } from "react";
const CountdownTimer = ({ time, updateTime }) => {
  const timer = () => {
    let interval = setInterval(() => {
      if (time > 0) {
        updateTime(time);
      }
    }, 1000);
    clearInterval(interval);
  };

  useEffect(() => {
    timer();
  });
  return (
    <>
      <h1>Timer</h1>
      <div>{time}</div>
    </>
  );
};

export default CountdownTimer;
