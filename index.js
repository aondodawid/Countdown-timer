const finishDate = new Date(2022, 5, 26, 10);

function calculateDateLetf(timeDiference) {
  const date = {
    days: document.getElementById("days"),
    seconds: document.getElementById("second"),
    minutes: document.getElementById("minutes"),
    hours: document.getElementById("hours"),
  };

  const daysLeft = Math.floor(timeDiference / 24 / 60 / 60 / 1000);

  const hoursLeft = Math.floor(
    (timeDiference - daysLeft * 24 * 60 * 60 * 1000) / 60 / 60 / 1000
  );

  const minutesLeft = Math.floor(
    (timeDiference -
      daysLeft * 24 * 60 * 60 * 1000 -
      hoursLeft * 60 * 60 * 1000) /
      60 /
      1000
  );

  const secondsLeft = Math.round(
    (timeDiference -
      daysLeft * 24 * 60 * 60 * 1000 -
      hoursLeft * 60 * 60 * 1000 -
      minutesLeft * 60 * 1000) /
      1000
  );
  return (
    (date.days.textContent = daysLeft),
    (date.seconds.textContent = secondsLeft),
    (date.minutes.textContent = minutesLeft),
    (date.hours.textContent = hoursLeft)
  );
}

function countTime() {
  const currentTime = Date.now();

  const timeDiference = finishDate - currentTime;
  calculateDateLetf(timeDiference);
}

setInterval(countTime, 1000);
