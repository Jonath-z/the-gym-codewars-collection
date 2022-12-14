function toAcronym(inp) {
  return inp
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default toAcronym;
