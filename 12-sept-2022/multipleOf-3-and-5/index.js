function solution(number) {
  if (number < 0) return 0;

  let multipleSet = [];

  for (let i = 0; i < number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      multipleSet.push(i);
    } else if (i % 5 === 0) {
      multipleSet.push(i);
    } else if (i % 3 === 0) {
      multipleSet.push(i);
    }
  }

  return multipleSet.reduce((a, b) => a + b, 0);
}
