function substr(string, start, length) {
  let beginAt = (start < 0 ? string.length + start : start);
  let endAt = (beginAt + length >= string.length ? string.length : beginAt + length);

  let result = '';

  for (let index = beginAt; index < endAt; index += 1) {
    result += string[index];
  }

  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
