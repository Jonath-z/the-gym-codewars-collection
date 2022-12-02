import pyramid from ".";

describe("basic tests", () => {
  it("Testing for 0", () => assert.deepEqual(pyramid(0), []));
  it("Testing for 1", () => assert.deepEqual(pyramid(1), [[1]]));
  it("Testing for 2", () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
  it("Testing for 3", () =>
    assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
});

describe("random tests", () => {
  const sol = (n) => Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
  for (let i = 0, n; i < 100; i++)
    it("Testing for " + (n = Math.floor(Math.random() * 21)), () =>
      assert.deepEqual(pyramid(n), sol(n))
    );
});
