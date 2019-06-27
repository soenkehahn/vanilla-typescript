import { add } from "./lib";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
