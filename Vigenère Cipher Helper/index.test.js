var desc = "Testing with lowercase latin alphabet";
describe(desc, function () {
  var abc = "abcdefghijklmnopqrstuvwxyz";

  it("Password of 'password'", function () {
    var c = new VigenèreCipher("password", abc);

    Test.assertEquals(c.encode("codewars"), "rovwsoiv");
    Test.assertEquals(c.decode("rovwsoiv"), "codewars");
    Test.assertEquals(c.encode("waffles"), "laxxhsj");
    Test.assertEquals(c.decode("laxxhsj"), "waffles");
    Test.assertEquals(c.encode("it's a shift cipher!"), "xt'k o vwixl qzswej!");
    Test.assertEquals(c.decode("xt'k o vwixl qzswej!"), "it's a shift cipher!");
  });
  it("Password of 'pizza'", function () {
    var c = new VigenèreCipher("pizza", abc);

    Test.assertEquals(c.encode("asodavwt"), "pancakes");
    Test.assertEquals(c.decode("pancakes"), "asodavwt");
    Test.assertEquals(c.encode("javascript"), "yiuzsrzhot");
    Test.assertEquals(c.decode("yiuzsrzhot"), "javascript");
  });
  it("Password of 'attackatdawn', random tokens", function () {
    var c = new VigenèreCipher("attackatdawn", abc);
    var i, token;
    for (i = 0; i < 5; i++) {
      token = Test.randomToken();
      Test.assertEquals(c.decode(c.encode(token)), token);
    }
  });
});

desc = "Testing with katakana alphabet";
describe(desc, function () {
  var abc =
    "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー";
  it("Password of 'カタカナ'", function () {
    var c = new VigenèreCipher("カタカナ", abc);

    Test.assertEquals(c.encode("カタカナ"), "タモタワ");
    Test.assertEquals(c.decode("タモタワ"), "カタカナ");
    Test.assertEquals(c.encode("javascript"), "javascript");
    Test.assertEquals(c.decode("javascript"), "javascript");
    Test.assertEquals(
      c.encode("ドモアリガトゴザイマス"),
      "ドオカセガヨゴザキアニ"
    );
    Test.assertEquals(
      c.decode("ドオカセガヨゴザキアニ"),
      "ドモアリガトゴザイマス"
    );
  });
});
