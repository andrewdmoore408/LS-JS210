// 1
function oddElementsOf(arr) {
  let oddElements = [];

  arr.forEach((item, index) => {
    if (index % 2 === 1) {
      oddElements.push(item);
    }
  });

  return oddElements;
}

// 2
let getMirroredArray = function(arr) {
  let mirrored = [];
  
  arr.forEach(item => mirrored.push(item));
  
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    mirrored.push(arr[index]);
  }
  
  return mirrored;
};

// 3
function sortDescending(arr) {
  return arr.slice().sort((a, b) => a < b ? 1 : -1);
}

// 4
function matrixSums(arr) {
  return arr.map(subArr => {
    return subArr.reduce((currentValue, previousValue) => currentValue + previousValue);
  });
}

// 5
function uniqueElements(arr) {
  let uniques = [];
  
  for (let item of arr) {
    if (!uniques.includes(item)) {
      uniques.push(item);
    }
  }
  
  return uniques;
}
