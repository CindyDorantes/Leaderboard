import display from './score-class.js';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UBJBM1iHv2sedKqtVkeh/scores';

const get = () => {
  fetch(url)
    .then(async(response) => {
      const data = await response.json();
      const scoresData = data.result;
      return scoresData;
    })
    .then((scoresData) => {
      scoresData.forEach(display);
    });
}

export default get;