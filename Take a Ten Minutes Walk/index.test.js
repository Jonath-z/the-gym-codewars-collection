// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// let fail = [
//   ["n"],
//   ["n", "s"],
//   ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
//   [
//     "n",
//     "s",
//     "e",
//     "w",
//     "n",
//     "s",
//     "e",
//     "w",
//     "n",
//     "s",
//     "e",
//     "w",
//     "n",
//     "s",
//     "e",
//     "w",
//   ],
//   ["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"],
//   ["e", "e", "e", "w", "n", "s", "n", "s", "e", "w"],
//   ["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"],
//   ["n", "w", "n", "w", "n", "w", "n", "w", "n", "w"],
//   ["e", "s", "e", "s", "e", "s", "e", "s", "e", "s"],
//   ["w", "s", "w", "s", "w", "s", "w", "s", "w", "s"],
// ];

// let pass = [
//   ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
//   ["e", "w", "e", "w", "n", "s", "n", "s", "e", "w"],
//   ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"],
//   ["n", "n", "n", "s", "s", "s", "e", "w", "n", "s"],
// ];

// describe("Walk Validator", function () {
//   it("should return false if walk is too short", function () {
//     assert.isFalse(isValidWalk(fail[0]), "should return false");
//     assert.isFalse(isValidWalk(fail[1]), "should return false");
//   });
//   it("should return false if walk is too long", function () {
//     assert.isFalse(isValidWalk(fail[2]), "should return false");
//     assert.isFalse(isValidWalk(fail[3]), "should return false");
//   });
//   it("should return false if walk does not bring you back to start", function () {
//     assert.isFalse(isValidWalk(fail[4]), "should return false");
//     assert.isFalse(isValidWalk(fail[5]), "should return false");
//     assert.isFalse(isValidWalk(fail[6]), "should return false");
//     assert.isFalse(isValidWalk(fail[7]), "should return false");
//     assert.isFalse(isValidWalk(fail[8]), "should return false");
//     assert.isFalse(isValidWalk(fail[9]), "should return false");
//   });
//   it("should return true for a valid walk", function () {
//     assert.isTrue(isValidWalk(pass[0]), "should return true");
//     assert.isTrue(isValidWalk(pass[1]), "should return true");
//     assert.isTrue(isValidWalk(pass[2]), "should return true");
//     assert.isTrue(isValidWalk(pass[3]), "should return true");
//   });
// });
