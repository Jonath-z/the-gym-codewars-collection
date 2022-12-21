import scramble from "./Scramblies";

describe("Fixed Tests", function () {
  test("Tests", () => {
    expect(scramble("rkqodlw", "world")).toBe(true);
    expect(scramble("cedewaraaossoqqyt", "codewars")).toBe(true);
    expect(scramble("katas", "steak")).toBe(false);
    expect(scramble("scriptjavx", "javascript")).toBe(false);
    expect(scramble("scriptingjava", "javascript")).toBe(true);
    expect(scramble("scriptsjava", "javascripts")).toBe(true);
    expect(scramble("javscripts", "javascript")).toBe(false);
    expect(scramble("jscripts", "javascript")).toBe(false);
    expect(scramble("aabbcamaomsccdd", "commas")).toBe(true);
    expect(scramble("commas", "commas")).toBe(true);
    expect(scramble("sammoc", "commas")).toBe(true);
  });
});
