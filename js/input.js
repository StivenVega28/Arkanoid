import { setRightPressed, setLeftPressed } from './paddle.js';

export function initEvents() {
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
}

function keyDownHandler(event) {
  const key = event.key.toLowerCase();
  if (key === 'right' || key === 'arrowright' || key === 'd') setRightPressed(true);
  else if (key === 'left' || key === 'arrowleft' || key === 'a') setLeftPressed(true);
}

function keyUpHandler(event) {
  const key = event.key.toLowerCase();
  if (key === 'right' || key === 'arrowright' || key === 'd') setRightPressed(false);
  else if (key === 'left' || key === 'arrowleft' || key === 'a') setLeftPressed(false);
}