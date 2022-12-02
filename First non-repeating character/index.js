function firstNonRepeatingLetter(s) {
  // Add your code here
  if (s.length === 1) return s;

  const result = s
    .toLowerCase()
    .split("")
    .reduce((set, el) => {
      if (set[el]) {
        set[el] += 1;
      } else {
        set[el] = 1;
      }

      return set;
    }, {});

  let first_no_repeating = "";

  for (let i = 0; i < s.length; i++) {
    if (result[s[i].toLowerCase() || s[i].toUpperCase] === 1) {
      first_no_repeating = s[i];
      break;
    }
  }

  return first_no_repeating;
}

export default first_no_repeating;
