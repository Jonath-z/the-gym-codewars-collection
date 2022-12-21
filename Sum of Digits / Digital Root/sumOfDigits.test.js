import digitalRoot from "./sumOfDigits";

describe("Basic tests", function () {
  test("Should pass basic tests", function () {
    expect(digitalRoot(16)).toStrictEqual(7);
    expect(digitalRoot(195)).toStrictEqual(6);
    expect(digitalRoot(992)).toStrictEqual(2);
    expect(digitalRoot(999999999999)).toStrictEqual(9);
    expect(digitalRoot(167346)).toStrictEqual(9);
    expect(digitalRoot(10)).toStrictEqual(1);
    expect(digitalRoot(0)).toStrictEqual(0);
  });
});

describe("Random tests", function () {
  test("Should pass random tests", function () {
    function digital_root_sol(n) {
      return n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0;
    }

    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000);
      expect(digitalRoot(n)).toStrictEqual(digital_root_sol(n));
    }
  });
});
