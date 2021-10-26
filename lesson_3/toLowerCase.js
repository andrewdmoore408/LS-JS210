let toLowerCase = (string) => {
  const isLetter = (char) => (isUppercase(char) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)); 

  const isUppercase = (char) => (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);

  const LOWERCASE_CONVERSION_NUM = 32;
  let lowercased = '';

  for (let index = 0; index < string.length; index += 1) {
    let currentLetter = string[index];

    if (isLetter(currentLetter)) {
      if (isUppercase(currentLetter)) {
        lowercased += String.fromCharCode(currentLetter.charCodeAt(0) + LOWERCASE_CONVERSION_NUM);
        continue;
      }
    }

    lowercased += currentLetter; 
  }

  return lowercased;
};

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
