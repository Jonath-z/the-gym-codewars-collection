function reverse(str) {
  //WRITE SOME MAGIC
  const words = str.split(" ");

  for (let i = 1; i < words.length; i += 2) {
    words[i] = words[i].split("").reverse().join("");
  }

  return words.join(" ").trim();
}

export default reverse;
