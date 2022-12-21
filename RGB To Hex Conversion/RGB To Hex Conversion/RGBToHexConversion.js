function rgb(r, g, b) {
  // complete this function
  const hexTab = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  function convertToHex(color) {
    let hex1 = "";

    if (color > 255) {
      hex1 += "FF";
    } else if (color < 0) {
      hex1 += "00";
    } else {
      const op = color / 16;
      let decimal = op - (op - Math.floor(op));
      let floatingPoint = op - Math.floor(op);

      floatingPoint * 16 < 10
        ? (hex1 += `${decimal > 9 ? hexTab[decimal] : decimal}${
            floatingPoint * 16
          }`)
        : (hex1 += `${decimal > 9 ? hexTab[decimal] : decimal}${
            hexTab[floatingPoint * 16]
          }`);
    }

    return hex1;
  }

  const result = `${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`;

  return result.length < 6 ? result[0].repeat(6) : result;
}

export default rgb;
