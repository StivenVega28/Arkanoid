export const PADDLESENSITIVITY = 8;
export const paddleHeight = 10;
export const paddleWidth = 50;

export let paddleX;
export let paddleY;
export let rightPressed = false;
export let leftPressed = false;

export function initPaddle(canvas) {
  paddleX = canvas.width / 2 - paddleWidth / 2;
  paddleY = canvas.height - paddleHeight - 10;
}

export function drawPaddle(ctx, sprite) {
  ctx.drawImage(
    sprite,
    29, 174,
    paddleWidth, paddleHeight,
    paddleX, paddleY,
    paddleWidth, paddleHeight
  );
}

export function paddleMovement(canvas) {
  if (rightPressed) {
    paddleX = Math.min(canvas.width - paddleWidth, paddleX + PADDLESENSITIVITY);
  } else if (leftPressed) {
    paddleX = Math.max(0, paddleX - PADDLESENSITIVITY);
  }
}

export function setRightPressed(value) { rightPressed = value; }
export function setLeftPressed(value) { leftPressed = value; }