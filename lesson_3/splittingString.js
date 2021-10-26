let splitString = function(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let pieces = [];
  let currentPiece = '';

  for (let index = 0; index < string.length; index += 1) {

    if (index === string.length - 1 && string[index] !== delimiter) {
      currentPiece += string[index];
      pieces.push(currentPiece);
      break;
    }

    if (delimiter === '') {
      pieces.push(string[index]);
      continue;
    }

    if (string[index] === delimiter) {
      pieces.push(currentPiece);
      currentPiece = '';
    } else {
      currentPiece += string[index];
    }   
  }

  pieces.forEach(piece => console.log(piece));
};

console.log(splitString('abc,123,hello world', ','));
console.log(splitString('hello'));
console.log(splitString('hello', ''));
console.log(splitString('hello', ';'));
console.log(splitString(';hello;', ';'));

