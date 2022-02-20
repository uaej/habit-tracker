import React, { useEffect, useMemo, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const btnClicked = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <p className="habitTimer">
        {Math.round(seconds / 60)} : {Math.round(seconds % 60)}
      </p>
      <button className="btnTimer" onClick={btnClicked}>
        {isActive ? "stop" : "start"}
      </button>
    </>
  );
};

export default Timer;
