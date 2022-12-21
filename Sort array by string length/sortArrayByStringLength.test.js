import sortByLength from "./sortArrayByStringLength";

function generateTestArray() {
  let arrayLength = Math.floor(Math.random() * 200 + 1);
  let tempArray = [];
  for (let i = 0; i < arrayLength; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    tempArray.push(string);
  }
  let testArray = [];
  while (tempArray.length > 0) {
    testArray = testArray.concat(
      tempArray.splice(Math.floor(Math.random() * tempArray.length), 1)
    );
  }
  return testArray;
}

describe("Basic tests", function () {
  test("Test 1", function () {
    expect(sortByLength(["Dog", "Food", "A", "Of"])).toStrictEqual([
      "A",
      "Of",
      "Dog",
      "Food",
    ]);
  });
  test("Test 2", function () {
    expect(sortByLength(["", "Dictionary", "Eloquent", "Bees"])).toStrictEqual([
      "",
      "Bees",
      "Eloquent",
      "Dictionary",
    ]);
  });
  test("Test 3", function () {
    expect(
      sortByLength([
        "A longer sentence",
        "The longest sentence",
        "A short sentence",
      ])
    ).toStrictEqual([
      "A short sentence",
      "A longer sentence",
      "The longest sentence",
    ]);
  });
});

describe("Random tests", function () {
  for (let i = 1; i <= 100; i++) {
    test("Random test " + i, function () {
      let testArray = generateTestArray();
      expect(sortByLength(testArray.slice())).toStrictEqual(
        testArray.slice().sort((a, b) => a.length - b.length)
      );
    });
  }
});
