// capitalize.js

function capitalize(str) {
  if (str.length === 0) return str;
  let trimmed = str.trimStart();
  return (
    str.slice(0, str.length - trimmed.length) +
    trimmed.charAt(0).toUpperCase() +
    trimmed.slice(1)
  );
}

module.exports = capitalize;
