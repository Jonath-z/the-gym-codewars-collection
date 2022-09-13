function wave(str) {
  if (!str) return [];

  let index = 0;

  let strSet = [];

  while (index < str.length) {
    if (str[index] === " ") index++;
    else {
      const waveLetter = str[index].toUpperCase();
      const preWaveLetter = str.substring(0, index);
      const postWaveLetter = str.substring(index + 1, str.length);

      strSet.push(preWaveLetter + waveLetter + postWaveLetter);
      index++;
    }
  }

  return strSet;
}
