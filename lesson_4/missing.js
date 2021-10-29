function missing(arr) {
  if (arr.length < 2) return [];  
  
  let missingNums = [];
  
  let start = arr[0] + 1;
  let end = arr[arr.length - 1];
  
  for (let number = start; number < end; number += 1) {
    if (arr.includes(number)) {
      continue;
    } else {
      missingNums.push(number);
    }
  }
  
  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
