import convertFrac from "./commonDenominators";

describe("Tests", () => {
  test("should pass basic tests", () => {
    var lst = [
      [1, 2],
      [1, 3],
      [1, 4],
    ];
    expect(convertFrac(lst)).toEqual("(6,12)(4,12)(3,12)");
  });
});
