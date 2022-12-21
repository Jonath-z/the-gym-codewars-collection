import reverse from "./reverseEveryOtherWordIntTheString";

describe("basic tests", () => {
  test("test", () => {
    expect(reverse("Did it work?")).toEqual("Did ti work?");

    expect(reverse("I really hope it works this time...")).toEqual(
      "I yllaer hope ti works siht time..."
    );
    expect(reverse("Reverse this string, please!")).toEqual(
      "Reverse siht string, !esaelp"
    );
    expect(reverse("   ")).toEqual("");
  });
});

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
//     let rand = tests.randomToken();
//     let ul = randint(5, 50);
//     for (let i = 0; i < ul; i++) {
//       rand = rand + " " + Test.randomToken();
//     }
//     Test.assertEquals(reverse(rand), doReverse(rand));
//   }
// });
