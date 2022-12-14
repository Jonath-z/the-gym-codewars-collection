import parseInt from "./parseIntReloaded";

describe("Tests", () => {
  test("test", () => {
    expect(parseInt("one")).toEqual(1);
    expect(parseInt("twenty")).toEqual(20);
    expect(parseInt("two hundred forty-six")).toEqual(246);
    expect(
      parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
    ).toEqual(783919);
  });
});
