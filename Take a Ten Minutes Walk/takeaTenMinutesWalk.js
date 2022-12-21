function isValidWalk(walk) {
  if (walk.length === 0) return false;
  let valid = 0;
  for (let i = 0; i < walk.length; i++) {
    let dir = walk[i];
    if (dir === "n") {
      valid += 1;
      continue;
    } else if (dir === "s") {
      valid -= 1;
      continue;
    } else if (dir === "w") {
      valid += 2;
      continue;
    } else if (dir === "e") {
      valid -= 2;
      continue;
    } else {
      break;
    }
  }
  return walk.length === 10 && valid === 0;
}

export default isValidWalk;
