import solution from "./multipleOf-3-and-5";

describe("basic tests", function () {
  function doTest(n, expected) {
    let actual = solution(n);
    test(`Expected ${expected}, got ${actual}`, () => {
      expect(actual).toBe(expected);
    });
  }

  doTest(10, 23);
});
