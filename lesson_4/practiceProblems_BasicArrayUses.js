// 1
function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

// 2
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

// 3
function nthElementOf(arr, index) {
  return arr[index];
}

// If the index passed in is greater than the length of array or is a negative number, undefined will be returned.

// 4
// It's possible to use a negative index to insert data into an array, but it's not going to be inserted like a normal element in an array. This will define a property on the array where the negative number (as a string) will be the key and whatever the index was being assigned to will be the value of the property. This is possible because arrays are objects in javascript.

// 5
function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// 6
function lastNOf(arr, count) {
  return arr.slice(-count);
}

// 7
// Using the implementation given by Launch School for lastNOf(), an unknown number of elements at the end of the array will be returned in a new array. This is because the subtraction ends up with a negative number being passed into slice() and it begins slicing from the end of the array.

// One way to avoid this behavior is to check whether or not the count is greater than the array length, and invoke slice() differently in that case, as follows:
function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice(arr);
  } else {
    return arr.slice(arr.length - count);
  }
}

// 8
function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}
