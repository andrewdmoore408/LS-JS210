// 1

function push(arr, item) {
  arr[arr.length] = item;

  return arr.length;
}

// 2

function pop(arr) {
  if (arr.length === 0) return undefined;

  let popped = arr[arr.length - 1];

  arr.length = arr.length - 1;

  return popped;
}

// 3

function unshift(arr, item) {
  for (let oldIndex = arr.length - 1; oldIndex >= 0; oldIndex -= 1) {
    arr[oldIndex + 1] = arr[oldIndex];
  }

  arr[0] = item;

  return arr.length;
}

// 4
let shift = arr => {

  if (arr.length === 0) return undefined;

  let firstItem = arr[0];
  
  let tempArr = [];

  for (let index = 1; index < arr.length; index += 1) {
    tempArr.push(arr[index]);
  }
  
  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = tempArr[index];
  }

  arr.length = arr.length - 1;

  return firstItem;
};
