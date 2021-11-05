// 1

function radiansToDegrees(radians) {
  const degreesInHalfCircle = 180;
  const conversion = Math.PI / degreesInHalfCircle;

  return radians * conversion;
}

// 2

const num = -180;
console.log(Math.abs(num));

// 3

let square = 16777216;
console.log(Math.sqrt(square));

// 4

let [base, exponent] = [16, 6];
console.log(Math.pow(base, exponent));

// 5

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

// 6

function getRandomNumber(min, max) {
  if (min === max) max += 1;
  if (min > max) [min, max] = [max, min];
  
  const multiplier = Math.random();
  
  return Math.floor(multiplier * (max - min + 1) + min)
}
