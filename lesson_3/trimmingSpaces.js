let trim = (str) => {
  let firstNonSpace = null;
  let lastNonSpace = null;

  for (let index = 0; index < str.length; index++) {
    if (str[index] !== ' ') {
      firstNonSpace = index;
      break;
    }
  }

  for (let index = str.length - 1; index >= firstNonSpace; index--) {
    if (str[index] !== ' ') {
      lastNonSpace = index;
      break;
    }
  }

  if (firstNonSpace === null || lastNonSpace === null) {
    return '';
  }

  let trimmed = '';

  for (let index = firstNonSpace; index <= lastNonSpace; index++) {
    trimmed += str[index];
  }

  return trimmed;
};

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
