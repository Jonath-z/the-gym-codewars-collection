function alphabetPosition(text) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lettersSet = text.split("");

  let lettersPositionSet = [];

  lettersSet.forEach((letter) => {
    if (alphabet.includes(letter.toUpperCase())) {
      let position =
        alphabet.findIndex((el) => el === letter.toUpperCase()) + 1;
      lettersPositionSet.push(position);
    }
  });

  return lettersPositionSet.join(" ");
}

export default alphabetPosition;
