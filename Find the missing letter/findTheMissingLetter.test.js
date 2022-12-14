import findMissingLetter from "./findTheMissingLetter";

describe("KataTests", function () {
  test("basic test", function () {
    expect(findMissingLetter(["a", "b", "c", "d", "f"])).toEqual("e");
    expect(findMissingLetter(["O", "Q", "R", "S"])).toEqual("P");
  });
});
