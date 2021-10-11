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

let temperatures = [72, 64, 66, 58, 79];

console.log(average(temperatures));
