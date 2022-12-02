const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
import digitalRoot from ".";

// patch to not disable old solutions
if (typeof digital_root === "function") digitalRoot = digital_root;

describe("Basic tests", function () {
  it("Should pass basic tests", function () {
    assert.strictEqual(digitalRoot(16), 7);
    assert.strictEqual(digitalRoot(195), 6);
    assert.strictEqual(digitalRoot(992), 2);
    assert.strictEqual(digitalRoot(999999999999), 9);
    assert.strictEqual(digitalRoot(167346), 9);
    assert.strictEqual(digitalRoot(10), 1);
    assert.strictEqual(digitalRoot(0), 0);
  });
});

describe("Random tests", function () {
  it("Should pass random tests", function () {
    function digital_root_sol(n) {
      return n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0;
    }

    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000);
      assert.strictEqual(digitalRoot(n), digital_root_sol(n));
    }
  });
});
