import rgb from "./RGBToHexConversion";

describe("Tests", () => {
  test("Basic Tests", () => {
    expect(rgb(0, 0, 0)).toEqual("000000");
    expect(rgb(0, 0, -20)).toEqual("000000");
    expect(rgb(300, 255, 255)).toEqual("FFFFFF");
    expect(rgb(173, 255, 47)).toEqual("ADFF2F");
  });

  function rgbReference(r, g, b) {
    function hex(n) {
      n = parseInt(n, 10);
      if (isNaN(n)) return "00";
      n = Math.max(0, Math.min(n, 255));
      var chars = "0123456789ABCDEF";
      return chars.charAt((n - (n % 16)) / 16) + chars.charAt(n % 16);
    }

    return hex(r) + hex(g) + hex(b);
  }

  function elevatorReference(left, right, call) {
    return Math.abs(right - call) <= Math.abs(left - call) ? "right" : "left";
  }

  function randInt(a, b) {
    return (Math.random() * (b - a + 1) + a) | 0;
  }

  function generator() {
    var a = randInt(-5, 300);
    var b = randInt(-5, 300);
    var c = randInt(-5, 300);
    return [a, b, c];
  }

  function randomAssertSimilar(
    generator,
    userSolution,
    referenceSolution,
    tests
  ) {
    tests = tests || 100;
    var user, reference, values;
    while (tests-- > 0) {
      values = generator();
      reference = referenceSolution.apply(this, values);
      user = userSolution.apply(this, values);
      expect(user).toEqual(reference);
    }
  }

  test("Random Tests", function () {
    randomAssertSimilar(generator, rgb, rgbReference);
  });
});
