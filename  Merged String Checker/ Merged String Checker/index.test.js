const strictEqual = require("chai").assert.strictEqual;

function doTest(expected, s, part1, part2) {
  const actual = isMerge(s, part1, part2);
  const log = `for s = "${s}"\npart1 = "${part1}"\npart2 = "${part2}"\n`;
  strictEqual(actual, expected, log);
}

describe("isMerge", function () {
  it("can handle som basic cases", function () {
    doTest(true, "xcyc", "xc", "yc");
    doTest(true, "xcyc", "yc", "xc");
    doTest(true, "xcyc", "xc", "cy");
    doTest(true, "xcyc", "cy", "xc");

    doTest(true, "codewars", "code", "wars");
    doTest(true, "codewars", "cdwr", "oeas");
    doTest(true, "Making progress", "Mak pross", "inggre");
    doTest(false, "codewars", "code", "code");
    doTest(false, "More progress", "More ess", "pro");
  });

  it("can handle empty parts", function () {
    doTest(true, "codewars", "codewars", "");
    doTest(true, "codewars", "", "codewars");
    doTest(true, "", "", "");
    doTest(false, "", "no", "siree");
  });

  it("can handle too few characters", function () {
    doTest(false, "codewars", "code", "war");
    doTest(false, "codewars", "c", "o");
  });

  it("can handle extra characters", function () {
    doTest(false, "codewars", "code", "warss");
    doTest(false, "codewars", "codes", "wars");
  });

  it("can handle characters in wrong order", function () {
    doTest(false, "codewars", "code", "wasr");
    doTest(false, "codewars", "cwdr", "oeas");
  });

  it("can handle bananas", function () {
    doTest(true, "Bananas from Bahamas", "Bahas", "Bananas from am");
  });

  it("can handle some random cases", function () {
    for (let i = 0; i < 20; i++) {
      let mergeable = Math.random < 0.5;
      let s = mergeable
        ? "Can we merge it? Yes, we can!"
        : "Can we merge it? No, we can't";
      let parts = splitString("Can we merge it? Yes, we can!");
      doTest(mergeable, s, parts[0], parts[1]);
    }
  });

  it("can handle some even more random cases", function () {
    for (let i = 0; i < 20; i++) {
      let s = randomString();
      let parts = splitString(s);
      doTest(true, s, parts[0], parts[1]);
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
      doTest(true, s, p1, p2);
    }
  });
});

function splitString(s) {
  let parts = ["", ""];
  s.split("").forEach(function (ch) {
    parts[~~(Math.random() * 2)] += ch;
  });
  return parts;
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

function randomChar() {
  return String.fromCharCode(~~(32 + Math.random() * (122 - 32)));
}
