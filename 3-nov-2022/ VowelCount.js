function getCount(str) {
  return str.split("").reduce((count, el) => {
    if (["a", "e", "i", "o", "u"].includes(el)) {
      count++;
    }

    return count;
  }, 0);
}

export default getCount;
