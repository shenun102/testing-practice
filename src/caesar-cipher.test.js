const caesarCipher = require("./caesar-cipher");

describe("caesar cipher function", () => {
  test("returns a correctly shifted string", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("returns a correctly shifted string with case preserved", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("returns a correctly shifted string that ignores punctuation, spaces and symbols", () => {
    expect(caesarCipher("HeLLo How$$ Ar, youE?", 3)).toBe(
      "KhOOr Krz$$ Du, brxH?"
    );
  });
});
