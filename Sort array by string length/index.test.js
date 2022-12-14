// // const Test = require("@codewars/test-compat");
// import sortByLength from ".";

// function generateTestArray() {
//   let arrayLength = Math.floor(Math.random() * 200 + 1);
//   let tempArray = [];
//   for (let i = 0; i < arrayLength; i++) {
//     let string = "";
//     for (let j = 0; j < i; j++) {
//       string += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//     }
//     tempArray.push(string);
//   }
//   let testArray = [];
//   while (tempArray.length > 0) {
//     testArray = testArray.concat(
//       tempArray.splice(Math.floor(Math.random() * tempArray.length), 1)
//     );
//   }
//   return testArray;
// }

// describe("Basic tests", function () {
//   it("Test 1", function () {
//     Test.assertDeepEquals(sortByLength(["Dog", "Food", "A", "Of"]), [
//       "A",
//       "Of",
//       "Dog",
//       "Food",
//     ]);
//   });
//   it("Test 2", function () {
//     Test.assertDeepEquals(
//       sortByLength(["", "Dictionary", "Eloquent", "Bees"]),
//       ["", "Bees", "Eloquent", "Dictionary"]
//     );
//   });
//   it("Test 3", function () {
//     Test.assertDeepEquals(
//       sortByLength([
//         "A longer sentence",
//         "The longest sentence",
//         "A short sentence",
//       ]),
//       ["A short sentence", "A longer sentence", "The longest sentence"]
//     );
//   });
// });

// describe("Random tests", function () {
//   for (let i = 1; i <= 100; i++) {
//     it("Random test " + i, function () {
//       let testArray = generateTestArray();
//       Test.assertDeepEquals(
//         sortByLength(testArray.slice()),
//         testArray.slice().sort((a, b) => a.length - b.length)
//       );
//     });
//   }
// });
