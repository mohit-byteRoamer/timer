import React from "react";
import "./App.css";

function App() {
  const [isActice, setIsActice] = React.useState(false);
  const [ispaused, setIsPaused] = React.useState(false);
  const [time, setTime] = React.useState(0);

  let StartTimer = function () {
    setIsActice(true);
  };

  let stopTime = function () {
    setIsActice(false);
  };

  let resetTime = function () {
    setIsActice(false);
    setTime(0);
  };

  React.useEffect(() => {
    let interval = null;
    if (isActice && ispaused == false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActice, ispaused]);

  return (
    <div className="App">
      <div>
        <div className="time">{time}</div>
      </div>
      <div>
        <button className="button" onClick={() => StartTimer()}>
          Start
        </button>
        <button className="button" onClick={() => stopTime()}>
          Stop
        </button>
        <button className="button" onClick={() => resetTime()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
