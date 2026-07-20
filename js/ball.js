export const ballRadius = 3;
export let x, y, dx, dy;

export function initBall(canvas) {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = -3;
  dy = -3;
}

export function drawBall(ctx) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

export function flipDy() {
  dy = -dy;
}

export function ballMovement(canvas, paddleX, paddleWidth, paddleY, paddleHeight, onGameOver) {
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    onGameOver();
    return;
  } else {
    const isBallSameXAsPaddle = x > paddleX && x < paddleX + paddleWidth;
    const isBallInPaddleRange = y + dy >= paddleY && y + dy <= paddleY + paddleHeight;
    if (isBallSameXAsPaddle && isBallInPaddleRange) {
      dy = -dy;
    }
  }

  x += dx;
  y += dy;
}