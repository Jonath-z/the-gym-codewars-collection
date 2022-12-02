function findOdd(A) {
  let resultKey = A.reduce((a, b) => {
    if (a[b]) {
      a[b] += 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});

  const res = Object.keys(resultKey).filter((key) => {
    if (resultKey[key] % 2 !== 0) {
      return resultKey[key];
    }
  });

  return Number(res[0]);
}
