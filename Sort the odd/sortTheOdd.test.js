import sortArray from "./sortTheOdd";

describe("Sample Tests", () => {
  test("should pass some sample tests", () => {
    expect(sortArray([5, 3, 2, 8, 1, 4])).toStrictEqual([1, 3, 2, 8, 5, 4]);
    expect(sortArray([5, 3, 1, 8, 0])).toStrictEqual([1, 3, 5, 8, 0]);
    expect(sortArray([])).toStrictEqual([]);
  });
});
