export const brickRowCount = 6;
export const brickColumnCount = 13;
export const brickWidth = 32;
export const brickHeight = 16;
export const brickPadding = 0;
export const brickOffsetTop = 80;
export const brickOffsetLeft = 16;

export const BRICKSTATUS = { ACTIVE: 1, DESTROYED: 0 };

export let bricks = [];

export function initBricks() {
  bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      const random = Math.floor(Math.random() * 8);
      bricks[c][r] = { x: brickX, y: brickY, status: BRICKSTATUS.ACTIVE, color: random };
    }
  }
}

export function drawBricks(ctx, bricksSprite) {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const currentBrick = bricks[c][r];
      if (currentBrick.status === BRICKSTATUS.DESTROYED) continue;
      const clipX = currentBrick.color * 32;
      ctx.drawImage(
        bricksSprite,
        clipX, 0,
        brickWidth, 31 - brickHeight,
        currentBrick.x, currentBrick.y,
        brickWidth, brickHeight
      );
    }
  }
}

export function collisionDetection(x, y, onBrickDestroyed) {
  let dyFlip = false;
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const currentBrick = bricks[c][r];
      if (currentBrick.status === BRICKSTATUS.DESTROYED) continue;
      const isBallSameXAsBrick = x > currentBrick.x && x < currentBrick.x + brickWidth;
      const isBallSameYAsBrick = y > currentBrick.y && y < currentBrick.y + brickHeight;
      if (isBallSameXAsBrick && isBallSameYAsBrick) {
        dyFlip = true;
        currentBrick.status = BRICKSTATUS.DESTROYED;
        onBrickDestroyed();
      }
    }
  }
  return dyFlip;
}