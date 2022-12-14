import firstNonRepeatingLetter from "./firstNonRepeatingCharacter";

describe("Simple Tests", function () {
  test("should handle simple tests", function () {
    expect(firstNonRepeatingLetter("a")).toEqual("a");
    expect(firstNonRepeatingLetter("stress")).toEqual("t");
    expect(firstNonRepeatingLetter("moonmen")).toEqual("e");
  });
  test("should handle empty strings", function () {
    expect(firstNonRepeatingLetter("")).toEqual("");
  });
});

describe("Harder Tests", function () {
  test("should handle all repeating strings", function () {
    expect(firstNonRepeatingLetter("abba")).toEqual("");
    expect(firstNonRepeatingLetter("aa")).toEqual("");
  });
  test("should handle odd characters", function () {
    expect(firstNonRepeatingLetter("∞§ﬁ›ﬂ∞§")).toEqual("ﬁ");
    expect(firstNonRepeatingLetter("hello world, eh?")).toEqual("w");
  });
  test("should handle letter cases", function () {
    expect(firstNonRepeatingLetter("sTreSS")).toEqual("T");
    expect(
      firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")
    ).toEqual(",");
  });
});
