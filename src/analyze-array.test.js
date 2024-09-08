const analyzeArray = require("./analyze-array");

describe("analyze array function", () => {
  test("returns the correct average, min, max, and length for a simple array", () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("returns the correct average, min, max, and length for an array with negative numbers", () => {
    const result = analyzeArray([-1, -2, -3, -4, -5]);
    expect(result).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });

  test("returns the correct average, min, max, and length for an array with mixed positive and negative numbers", () => {
    const result = analyzeArray([10, -5, 0, 20, -10]);
    expect(result).toEqual({
      average: 3,
      min: -10,
      max: 20,
      length: 5,
    });
  });

  test("returns the correct average, min, max, and length for an array with a single element", () => {
    const result = analyzeArray([42]);
    expect(result).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });

  test("returns NaN for the average if the array is empty", () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    });
  });
});
