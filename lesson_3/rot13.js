const isLetter = char => {
  const thisCharCode = char.charCodeAt(0);

  if ((thisCharCode >= 65 && thisCharCode <= 90) || (thisCharCode >= 97 && thisCharCode <= 122)) {
    return true;
  }

  return false;
};

const rotateBy13 = letter => {
  const LOWERCASE_A = 97;
  const UPPERCASE_A = 65;

  const currentCharCode = letter.charCodeAt(0);
  const charCodeForA = currentCharCode > 90 ? LOWERCASE_A : UPPERCASE_A;

  const newLetterIndex = (currentCharCode - charCodeForA + 13) % 26;
  const newCharCode = charCodeForA + newLetterIndex;

  return String.fromCharCode(newCharCode);
};

function rot13(string) {
  let encodedString = '';

  for (let currentIndex = 0; currentIndex < string.length; currentIndex += 1) {
    let currentChar = string[currentIndex];
    if (isLetter(currentChar)) {
      encodedString += rotateBy13(currentChar);
    } else {
      encodedString += currentChar;
    }
  }

  return encodedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
