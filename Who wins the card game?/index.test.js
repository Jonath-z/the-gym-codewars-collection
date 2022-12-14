// describe("whoWon when there's a letter for the extraCard", function () {
//   var players = { Ben: "8, 9", Amy: "2, Q", Sam: "2, 3" };

//   var actual = whoWon(players, "K", ["Sam"]);
//   var expected = [
//     ["Ben", 17],
//     ["Sam", 15],
//     ["Amy", 12],
//   ];

//   Test.assertSimilar(actual, expected);
// });

// describe("whoWon when there's a draw", function () {
//   var players = { Ben: "5, 2", Amy: "4, 3", Sam: "3, 10" };

//   var actual = whoWon(players, 3, ["Ben", "Amy"]);
//   var expected = [
//     ["Sam", 13],
//     ["Amy", 10],
//     ["Ben", 10],
//   ];

//   Test.assertSimilar(actual, expected);
// });

// describe("whoWon when there's a bust", function () {
//   var players = { Ben: "K, Q", Amy: "8, 9", Sam: "2, 5" };

//   var actual = whoWon(players, 3, ["Ben", "Amy"]);
//   var expected = [
//     ["Amy", 20],
//     ["Sam", 7],
//     ["Ben", 23],
//   ];

//   Test.assertSimilar(actual, expected);
// });

// describe("whoWon when someone wants an extra card but has a score of 21", function () {
//   var players = { Ben: "9, 7", Amy: "9, 9", Sam: "K, Q" };

//   var actual = whoWon(players, 3, ["Amy"]);
//   var expected = [
//     ["Amy", 21],
//     ["Sam", 20],
//     ["Ben", 16],
//   ];

//   Test.assertSimilar(actual, expected);
// });
