import pyramid from "./ pyramidArray";

describe("basic tests", function () {
  test("should pass basic static tests", function () {
    expect(pyramid(0)).toStrictEqual([]);
    expect(pyramid(1)).toStrictEqual([[1]]);
    expect(pyramid(2)).toStrictEqual([[1], [1, 1]]);
    expect(pyramid(3)).toStrictEqual([[1], [1, 1], [1, 1, 1]]);
  });
});

describe("random tests", () => {
  const sol = (n) => Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
  for (let i = 0, n; i < 100; i++) {
    n = Math.floor(Math.random() * 21);
    test("should pass random test ", function () {
      expect(pyramid(n)).toStrictEqual(sol(n));
    });
  }
});
