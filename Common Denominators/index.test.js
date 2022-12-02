describe("Tests", () => {
  it("test", () => {
    var lst = [
      [1, 2],
      [1, 3],
      [1, 4],
    ];
    Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)");
  });
});
