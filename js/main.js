import { initPaddle, drawPaddle, paddleMovement, paddleX, paddleY, paddleWidth, paddleHeight } from './paddle.js';
import { initBall, drawBall, ballMovement, flipDy, x, y } from './ball.js';
import { initBricks, drawBricks, collisionDetection } from './bricks.js';
import { initEvents } from './input.js';
import { drawUI } from './ui.js';
import { getHighScore, setHighScore } from './storage.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const sprite = document.querySelector('#sprite');
const bricksSprite = document.querySelector('#bricks');

canvas.width = 448;
canvas.height = 400;

let score = 0;
let highScore = getHighScore();
let gameOver = false;

const fps = 60;
let msPrev = window.performance.now();
let msFPSPrev = window.performance.now() + 1000;
const msPerFrame = 1000 / fps;
let frames = 0;
let framesPerSec = fps;

initPaddle(canvas);
initBall(canvas);
initBricks();
initEvents();

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleGameOver() {
  gameOver = true;
  console.log('Game Over');
  setTimeout(resetGame, 500);
}

function resetGame() {
  score = 0;
  initPaddle(canvas);
  initBall(canvas);
  initBricks();
  gameOver = false;
  draw();
}

function handleBrickDestroyed() {
  score += 10;
  if (score > highScore) {
    highScore = score;
    setHighScore(highScore);
  }
}

function draw() {
  if (gameOver) return;
  window.requestAnimationFrame(draw);

  const msNow = window.performance.now();
  const msPassed = msNow - msPrev;
  if (msPassed < msPerFrame) return;

  const excessTime = msPassed % msPerFrame;
  msPrev = msNow - excessTime;
  frames++;

  if (msFPSPrev < msNow) {
    msFPSPrev = window.performance.now() + 1000;
    framesPerSec = frames;
    frames = 0;
  }

  cleanCanvas();
  drawBall(ctx);
  drawPaddle(ctx, sprite);
  drawBricks(ctx, bricksSprite);
  drawUI(ctx, canvas, framesPerSec, score, highScore);

  const dyFlip = collisionDetection(x, y, handleBrickDestroyed);
  if (dyFlip) flipDy();
  ballMovement(canvas, paddleX, paddleWidth, paddleY, paddleHeight, handleGameOver);
  paddleMovement(canvas);
}

draw();