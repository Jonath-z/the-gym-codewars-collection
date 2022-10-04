import lcm from "./index";

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(lcm(2, 5), 10);
    Test.assertEquals(lcm(2, 3, 4), 12);
    Test.assertEquals(lcm(9), 9);
    Test.assertEquals(lcm(0), 0);
    Test.assertEquals(lcm(0, 1), 0);
    Test.assertEquals(lcm(1, 1, 1), 1);
    Test.assertEquals(
      lcm(5, 6, 7, 9, 6, 9, 18, 4, 5, 15, 15, 10, 17, 7),
      21420
    );
    Test.assertEquals(
      lcm(17, 20, 4, 15, 4, 18, 12, 14, 20, 19, 2, 14, 13, 7),
      5290740
    );
    Test.assertEquals(
      lcm(11, 13, 4, 5, 17, 4, 10, 13, 16, 13, 13, 14, 20, 14),
      1361360
    );
    Test.assertEquals(lcm(20, 1, 6, 10, 3, 7, 8, 4), 840);
    Test.assertEquals(lcm(3, 9, 9, 19, 18, 14, 18, 9), 2394);
    Test.assertEquals(lcm(3, 9, 9, 19, 18, 14, 18, 0), 0);
    Test.assertEquals(lcm(19, 3, 20, 15, 4, 17, 14), 135660);
    console.log("Random Tests");
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

      Test.assertEquals(
        lcm(a, b, c, d),
        ref_lcm(a, b, c, d),
        "lcm(" + [a, b, c, d].join(", ") + ")"
      );
    })();
  });
});
