import "./clock.css";
import { useEffect, useState } from "react";

let hoursArray = Array.from({ length: 24 }, (_, index) => index + 1);
let minutesArray = Array.from({ length: 60 }, (_, index) => index + 1);
let secondsArray = Array.from({ length: 60 }, (_, index) => index + 1);

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [done, setDone] = useState(false);

  const handleSet = () => {
    setDone(true);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (!done) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSec) => prevSec - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMins) => prevMins - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours((prevHour) => prevHour - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              setDone(true);
              clearInterval(interval);
            }
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [done, hours, minutes, seconds]);

  return (
    <>
      <label htmlFor='hours'>Hours</label>
      <select
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
      >
        <option value={0}>0</option>
        {hoursArray.map((hour) => (
          <option key={hour}>{hour}</option>
        ))}
      </select>
      <label htmlFor='minutes'>Minutes</label>
      <select
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
      >
        <option value={0}>0</option>
        {minutesArray.map((minute) => (
          <option key={minute}>{minute}</option>
        ))}
      </select>
      <label htmlFor='seconds'>Seconds</label>
      <select
        value={seconds}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
      >
        <option value={0}>0</option>
        {secondsArray.map((second) => (
          <option key={second}>{second}</option>
        ))}
      </select>
      <div className='clock-container'>
        <div className='hours clk'>{hours}</div>
        <div className='minutes clk'>{minutes}</div>
        <div className='seconds clk'>{seconds}</div>
      </div>
      <button onClick={handleSet}>SET</button>
    </>
  );
};

export default Clock;
