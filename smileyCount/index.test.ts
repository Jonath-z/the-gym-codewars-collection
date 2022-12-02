import { countSmileys } from ".";

describe("Basic testing", function () {
  it("examples", () => {
    expect(countSmileys([])).toEqual(0);
    expect(countSmileys([":D", ":~)", ";~D", ":)"])).toEqual(4);
    expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toEqual(2);
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toEqual(1);
  });
});
