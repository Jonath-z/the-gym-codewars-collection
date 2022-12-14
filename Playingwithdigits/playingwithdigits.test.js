import g964 from "./playingwithdigits";

describe("Fixed Tests", function () {
  function dotest(n, p, expected) {
    expect(g964().digPow(n, p)).toEqual(expected);
  }

  test("digPow", function () {
    dotest(89, 1, 1);
    dotest(92, 1, -1);
    dotest(114, 3, 9);
  });
});
