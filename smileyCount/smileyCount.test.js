import countSmileys from "./smileyCount";

describe("Basic testing", function () {
  test("examples", () => {
    expect(countSmileys([])).toEqual(0);
    expect(countSmileys([":D", ":~)", ";~D", ":)"])).toEqual(4);
    expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toEqual(2);
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toEqual(1);
  });
});
