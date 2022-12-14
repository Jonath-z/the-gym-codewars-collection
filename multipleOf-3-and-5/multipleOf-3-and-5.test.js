import solution from "./multipleOf-3-and-5";

describe("basic tests", function () {
  function test(n, expected) {
    let actual = solution(n);
    test(`Expected ${expected}, got ${actual}`, () => {
      expect(actual, expected);
    });
  }

  test(10, 23);
});
