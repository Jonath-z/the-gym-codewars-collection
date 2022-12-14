import lcm from "./leastCommonMultiple";

describe("Tests", () => {
  test("test", () => {
    expect(lcm(2, 5)).toEqual(10);
    expect(lcm(2, 3, 4)).toEqual(12);
    expect(lcm(9)).toEqual(9);
    expect(lcm(0)).toEqual(0);
    expect(lcm(0, 1)).toEqual(0);
    expect(lcm(1, 1, 1)).toEqual(1);
    expect(lcm(5, 6, 7, 9, 6, 9, 18, 4, 5, 15, 15, 10, 17, 7)).toEqual(21420);
    expect(lcm(17, 20, 4, 15, 4, 18, 12, 14, 20, 19, 2, 14, 13, 7)).toEqual(
      5290740
    );

    expect(lcm(20, 1, 6, 10, 3, 7, 8, 4)).toEqual(840);
    expect(lcm(3, 9, 9, 19, 18, 14, 18, 9)).toEqual(2394);
    expect(lcm(3, 9, 9, 19, 18, 14, 18, 0)).toEqual(0);
    expect(lcm(19, 3, 20, 15, 4, 17, 14)).toEqual(135660);

    (function () {
      var ref_gcd2 = function (a, b) {
        return b === 0 ? a : ref_gcd2(b, a % b);
      };

      var ref_lcm2 = function (a, b) {
        return Math.abs(a * b) / ref_gcd2(a, b);
      };

      var ref_lcm = function () {
        return [].slice.call(arguments, 0).reduce(ref_lcm2, 1);
      };

      var a = Math.floor(Math.random() * 10000),
        b = Math.floor(Math.random() * 10000),
        c = Math.floor(Math.random() * 10000),
        d = Math.floor(Math.random() * 10000);

      expect(lcm(a, b, c, d)).toEqual(ref_lcm(a, b, c, d));
    })();
  });
});
