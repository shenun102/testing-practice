// reverse-string.test.js

const reverseString = require("./reverse-string");

describe("reverseString function", () => {
  // Test: normal case
  test("should reverse a normal string", () => {
    expect(reverseString("olleh")).toBe("hello");
  });

  // Test: empty string
  test("should return an empty string when an empty string is input", () => {
    expect(reverseString("")).toBe("");
  });

  // Test: single character string
  test("should return the same character when the input is a single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  // Test: palindrome
  test("should return the same string if the input is a palindrome", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });

  // Test: string with spaces
  test("should reverse a string with spaces correctly", () => {
    expect(reverseString("hello world be nice")).toBe("ecin eb dlrow olleh");
  });

  // Test: string with special characters
  test("reverse a string with special characters correctly", () => {
    expect(reverseString("$%^&*()")).toBe(")(*&^%$");
  });

  // Test: string with numbers
  test("should reverse a string with numbers correctly", () => {
    expect(reverseString("12345")).toBe("54321");
  });

  // Test: mixed case string
  test("Should reverse a string with mixed case correctly", () => {
    expect(reverseString("HeLlO")).toBe("OlLeH");
  });
});
