describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(lcm(2, 5), 10);
    Test.assertEquals(lcm(2, 3, 4), 12);
    Test.assertEquals(lcm(9), 9);
  });
});
