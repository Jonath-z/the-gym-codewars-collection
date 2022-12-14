import toAcronym from "./makeAcronym";

describe("Make acronym", () => {
  test("Sample Tests", () => {
    let tests = [
      ["Code Wars", "CW"],
      ["Water Closet", "WC"],
      ["Portable Network Graphics", "PNG"],
      ["PHP: Hypertext Preprocessor", "PHP"],
      ["hyper text markup language", "HTML"],
    ];
    tests.forEach(([inp, exp]) => expect(toAcronym(inp)).toEqual(exp));
  });
});
