import { nthSmallest } from "./theNthSmallestInteger";

describe("Tests", () => {
  test("test", () => {
    expect(nthSmallest([14, 12, 46, 34, 334], 3)).toEqual(34);
    expect(nthSmallest([14, 12, 46, 0, 334], 1)).toEqual(0);

    let a = [
      455555, 2222222, 3333333, 9879799, 79977979, 79977979, 79977979, 79977979,
      79977979, 79977979, 79977979, 79977979,
    ];
    expect(nthSmallest(a, 3)).toEqual(3333333);
    expect(nthSmallest(a, 6)).toEqual(null);
  });
});
