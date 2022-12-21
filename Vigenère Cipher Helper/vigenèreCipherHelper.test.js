import VigenèreCipher from "./vigenèreCipherHelper";

var desc = "Testing with lowercase latin alphabet";
describe(desc, function () {
  var abc = "abcdefghijklmnopqrstuvwxyz";

  test("Password of 'password'", function () {
    var c = new VigenèreCipher("password", abc);

    expect(c.encode("codewars")).toEqual("rovwsoiv");
    expect(c.decode("rovwsoiv")).toEqual("codewars");
    expect(c.encode("waffles")).toEqual("laxxhsj");
    expect(c.decode("laxxhsj")).toEqual("waffles");
    expect(c.encode("it's a shift cipher!")).toEqual("xt'k o vwixl qzswej!");
    expect(c.decode("xt'k o vwixl qzswej!")).toEqual("it's a shift cipher!");
  });
  test("Password of 'pizza'", function () {
    var c = new VigenèreCipher("pizza", abc);

    expect(c.encode("asodavwt")).toEqual("pancakes");
    expect(c.decode("pancakes")).toEqual("asodavwt");
    expect(c.encode("javascript")).toEqual("yiuzsrzhot");
    expect(c.decode("yiuzsrzhot")).toEqual("javascript");
  });
});

desc = "Testing with katakana alphabet";
describe(desc, function () {
  var abc =
    "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー";
  test("Password of 'カタカナ'", function () {
    var c = new VigenèreCipher("カタカナ", abc);

    expect(c.encode("カタカナ")).toEqual("タモタワ");
    expect(c.decode("タモタワ")).toEqual("カタカナ");
    expect(c.encode("javascript")).toEqual("javascript");
    expect(c.decode("javascript")).toEqual("javascript");
    expect(c.encode("ドモアリガトゴザイマス")).toEqual(
      "ドオカセガヨゴザキアニ"
    );
    expect(c.decode("ドオカセガヨゴザキアニ")).toEqual(
      "ドモアリガトゴザイマス"
    );
  });
});
