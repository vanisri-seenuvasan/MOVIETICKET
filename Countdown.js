import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  const TIME_LIMIT = 20;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  const [label, setLabel] = useState(formatTime(timeLeft));

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed + 1;
      timeLeft = TIME_LIMIT - timePassed;
      setLabel(formatTime(timeLeft));
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    const remainingPath = document.getElementById("base-timer-path-remaining");

    if (timeLeft <= alert.threshold) {
      remainingPath.classList.remove(warning.color);
      remainingPath.classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      remainingPath.classList.remove(info.color);
      remainingPath.classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const remainingPath = document.getElementById("base-timer-path-remaining");
    const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
    remainingPath.setAttribute("stroke-dasharray", circleDasharray);
  }

  return (
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            strokeDasharray="283"
            className={`base-timer__path-remaining ${remainingPathColor}`}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">{label}</span>
    </div>
  );
};

export default Countdown;
