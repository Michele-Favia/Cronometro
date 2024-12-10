// Cronometro
let stopwatchInterval;
let stopwatchSeconds = 0;

const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatch = document.getElementById('start-stopwatch');
const pauseStopwatch = document.getElementById('pause-stopwatch');
const resetStopwatch = document.getElementById('reset-stopwatch');

const updateStopwatch = () => {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;

  stopwatchDisplay.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

startStopwatch.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchSeconds++;
    updateStopwatch();
  }, 1000);
});

pauseStopwatch.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
});

resetStopwatch.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  updateStopwatch();
});

// Timer
const timerMinutesInput = document.getElementById('timer-minutes');
const timerDisplay = document.getElementById('timer-display');
const startTimer = document.getElementById('start-timer');
let timerInterval;

startTimer.addEventListener('click', () => {
  let timerSeconds = parseInt(timerMinutesInput.value) * 60 || 0;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      const minutes = Math.floor(timerSeconds / 60);
      const seconds = timerSeconds % 60;

      timerDisplay.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Tempo scaduto!';
      alert('Timer concluso!');
    }
  }, 1000);
});
