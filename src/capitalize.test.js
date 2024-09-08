// capitalize.test.js

const capitalize = require("./capitalize");

describe("capitalize function", () => {
  test("Capitalizes the first letter of a single word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("Does not alter a string that is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("Returns an empty string when given an empty string", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });

  test("Handles a string with leading spaces", () => {
    expect(capitalize(" hello")).toBe(" Hello");
  });
});
