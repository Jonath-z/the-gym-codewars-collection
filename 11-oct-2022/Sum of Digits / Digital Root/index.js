function digitalRoot(n) {
  function sumOfDigit(number) {
    let stringNumber = number.toString();
    if (stringNumber.length === 1) return number;
    let sum = stringNumber.split("").reduce((a, b) => Number(a) + Number(b), 0);
    return sumOfDigit(sum);
  }

  return sumOfDigit(n);
}

export default digitalRoot;
