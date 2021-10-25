let isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    } 
  } 

  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));
