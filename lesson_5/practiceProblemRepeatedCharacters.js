function repeatedCharacters(string) {
  const counts = {};
  
  for (let char of string) {
    char = char.toLowerCase();
    
    if (counts.hasOwnProperty(char)) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }
  
  const result = {};
  
  for (let letter in counts) {
    if (counts[letter] > 1) result[letter] = counts[letter];
  }
  
  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
