import './style.css';
import { display } from './modules/score-class';

const scoresData = [
  {
    name: 'Oscar',
    score: 100
  },
  {
    name: 'Jennifer',
    score: 98
  },
  {
    name: 'Mike',
    score: 70
  },
  {
    name: 'Laura',
    score: 100
  },
  {
    name: 'Simon',
    score: 82
  }
];

scoresData.forEach(display);