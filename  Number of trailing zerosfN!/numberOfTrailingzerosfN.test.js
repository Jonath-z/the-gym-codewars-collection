import zerosFactored from "./numberOfTrailingzerosfN";

describe("Sample Tests", function () {
  test("Should pass sample tests", function () {
    expect(zerosFactored(20)).toEqual(4);
    expect(zerosFactored(5)).toEqual(1);
    expect(zerosFactored(6)).toEqual(1);
    expect(zerosFactored(30)).toEqual(7);
    expect(zerosFactored(4617)).toEqual(1151);
  });
});
