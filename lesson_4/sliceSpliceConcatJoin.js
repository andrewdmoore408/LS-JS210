let slice = function(arr, startIndex, endIndex) {
  const slicedArr = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    slicedArr[slicedArr.length] = arr[index];
  }

  return slicedArr;
};

let splice = function(arr, startIndex, numToRemove) {
  const endIndex = startIndex + numToRemove;
  
  const slicedArr = slice(arr, startIndex, endIndex);
  
  for (let index = endIndex; index < arr.length; index += 1) {
    arr[index - numToRemove] = arr[index];
  }
  
  arr.length = arr.length - numToRemove;
  
  return slicedArr;
};

// 3 
function concat(firstArr, secondArr) {
  let newArr = [];
  
  for (let index = 0; index < firstArr.length + secondArr.length; index += 1) {
    if (index < firstArr.length) {
      newArr[index] = firstArr[index];
    } else {
      newArr[index] = secondArr[index - firstArr.length];
    }
  }
  
  return newArr;
}

// 4
function join(array, separator) {
  let newString = '';
  
  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      newString += String(array[index]);
    } else {
      newString += `${String(array[index])}${separator}`;
    }
  }
  
  return newString;
}
