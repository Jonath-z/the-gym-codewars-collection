import binaryArrayToNumber from ".";

describe("One's and Zero's", () => {
  it("Example tests", () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toEqual(1);
    expect(binaryArrayToNumber([0, 0, 1, 0])).toEqual(2);
    expect(binaryArrayToNumber([1, 1, 1, 1])).toEqual(15);
    expect(binaryArrayToNumber([0, 1, 1, 0])).toEqual(6);
  });
});
