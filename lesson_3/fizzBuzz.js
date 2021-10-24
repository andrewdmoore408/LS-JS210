function divisibleBy(divisor) {
  return function isDivisibleBy(dividend) {
    return dividend % divisor === 0;
  }
}

let divisibleByThree = divisibleBy(3);
let divisibleByFive = divisibleBy(5);

function fizzBuzz() {
  for (let index = 1; index <= 100; index += 1) {
    if (divisibleByThree(index) && divisibleByFive(index)) {
      console.log('FizzBuzz');
    } else if (divisibleByThree(index)) {
      console.log('Fizz');
    } else if (divisibleByFive(index)) {
      console.log('Buzz');
    } else {
      console.log(index);
    } 
  }
}

fizzBuzz();
