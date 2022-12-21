import divisibleByFive from "./regularExpressionForBinaryNumbersDivisibleBy5";

describe("Tests", () => {
  test("Fixed tests", () => {
    expect(divisibleByFive.test("")).toBe(false);
    expect(divisibleByFive.test("5")).toBe(false);
  });
});
