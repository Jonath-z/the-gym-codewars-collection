export function narcissistic(value) {
  const checkValue = value
    .toString()
    .split("")
    .map((valueDigit, _, digitSet) =>
      Math.pow(parseInt(valueDigit), digitSet.length)
    )
    .reduce((a, b) => a + b, 0);

  return checkValue === value;
}
