let startsWith = (string, searchString) => {
  if (searchString === '') {
    return true;
  }

  if (searchString.length > string.length) {
    return false;
  }

  let startSubString = '';

  for (let charIndex = 0; charIndex < searchString.length; charIndex += 1) {
    startSubString += string[charIndex];
  }

  if (startSubString === searchString) {
    return true;
  } else {
    return false;
  }
};

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
