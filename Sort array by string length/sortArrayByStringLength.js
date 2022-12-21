function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (b.length > a.length) {
      return -1;
    }
    return 0;
  });
}

export default sortByLength;
