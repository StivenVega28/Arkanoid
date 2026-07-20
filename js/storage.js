const HIGH_SCORE_KEY = 'arkanoidHighScore';

export function getHighScore() {
    return Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
}

export function setHighScore(score) {
    localStorage.setItem(HIGH_SCORE_KEY, score);
}