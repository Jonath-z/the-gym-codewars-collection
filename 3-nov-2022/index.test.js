const { assert } = require("chai");

describe("Vowels Count Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
  it("should return 4 for 'pear tree'", function () {
    assert.strictEqual(getCount("pear tree"), 4);
  });
  it("should return 13 for 'o a kak ushakov lil vo kashu kakao'", function () {
    assert.strictEqual(getCount("o a kak ushakov lil vo kashu kakao"), 13);
  });
  it("should return 0 for 'my pyx'", function () {
    assert.strictEqual(getCount("my pyx"), 0);
  });
  it("should return 168 for a long input", function () {
    assert.strictEqual(
      getCount(
        "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"
      ),
      168
    );
  });
  it("should return correct results for random tests", function () {
    const rnd = (m, n = 0) => (Math.random() * (n - m) + m) | 0;
    const elements = (xs) => xs[rnd(xs.length)];
    const CHARS = "abcdefghijklmnopqrstuvwxyz    ";
    const rndString = (size) =>
      Array.from({ length: rnd(size) }, () => elements(CHARS)).join("");
    const refGetCount = (s) => s.replace(/[^aeiou]/g, "").length;
    for (let i = 1; i <= 100; i++) {
      const s = rndString(i);
      const actual = getCount(s);
      const expected = refGetCount(s);
      assert.strictEqual(actual, expected, `For input ${JSON.stringify(s)}`);
    }
  });
});
