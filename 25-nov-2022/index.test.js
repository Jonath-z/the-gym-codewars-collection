const Test = require("@codewars/test-compat");

function sol(nFloors) {
  let floors = [];
  for (let i = 0, n = nFloors - 1; i < nFloors; ++i, --n) {
    floors.push(
      Array(n + 1).join(" ") +
        Array(i * 2 + 2).join("*") +
        Array(n + 1).join(" ")
    );
  }
  return floors;
}

describe("towerBuilder", function () {
  it("Basic Test", function () {
    Test.assertDeepEquals(towerBuilder(1), ["*"]);
    Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
    Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
  });
  it("Blanket Test", function () {
    for (let n = 1; n < 100; ++n) {
      Test.assertDeepEquals(towerBuilder(n), sol(n));
    }
  });
});
