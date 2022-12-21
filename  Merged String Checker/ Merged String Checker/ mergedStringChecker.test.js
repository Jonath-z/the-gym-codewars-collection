import isMerge from "./ mergedStringChecker";

function splitString(s) {
  let parts = ["", ""];
  s.split("").forEach(function (ch) {
    parts[~~(Math.random() * 2)] += ch;
  });
  return parts;
}

function randomChar() {
  return String.fromCharCode(~~(32 + Math.random() * (122 - 32)));
}

function randomString(minLength, maxLength) {
  minLength = minLength || 10;
  maxLength = maxLength || 30;
  let length = Math.floor(minLength + (maxLength - minLength) * Math.random());
  let s = "";
  for (let i = 0; i < length; i++) {
    let ch = randomChar();
    s += ch;
  }
  return s;
}

describe("isMerge", function () {
  test("can handle som basic cases", function () {
    expect(isMerge("xcyc", "xc", "yc")).toBe(true);
    expect(isMerge("xcyc", "yc", "xc")).toBe(true);
    expect(isMerge("xcyc", "xc", "cy")).toBe(true);
    expect(isMerge("xcyc", "cy", "xc")).toBe(true);

    expect(isMerge("codewars", "code", "wars")).toBe(true);
    expect(isMerge("codewars", "cdwr", "oeas")).toBe(true);
    expect(isMerge("Making progress", "Mak pross", "inggre")).toBe(true);
    expect(isMerge("codewars", "code", "code")).toBe(false);
    expect(isMerge("More progress", "More ess", "pro")).toBe(false);
  });

  test("can handle empty parts", function () {
    expect(isMerge("codewars", "codewars", "")).toBe(true);
    expect(isMerge("codewars", "", "codewars")).toBe(true);
    expect(isMerge("", "", "")).toBe(true);
    expect(isMerge("", "no", "siree")).toBe(false);
  });

  test("can handle too few characters", function () {
    expect(isMerge("codewars", "code", "war")).toBe(false);
    expect(isMerge("codewars", "c", "o")).toBe(false);
  });

  test("can handle extra characters", function () {
    expect(isMerge("codewars", "code", "warss")).toBe(false);
    expect(isMerge("codewars", "codes", "wars")).toBe(false);
  });

  test("can handle characters in wrong order", function () {
    expect(isMerge("codewars", "code", "wasr")).toBe(false);
    expect(isMerge("codewars", "cwdr", "oeas")).toBe(false);
  });

  test("can handle bananas", function () {
    expect(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am")).toBe(
      true
    );
  });

  test("can handle some random cases", function () {
    for (let i = 0; i < 20; i++) {
      let mergeable = Math.random < 0.5;
      let s = mergeable
        ? "Can we merge it? Yes, we can!"
        : "Can we merge it? No, we can't";
      let parts = splitString("Can we merge it? Yes, we can!");
      expect(isMerge(s, parts[0], parts[1])).toBe(mergeable);
    }
  });

  test("can handle some even more random cases", function () {
    for (let i = 0; i < 20; i++) {
      let s = randomString();
      let parts = splitString(s);
      expect(isMerge(s, parts[0], parts[1])).toBe(true);
    }
  });

  it("can handle some tricky random cases", function () {
    for (let i = 0; i < 20; i++) {
      let chunks = [
        randomString(1, 7),
        randomString(1, 7),
        randomString(1, 7),
        randomString(1, 7),
      ];
      let s = chunks[0] + chunks[1] + chunks[0] + chunks[2] + chunks[3];
      let p1 = chunks[0] + chunks[2];
      let p2 = chunks[0] + chunks[1] + chunks[3];
      expect(isMerge(s, p1, p2)).toBe(true);
    }
  });
});
