function generatePattern(nStars) {

  for (let currentRow = 1; currentRow <= nStars; currentRow += 1) {

    let thisRow = [];
 
    for (let numberToAdd = 1; numberToAdd <= currentRow; numberToAdd += 1) {
      thisRow.push(String(numberToAdd));
    }

    while (thisRow.length < nStars) {
      thisRow.push('*');
    }

    console.log(thisRow.join(''));
  }
}

generatePattern(7);
generatePattern(3);
generatePattern(13);

// Further Exploration: I converted the string into an array so that the length would be consistent no matter how many digits each number in the row had. Then I invoked join('') to convert the elements in the array to a string without any delimiters.
