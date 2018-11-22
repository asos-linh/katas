import { add } from '../task';

describe('The String Calculator', () => {
  test("should return 0 when given '0'", () => {
    expect(add("0")).toEqual(0);
  });

  test("should return 0 when given empty string", () => {
    expect(add("")).toEqual(0);
  });

  test("should return 5 when given '5'", () => {
    expect(add("5")).toEqual(5);
  });

  test("should return 3 when given '3'", () => {
    expect(add("2")).toEqual(2);
  })
});
