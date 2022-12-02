function sortArray(array) {
  // Return a sorted array.
  if (!array.length) return [];

  let indice = [];
  let newArray = array;

  array
    .filter((number, i) => number % 2 && indice.push(i))
    .sort((a, b) => a - b)
    .forEach((number, i) => (newArray[indice[i]] = number));

  return newArray;
}
