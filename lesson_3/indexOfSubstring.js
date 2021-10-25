function indexOf(firstString, secondString) {
  const NOT_FOUND_INDEX = -1;

  for (let firstStringIndex = 0; firstStringIndex < firstString.length; firstStringIndex++) {
    if (firstString[firstStringIndex] === secondString[0]) {
      if (secondString.length === 1) {
        return firstStringIndex;
      }

      for (let secondStringIndex = 1; secondStringIndex < secondString.length; secondStringIndex++) {
        if (firstString[firstStringIndex + secondStringIndex] !== secondString[secondStringIndex]) {
          break;
        }

        if (secondStringIndex === (secondString.length - 1)) {
          return firstStringIndex;
        }
      }
    }

  }

  return NOT_FOUND_INDEX;
}

function lastIndexOf(firstString, secondString) {

  for (let firstStringIndex = firstString.length - secondString.length; firstStringIndex >= 0; firstStringIndex -= 1) {
    let subStr = ''

    for (let charIndex = firstStringIndex; subStr.length < secondString.length; charIndex++) {
      subStr += firstString[charIndex];
    }

    if (subStr === secondString) {
      return firstStringIndex;
    }

  }

  return -1;

}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
