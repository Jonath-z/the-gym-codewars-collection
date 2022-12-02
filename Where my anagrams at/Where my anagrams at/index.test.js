describe("Tests", () => {
  it("test", () => {
    Array.prototype.compare = function (array) {
      if (!array) return false;
      if (this.length != array.length) return false;

      for (let i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
          if (!this[i].compare(array[i])) return false;
        } else if (this[i] != array[i]) {
          return false;
        }
      }
      return true;
    };

    function testAnagrams(word, result, wrong) {
      let results = anagrams(word, result.concat(wrong).sort());
      return results.sort().compare(result.sort());
    }

    let word0, result0, wrong0;
    word0 = "a";
    result0 = ["a"];
    wrong0 = ["b", "c", "d"];
    Test.expect(testAnagrams(word0, result0, wrong0));

    let word1, result1, wrong1;
    word1 = "ab";
    result1 = ["ab", "ba"];
    wrong1 = ["aa", "bb", "cc", "ac", "bc", "cd"];
    Test.expect(testAnagrams(word1, result1, wrong1));

    let word2, result2, wrong2;
    word2 = "abba";
    result2 = ["aabb", "bbaa", "abab", "baba", "baab"];
    wrong2 = ["abcd", "abbba", "baaab", "abbab", "abbaa", "babaa"];
    Test.expect(testAnagrams(word2, result2, wrong2));

    let word3, result3, wrong3;
    word3 = "racer";
    result3 = ["carer", "arcre", "carre"];
    wrong3 = ["racers", "arceer", "raccer", "carrer", "cerarr"];
    Test.expect(testAnagrams(word2, result2, wrong2));

    let word4, result4, wrong4;
    word4 = "big";
    result4 = [];
    wrong4 = ["gig", "dib", "bid", "biig"];
    Test.expect(testAnagrams(word4, result4, wrong4));
  });
});
