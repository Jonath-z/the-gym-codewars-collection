export function countSmileys(arr) {
  if (!arr.length) return 0;

  let validSmileys = [
    ":)",
    ";)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ":-)",
    ":~)",
    ";~D",
    ";~)",
    ";-D",
    ";-)",
  ];

  let faceCount = 0;

  for (let face of arr) {
    if (validSmileys.includes(face)) {
      faceCount++;
    }
  }

  return faceCount;
}
