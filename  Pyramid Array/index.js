function pyramid(n) {
  // your code here
  if (n === 0) return [];

  let newSet = [];

  while (n > 0) {
    newSet.push(Array(n).fill(1));

    n--;
  }

  return newSet.reverse();
}

export default pyramid;
