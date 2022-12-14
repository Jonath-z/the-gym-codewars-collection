import getCount from "./ VowelCount";

describe("Vowels Count Tests", function () {
  test("should return 5 for 'abracadabra'", function () {
    expect(getCount("abracadabra")).toEqual(5);
  });
  test("should return 4 for 'pear tree'", function () {
    expect(getCount("pear tree")).toEqual(4);
  });
  test("should return 13 for 'o a kak ushakov lil vo kashu kakao'", function () {
    expect(getCount("o a kak ushakov lil vo kashu kakao")).toEqual(13);
  });
  test("should return 0 for 'my pyx'", function () {
    expect(getCount("my pyx")).toEqual(0);
  });
  test("should return 168 for a long input", function () {
    expect(
      getCount(
        "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"
      )
    ).toEqual(168);
  });

  test("should return correct results for random tests", function () {
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
      expect(actual).toStrictEqual(expected);
    }
  });
});
