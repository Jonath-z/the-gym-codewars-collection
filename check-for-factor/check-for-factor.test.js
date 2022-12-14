import { checkForFactor } from "./check-for-factor";

describe("Basic tests", function () {
  const tester = (base, factor, exp) =>
    test(`checkForFactor(${base}, ${factor})`, () =>
      expect(checkForFactor(base, factor)).toBe(exp));

  tester(10, 2, true);
  tester(63, 7, true);
  tester(2450, 5, true);
  tester(24612, 3, true);
  tester(9, 2, false);
  tester(653, 7, false);
  tester(2453, 5, false);
  tester(24617, 3, false);
});
