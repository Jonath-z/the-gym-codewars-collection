function binaryArrayToNumber(arr) {
  let decimalDecoded = 0;

  arr.reverse().forEach((bit, index) => {
    decimalDecoded += Math.pow(2, index) * bit;
  });

  return decimalDecoded;
}

export default binaryArrayToNumber;
