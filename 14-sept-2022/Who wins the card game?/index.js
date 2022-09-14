function whoWon(players, extraCard, extraTakers) {
  //write your code here
  const checkCard = (card) => {
    if (card === "A" || card === "K" || card === "Q" || card === "J") {
      return 10;
    }
    return Number(card);
  };

  const playersName = Object.keys(players);

  const playersAndCorrespondingFinalScore = playersName
    .map((playerName) => {
      let playerScore = players[playerName]
        .split(", ")
        .reduce((a, b) => checkCard(a) + checkCard(b), 0);

      if (extraTakers.includes(playerName)) {
        playerScore += checkCard(extraCard);

        return [playerName, playerScore];
      }

      return [playerName, playerScore];
    })
    .sort((prev, next) => {
      if (prev[1] === next[1]) {
        return 1;
      }

      if (prev[1] > 21 || next[1] > 21) {
        return prev[1] - next[1];
      }

      return next[1] - prev[1];
    });

  return playersAndCorrespondingFinalScore;
}
