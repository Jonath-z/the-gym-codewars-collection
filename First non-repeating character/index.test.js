import first_no_repeating from ".";

describe("Simple Tests", function () {
  it("should handle simple tests", function () {
    Test.assertEquals(firstNonRepeatingLetter("a"), "a");
    Test.assertEquals(firstNonRepeatingLetter("stress"), "t");
    Test.assertEquals(firstNonRepeatingLetter("moonmen"), "e");
  });
  it("should handle empty strings", function () {
    Test.assertEquals(firstNonRepeatingLetter(""), "");
  });
});

describe("Harder Tests", function () {
  it("should handle all repeating strings", function () {
    Test.assertEquals(firstNonRepeatingLetter("abba"), "");
    Test.assertEquals(firstNonRepeatingLetter("aa"), "");
  });
  it("should handle odd characters", function () {
    Test.assertEquals(firstNonRepeatingLetter("∞§ﬁ›ﬂ∞§"), "ﬁ");
    Test.assertEquals(firstNonRepeatingLetter("hello world, eh?"), "w");
  });
  it("should handle letter cases", function () {
    Test.assertEquals(firstNonRepeatingLetter("sTreSS"), "T");
    Test.assertEquals(
      firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"),
      ","
    );
  });
});

describe("Random Tests", function () {
  var unique = Test.randomToken()[0],
    rep = new RegExp(unique, "g"),
    s = "",
    temp;
  while (s.length < 100) {
    temp = Test.randomToken().replace(rep, "");
    s += temp + temp;
  }
  s += unique;
  it("should handle random input", function () {
    Test.assertEquals(
      firstNonRepeatingLetter(s),
      unique,
      console.log(
        "Expecting <code>'" +
          unique +
          "'</code> on input of <pre>" +
          s +
          "</pre>"
      )
    );
  });
});
