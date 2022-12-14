import binaryArrayToNumber from "./binaireDecimalConverter";

describe("basic cases", () => {
  test("should pass basic tests", () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toEqual(1);
    expect(binaryArrayToNumber([0, 0, 1, 0])).toEqual(2);
    expect(binaryArrayToNumber([0, 1, 0, 1])).toEqual(5);
    expect(binaryArrayToNumber([1, 0, 0, 1])).toEqual(9);
    expect(binaryArrayToNumber([0, 1, 1, 0])).toEqual(6);
    expect(binaryArrayToNumber([1, 1, 1, 1])).toEqual(15);
    expect(binaryArrayToNumber([1, 0, 1, 1])).toEqual(11);
  });
});
