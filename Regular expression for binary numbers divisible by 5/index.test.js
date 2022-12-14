// const { assert } = require("chai");
// import divisibleByFive from "./index";

// describe("Tests", () => {
//   const test = (str, expected) => {
//     const msg = `"${str}" is ${expected ? "" : "not "}divisible by 5`;
//     assert.strictEqual(divisibleByFive.test(str), expected, msg);
//   };

//   it("Fixed tests", () => {
//     assert(
//       divisibleByFive instanceof RegExp,
//       "divisibleByFive should be an instance of RegExp"
//     );
//     assert.strictEqual(
//       divisibleByFive.test(""),
//       false,
//       '"" is not a valid binary number'
//     );
//     assert.strictEqual(
//       divisibleByFive.test("5"),
//       false,
//       '"5" is not a valid binary number'
//     );
//     test(
//       "10011111111111111001010101010101010101010101010110111111111111111101100000000",
//       true
//     );
//   });

//   it("Random tests", () => {
//     for (let i = 0; i <= 200; i++) {
//       const j = (Math.random() * 10000) | 0;
//       if (Math.random() < 0.5) {
//         assert(
//           divisibleByFive instanceof RegExp,
//           "divisibleByFive should be an instance of RegExp"
//         );
//         assert.strictEqual(
//           divisibleByFive.test,
//           regExpProto.test,
//           "divisibleByFive.test is modified"
//         );
//         assert.strictEqual(
//           Object.getPrototypeOf(divisibleByFive),
//           regExpProto,
//           "Prototype of divisibleByFive is modified"
//         );
//       }
//       test(j.toString(2), j % 5 === 0);
//     }
//   });
// });
