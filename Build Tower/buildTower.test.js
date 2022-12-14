import towerBuilder from "./buildTower";

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
  test("Basic Test", function () {
    expect(towerBuilder(1)).toStrictEqual(["*"]);
    expect(towerBuilder(2)).toStrictEqual([" * ", "***"]);
    expect(towerBuilder(3)).toStrictEqual(["  *  ", " *** ", "*****"]);
  });

  test("Blanket Test", function () {
    for (let n = 1; n < 100; ++n) {
      expect(towerBuilder(n)).toStrictEqual(sol(n));
    }
  });
});
