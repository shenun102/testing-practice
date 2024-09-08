function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const shiftedAlphabet = shiftLeft(alphabet, shiftFactor);

  const cipher = string
    .split("")
    .map((char) => {
      const isUpperCase = char === char.toUpperCase();
      const letter = char.toLowerCase();

      // If character is not a letter, return it as is
      const index = alphabet.indexOf(letter);
      if (index === -1) return char;

      // Get the shifted character
      const shiftedChar = shiftedAlphabet[index];

      //  Return shifted char in correct case

      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    }).join("");

  return cipher;
}

function shiftLeft(array, n) {
  const shiftedArray = array.slice();
  for (let i = 0; i < n; i++) {
    const firstElement = shiftedArray.shift();
    shiftedArray.push(firstElement);
  }
  return shiftedArray;
}

module.exports = caesarCipher