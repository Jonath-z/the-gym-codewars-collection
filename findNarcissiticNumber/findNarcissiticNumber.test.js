import { narcissistic } from "./findNarcissiticNumber";

describe("Basic tests", () => {
  it("Basic test should work", () => {
    expect(narcissistic(7)).toEqual(true);
    expect(narcissistic(153)).toEqual(true);
    expect(narcissistic(1634)).toEqual(true);
  });
});
