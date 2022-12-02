function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const firstLetter = array[0];
  const lastLetter = array[array.length - 1];
  const fullInterval = [];

  const isUpperCase = () => {
    return firstLetter === firstLetter.toUpperCase();
  };

  for (let letter of isUpperCase() ? alphabet.toUpperCase() : alphabet) {
    if (isUpperCase()) {
      if (letter === firstLetter) {
        fullInterval.push(firstLetter);
      } else if (
        fullInterval[0] === firstLetter &&
        alphabet.toUpperCase().indexOf(lastLetter) >
          alphabet.toUpperCase().indexOf(firstLetter) &&
        letter !== lastLetter
      ) {
        fullInterval.push(letter);
      } else if (letter === lastLetter) {
        fullInterval.push(lastLetter);
        break;
      }
    } else {
      if (letter === firstLetter) {
        fullInterval.push(firstLetter);
      } else if (
        fullInterval[0] === firstLetter &&
        alphabet.indexOf(lastLetter) > alphabet.indexOf(firstLetter) &&
        letter !== lastLetter
      ) {
        fullInterval.push(letter);
      } else if (letter === lastLetter) {
        fullInterval.push(lastLetter);
        break;
      }
    }
  }

  return fullInterval.filter((letter) => array.indexOf(letter) === -1)[0];
}


export default findMissingLetter
