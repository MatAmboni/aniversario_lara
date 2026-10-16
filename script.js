const birthday = new Date('2026-10-20T00:00:00-03:00');
const values = { days: document.querySelector('#days'), hours: document.querySelector('#hours'), minutes: document.querySelector('#minutes'), seconds: document.querySelector('#seconds') };

function updateCountdown() {
  const distance = Math.max(0, birthday - new Date());
  const seconds = Math.floor(distance / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  values.days.textContent = String(days).padStart(2, '0');
  values.hours.textContent = String(hours).padStart(2, '0');
  values.minutes.textContent = String(minutes).padStart(2, '0');
  values.seconds.textContent = String(remainingSeconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const playButton = document.querySelector('#playButton');
const waveform = document.querySelector('#waveform');
const playLabel = document.querySelector('#playLabel');
const playIcon = playButton.querySelector('.play-icon');
const birthdayAudio = document.querySelector('#birthdayAudio');

function resetPlayer() {
  playButton.setAttribute('aria-pressed', 'false');
  waveform.classList.remove('playing');
  playIcon.textContent = '▶';
  playLabel.textContent = 'dar play na homenagem';
}

playButton.addEventListener('click', async () => {
  const isPlaying = playButton.getAttribute('aria-pressed') === 'true';
  if (isPlaying) {
    birthdayAudio.pause();
    resetPlayer();
    return;
  }

  try {
    await birthdayAudio.play();
    playButton.setAttribute('aria-pressed', 'true');
    waveform.classList.add('playing');
    playIcon.textContent = 'Ⅱ';
    playLabel.textContent = 'tocando para Lara';
  } catch {
    playLabel.textContent = 'não foi possível tocar';
  }
});

birthdayAudio.addEventListener('ended', resetPlayer);