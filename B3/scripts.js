
let countdown;
let alarmSound = document.getElementById('alarmSound');

function start() {
  const minutes = parseInt(document.getElementById('minutes').value);
  const seconds = parseInt(document.getElementById('seconds').value);

  if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0) {
    alert('Please enter valid minutes and seconds.');
    return;
  }

  const totalSeconds = minutes * 60 + seconds;

  countdown = setInterval(() => {
    totalSeconds--;
    const displayMinutes = Math.floor(totalSeconds / 60);
    const displaySeconds = totalSeconds % 60;

    document.title = `${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')} - Alarm Clock`;
    document.getElementById('minutes').value = displayMinutes;
    document.getElementById('seconds').value = displaySeconds;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      document.getElementById('resetBtn').disabled = false;
      document.title = 'Alarm Clock';
      alarmSound.play();
      alert('Time is up!');
    }
  }, 1000);

  document.getElementById('startBtn').disabled = true;
}

function reset() {
  clearInterval(countdown);
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
  document.getElementById('startBtn').disabled = false;
  document.getElementById('resetBtn').disabled = true;
  document.title = 'Alarm Clock';
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

  