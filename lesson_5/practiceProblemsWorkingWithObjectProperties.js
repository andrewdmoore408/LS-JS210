// 1

function objectHasProperty(object, string) {
  for (let key in object) {
    if (key === string) return true;
  }
  
  return false;
}

// 2

let incrementProperty = (object, propertyName) => {
  let propertyValue = null;

  if (objectHasProperty(object, propertyName)) {
    propertyValue = object[propertyName] + 1;
  } else {
    propertyValue = 1;
  }

  object[propertyName] = propertyValue;

  return propertyValue;
};

// 3

function copyProperties(sourceObj, destinationObj) {
  for (let key in sourceObj) {
    destinationObj[key] = sourceObj[key];
  }
  
  return Object.keys(sourceObj).length;
}

// 4

function wordCount(phrase) {
  let words = phrase.split(' ');
  
  let counts = {};
  
  words.forEach(word => {
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  });
  
  return counts;
}
