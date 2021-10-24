const logMultiples = function (number) {
  for (let multiplier = 100; multiplier >= number; multiplier--) {
    if (multiplier % 2 === 1 && multiplier % number === 0) {
      console.log(multiplier);
    }
  }
}

logMultiples(17);

logMultiples(21);
