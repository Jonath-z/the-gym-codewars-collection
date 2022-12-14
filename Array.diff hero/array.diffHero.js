function arrayDiffVeryFast(a, b) {
  let newSet = [...new Set(a)];

  let formatedb = [...new Set(b)];

  for (let bElement of formatedb) {
    if (newSet.includes(bElement)) {
      newSet = newSet.filter((el) => el !== bElement);
    }
  }

  return newSet;
}

export default arrayDiffVeryFast;
