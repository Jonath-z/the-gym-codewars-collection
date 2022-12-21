function scramble(str1, str2) {
  //  create a char => value object of string 1
  const str1CharacterFrequency = str1.split("").reduce((container, char) => {
    if (container[char] === undefined) {
      container[char] = 1;
    } else {
      container[char] += 1;
    }
    return container;
  }, {});

  //  create a char => value object of string 2
  const str2characterFrequency = str2.split("").reduce((container, char) => {
    if (container[char] === undefined) {
      container[char] = 1;
    } else {
      container[char] += 1;
    }
    return container;
  }, {});

  //  check string charactes in string 1
  for (let letter of Object.keys(str2characterFrequency)) {
    if (str1CharacterFrequency[letter] >= str2characterFrequency[letter]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

export default scramble;
