let gcdOfTwoNums = (firstNum, secondNum) => {
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }

  return firstNum;
};

function gcd(...nums) {

  let currentGCD = nums.pop();
  
  while (nums.length > 1) {
    currentGCD = gcdOfTwoNums(currentGCD, nums.pop());
  }

  return gcdOfTwoNums(currentGCD, nums.pop());
}

console.log(gcd(12, 4, 8));
console.log(gcd(15, 10));
console.log(gcd(2, 9));
