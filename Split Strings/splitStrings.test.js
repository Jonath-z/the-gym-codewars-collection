import solution from "./splitStrings";

describe("Split Strings", () => {
  test("Basic tests", () => {
    expect(solution("abcdef")).toStrictEqual(["ab", "cd", "ef"]);
    expect(solution("abcdefg")).toStrictEqual(["ab", "cd", "ef", "g_"]);
    expect(solution("")).toStrictEqual([]);
  });
});
