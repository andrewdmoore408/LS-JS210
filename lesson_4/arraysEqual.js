function arraysEqual(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) return false;
  
  for (let index = 0; index < firstArr.length; index += 1) {
    if (firstArr[index] !== secondArr[index]) return false;
  }
  
  return true;
}
