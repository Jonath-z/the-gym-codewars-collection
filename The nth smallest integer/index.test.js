import {nthSmallest} from "./index"

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(nthSmallest([14, 12, 46, 34, 334], 3), 34);
    Test.assertEquals(nthSmallest([14, 12, 46, 0, 334], 1), 0);

    let a = [
      455555, 2222222, 3333333, 9879799, 79977979, 79977979, 79977979, 79977979,
      79977979, 79977979, 79977979, 79977979,
    ];
    Test.assertEquals(nthSmallest(a, 3), 3333333);
    Test.assertEquals(nthSmallest(a, 6), null);
  });
});
