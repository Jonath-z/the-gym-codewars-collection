// import reverse from "./index";

// Test.assertEquals(reverse("Did it work?"), "Did ti work?");
// Test.assertEquals(
//   reverse("I really hope it works this time..."),
//   "I yllaer hope ti works siht time..."
// );
// Test.assertEquals(
//   reverse("Reverse this string, please!"),
//   "Reverse siht string, !esaelp"
// );
// Test.assertEquals(reverse("   "), "");

// describe("Random Tests:", function () {
//   function doReverse(rand) {
//     let toggle = false;
//     let myStr = "";
//     let arr = rand.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//       if (toggle) {
//         myStr += arr[i].split("").reverse().join("");
//       } else {
//         myStr += arr[i];
//       }
//       if (i < arr.length - 1) myStr += " ";
//       toggle = !toggle;
//     }
//     return myStr;
//   }
//   const randint = (a, b) => a + ~~(Math.random() * (b - a + 1));

//   for (let tests = 0; tests < 40; tests++) {
//     let rand = Test.randomToken();
//     let ul = randint(5, 50);
//     for (let i = 0; i < ul; i++) {
//       rand = rand + " " + Test.randomToken();
//     }
//     Test.assertEquals(reverse(rand), doReverse(rand));
//   }
// });
