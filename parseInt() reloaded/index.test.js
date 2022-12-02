describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(parseInt("one"), 1);
    Test.assertEquals(parseInt("twenty"), 20);
    Test.assertEquals(parseInt("two hundred forty-six"), 246);
    Test.assertEquals(
      parseInt("seven hundred eighty-three thousand nine hundred and nineteen"),
      783919
    );
  });
});
