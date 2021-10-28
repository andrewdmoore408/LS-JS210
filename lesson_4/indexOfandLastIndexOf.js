function indexOf(arr, item) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === item) return index;
  }

  return -1;
}

function lastIndexOf(arr, item) {
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    if (arr[index] === item) return index;
  }

  return -1;
}
