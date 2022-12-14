export function removeNb(n) {
  // your code
  const sum = (n * (n + 1)) / 2;
  const numberRemoved = [];

  for (let b = n; b > 0; b--) {
    const a = (sum - b) / (b + 1);

    if (a < n && Number.isInteger(a)) {
      numberRemoved.push([a, b]);
    }
  }
  return numberRemoved;
}
