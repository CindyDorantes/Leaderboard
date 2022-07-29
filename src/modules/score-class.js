const scoresTable = document.getElementById('scoresTable');

function display(item) {
  const scoreItem = document.createElement('li');
  scoreItem.classList.add('score-item');
  scoreItem.innerHTML = `${item.user}: ${item.score}`;
  scoresTable.appendChild(scoreItem);
}

export default display;