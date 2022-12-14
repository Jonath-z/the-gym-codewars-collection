import { removeNb } from "./isMyfriendCheating";

describe("Fixed Tests removeNb", function () {
  function testIt(n, expected) {
    test("kata test", function () {
      expect(removeNb(n)).toStrictEqual(expected);
    });
  }

  testIt(26, [
    [15, 21],
    [21, 15],
  ]);
  testIt(101, [
    [55, 91],
    [91, 55],
  ]);
  testIt(102, [
    [70, 73],
    [73, 70],
  ]);
  testIt(110, [
    [70, 85],
    [85, 70],
  ]);
});
