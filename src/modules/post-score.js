const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UBJBM1iHv2sedKqtVkeh/scores';

const post = (playerName, playerScore) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: playerName,
      score: playerScore
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}

export default post;