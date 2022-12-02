import findMissingLetter from "./index"

describe("KataTests", function () {
  it("exampleTests", function () {
    Test.assertEquals(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
    Test.assertEquals(findMissingLetter(["O", "Q", "R", "S"]), "P");
  });
});
