export function drawUI(ctx, canvas, framesPerSec, score, highScore) {
  ctx.save();

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.fillRect(0, 0, canvas.width, 22);

  ctx.font = 'bold 14px Arial';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = '#00e6e6';
  ctx.textAlign = 'left';
  ctx.fillText(`Score: ${score}`, 10, 11);

  ctx.fillStyle = '#ffd700';
  ctx.textAlign = 'center';
  ctx.fillText(`Best: ${highScore}`, canvas.width / 2, 11);

  ctx.font = '10px Arial';
  ctx.fillStyle = '#888';
  ctx.textAlign = 'right';
  ctx.fillText(`FPS: ${framesPerSec}`, canvas.width - 10, 11);

  ctx.restore();
}