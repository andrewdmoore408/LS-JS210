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

function getPrimesLowerThan(ceiling) {
  let primes = [];

  for (let currentNumber = 2; currentNumber < ceiling; currentNumber += 1) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
  }

  return primes;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let primesArray = getPrimesLowerThan(expectedSum);

  let pairs = [];

  primesArray.forEach((currentPrime, index) => {
    for (let j = index; j < primesArray.length; j += 1) {
      if (currentPrime + primesArray[j] === expectedSum) {
        pairs.push([currentPrime, primesArray[j]]);
      }
    }
  });

  pairs.forEach(pair => console.log(`${pair[0]} ${pair[1]}`));
}

console.log(checkGoldbach(3));
console.log(checkGoldbach(4));
console.log(checkGoldbach(12));
console.log(checkGoldbach(100));
