function average(nums) {
  let total = 0;

  for (let index = 0; index < nums.length; index++) {
    total += nums[index];
  }

  return total / nums.length;
}

console.log(average([2, 4, 6, 8, 19]));
