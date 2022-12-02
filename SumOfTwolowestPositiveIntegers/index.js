function sumTwoSmallestNumbers(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  return sortedNumbers[0] + sortedNumbers[1];
}

export default sumTwoSmallestNumbers;
