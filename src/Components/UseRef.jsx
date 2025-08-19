import React, { useState, useRef } from "react";
import "../Styles/UseRef.css";  // import external css file

function UseRef() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current !== null) return; // already running
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="title">⏱ Stopwatch</h1>
      <p className="time">{time} seconds</p>
      <div className="buttons">
        <button onClick={startTimer} className="btn start">Start</button>
        <button onClick={stopTimer} className="btn stop">Stop</button>
        <button onClick={resetTimer} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default UseRef;
