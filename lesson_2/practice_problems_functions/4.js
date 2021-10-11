function sum(nums) {
  let total = 0;

  for (let index = 0; index < nums.length; index++) {
    total += nums[index];
  }

  return total;
}

function average(nums) {
  return sum(nums) / nums.length;
}

console.log(average([2, 4, 6, 8, 19]));
