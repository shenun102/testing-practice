// calculator.test.js
const calculator = require("./calculator");

describe("calculator function", () => {
  // Test cases for adding
  test("Adds two numbers and returns the correct result", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("Adds two negative numbers and returns the correct result", () => {
    expect(calculator.add(-5, -4)).toBe(-9);
  });

  test("Adds one positive and one negative number and returns the correct result", () => {
    expect(calculator.add(1, -2)).toBe(-1);
  });

  test("Adding 0 and another number should return that number", () => {
    expect(calculator.add(10, 0)).toBe(10);
  });

  test("Adding two large numbers should return the correct result", () => {
    expect(calculator.add(1000000, 2000000)).toBe(3000000);
  });

  test("Adding a negative number and zero should return the same negative number", () => {
    expect(calculator.add(-5, 0)).toBe(-5);
  });

  // Test cases for subtracting
  test("Subtracts two numbers and returns the correct result", () => {
    expect(calculator.subtract(20, 52)).toBe(-32);
  });

  test("Subtracts two negative numbers and returns the correct result", () => {
    expect(calculator.subtract(-10, -2)).toBe(-8);
  });

  // Test cases for multiplying
  test("Multiplies two numbers and returns the correct result", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
  });

  test("Multiplies two negative numbers and returns the correct positive result", () => {
    expect(calculator.multiply(-10, -2)).toBe(20);
  });

  test("Multiplies one positive and one negative number and returns the correct negative result", () => {
    expect(calculator.multiply(-10, 2)).toBe(-20);
  });

  test("Multiplies two large numbers and returns the correct result", () => {
    expect(calculator.multiply(1000000, 2000000)).toBe(2000000000000);
  });

  test("Multiplies by zero and returns zero", () => {
    expect(calculator.multiply(100, 0)).toBe(0);
  });

  // Test cases for dividing
  test("Divides two numbers and returns the correct result", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("Divides two negative numbers and returns the correct positive result", () => {
    expect(calculator.divide(-10, -2)).toBe(5);
  });

  test("Divides one positive and one negative number and returns the correct negative result", () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
  });

  test("Divides two large numbers and returns the correct result", () => {
    expect(calculator.divide(1000000, 2000000)).toBe(0.5);
  });

  test("Dividing a number by zero should return Infinity", () => {
    expect(calculator.divide(100, 0)).toBe(Infinity);
  });
});
