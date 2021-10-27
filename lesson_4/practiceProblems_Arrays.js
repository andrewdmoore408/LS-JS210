// 1

function lastInArray(arr) {
  return arr[arr.length - 1];
}

// 2

let rollCall = function(names) {
  for (let index = 0; index < names.length; index += 1) {
    console.log(names[index]);
  }
};

// 3

function reverseArray(array) {
  let reversed = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversed.push(array[index]);
  }

  return reversed;
}

// 4

let squishElements = arr => {
  let squishString = '';

  for (let index = 0; index < arr.length; index += 1) {
    squishString += String(arr[index]);
  }

  return squishString;
};

