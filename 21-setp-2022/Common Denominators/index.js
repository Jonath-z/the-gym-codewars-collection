function convertFrac(lst) {
  const denomList = lst
    .map(function (fraction) {
      return fraction[1];
    })
    .sort((a, b) => a - b);

  function findGCD(a, b) {
    return !b ? a : findGCD(b, a % b);
  }

  let commonDen = denomList[0];

  for (let i = 1; i < denomList.length; i++) {
    commonDen = (denomList[i] * commonDen) / findGCD(denomList[i], commonDen);
  }

  console.log({ lst });

  const result = lst
    .map(function (frac) {
      return `(${(commonDen / frac[1]) * frac[0]};${commonDen})`;
    })
    .toString()
    .split(",")
    .join("")
    .split(";")
    .join(",");

  return result;
}
