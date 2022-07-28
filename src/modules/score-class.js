const scoresTable = document.getElementById('scoresTable');

class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score
  }

  displayScore() {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-item');
    scoreItem.innerHTML = `${this.name}: ${this.score}`;
    scoresTable.appendChild(scoreItem);
  }
};

function display(item) {
  const scoreItem = document.createElement('li');
  scoreItem.classList.add('score-item');
  scoreItem.innerHTML = `${item.name}: ${item.score}`;
  scoresTable.appendChild(scoreItem);
}

export {display};