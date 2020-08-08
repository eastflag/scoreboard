import React, {useEffect, useRef, useState} from 'react';

export function Stopwatch() {

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    if (isRunning) {
      setTimer(timer + 1);
    }
  }, 1000);

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

// useEffect + setInterval 을 결합한 custom hook
function useInterval(callback) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
}