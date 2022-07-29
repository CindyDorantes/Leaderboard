import './style.css';
import post from './modules/post-score.js';
import get from './modules/get-score.js';

const scoresTable = document.getElementById('scoresTable');
const addForm = document.getElementById('addForm');
const btnRefresh = document.getElementById('btnRefresh');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName = document.getElementById('inputName').value;
  const playerScore = document.getElementById('inputScore').value;

  post(playerName, playerScore);
  addForm.reset();
});

btnRefresh.addEventListener('click', () => {
  scoresTable.innerHTML = '';
  get();
});