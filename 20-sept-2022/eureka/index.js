function sumDigPow(a, b) {
  let rangeArray = [];
  for (let i = a; i < b; i++) {
    rangeArray.push(i);
  }

  const result = rangeArray.filter((number) => {
    if (number.toString().length === 1) {
      return number;
    } else {
      const sum = number
        .toString()
        .split("")
        .map((digit, index) => Math.pow(Number(digit), index + 1))
        .reduce((a, b) => a + b, 0);

      if (sum === number) return number;
    }
  });

  return result;
}

export  default sumDigPow
