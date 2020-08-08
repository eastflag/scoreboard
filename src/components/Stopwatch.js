import React, {Component, useEffect, useState} from 'react';

export function Stopwatch() {
  let tickRef;

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    tickRef = setInterval(tick, 1000);
    return () => {
      clearInterval(tickRef);
    }
  }, [])

  let tick = () => {
    console.log('tick');
    if (isRunning) {
      setTimer(timer + 1);
    }
  }

  let handleStopwatch = () => {
    setIsRunning(!isRunning);
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      <button onClick={handleStopwatch}>
        { isRunning ? 'Stop' : 'Start' }
      </button>
      <button>Reset</button>
    </div>
  )
}