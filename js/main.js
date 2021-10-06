import refs from './refs.js';
const { startBtn, stopBtn, body } = refs;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const deleyInterval = 1000;
let interval = null;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
  interval = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, deleyInterval);
  startBtn.disabled = true;
}

function stopColorChange() {
  clearInterval(interval);
  startBtn.disabled = false;
}
