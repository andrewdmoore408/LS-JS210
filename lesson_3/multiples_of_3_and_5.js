function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
      if (num % 5 === 0) {
        console.log(num + '!');
      } else {
        console.log(num);
      }
    } else if (num % 5 === 0) {
      console.log(num);
    }
  }
}

multiplesOfThreeAndFive();

// Further exploration: multiplesOfThreeAndFive(startNum, endNum)

// ...

// for (let num = startNum; num <= endNum; num++) 

// ...
