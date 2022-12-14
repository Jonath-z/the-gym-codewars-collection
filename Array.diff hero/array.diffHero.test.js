import arrayDiffVeryFast from "./array.diffHero";

describe("base cases", function () {
  test("should pass static base cases", function () {
    expect(arrayDiffVeryFast([1, 2], [1])).toStrictEqual([2]);
    expect(arrayDiffVeryFast([1, 2, 2, 2, 3], [2])).toStrictEqual([1, 3]);
  });
});
