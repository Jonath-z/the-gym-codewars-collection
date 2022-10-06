function anagrams(word, words) {
  function getwordLetters(_word) {
    return _word
      .split("")
      .sort()
      .reduce((set, item) => {
        if (set[item]) {
          set[item] += 1;
        } else {
          set[item] = 1;
        }

        return set;
      }, {});
  }

  const wordRef = getwordLetters(word);

  return words.filter(
    (_wordK) =>
      JSON.stringify(wordRef) === JSON.stringify(getwordLetters(_wordK))
  );
}
