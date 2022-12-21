import isValidWalk from "./takeaTenMinutesWalk";

let fail = [
  ["n"],
  ["n", "s"],
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
  [
    "n",
    "s",
    "e",
    "w",
    "n",
    "s",
    "e",
    "w",
    "n",
    "s",
    "e",
    "w",
    "n",
    "s",
    "e",
    "w",
  ],
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"],
  ["e", "e", "e", "w", "n", "s", "n", "s", "e", "w"],
  ["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"],
  ["n", "w", "n", "w", "n", "w", "n", "w", "n", "w"],
  ["e", "s", "e", "s", "e", "s", "e", "s", "e", "s"],
  ["w", "s", "w", "s", "w", "s", "w", "s", "w", "s"],
];

let pass = [
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
  ["e", "w", "e", "w", "n", "s", "n", "s", "e", "w"],
  ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"],
  ["n", "n", "n", "s", "s", "s", "e", "w", "n", "s"],
];

describe("Walk Validator", function () {
  test("should return false if walk is too short", function () {
    expect(isValidWalk(fail[0])).toBe(false);
    expect(isValidWalk(fail[1])).toBe(false);
  });
  test("should return false if walk is too long", function () {
    expect(isValidWalk(fail[2])).toBe(false);
    expect(isValidWalk(fail[3])).toBe(false);
  });
  test("should return false if walk does not bring you back to start", function () {
    expect(isValidWalk(fail[4])).toBe(false);
    expect(isValidWalk(fail[5])).toBe(false);
    expect(isValidWalk(fail[6])).toBe(false);
    expect(isValidWalk(fail[7])).toBe(false);
    expect(isValidWalk(fail[8])).toBe(false);
    expect(isValidWalk(fail[9])).toBe(false);
  });
  test("should return true for a valid walk", function () {
    expect(isValidWalk(pass[0])).toBe(true);
    expect(isValidWalk(pass[1])).toBe(true);
    expect(isValidWalk(pass[2])).toBe(true);
    expect(isValidWalk(pass[3])).toBe(true);
  });
});
