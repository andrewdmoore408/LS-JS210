// 1

let today = new Date();

// 2

let now = new Date();
console.log(`Today's day is ${now.getDay()}`);

// 3

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let now = new Date();
console.log(`Today's day is ${daysOfWeek[now.getDay()]}`);

// 4

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let now = new Date();
let date = now.getDate();

console.log(`Today's day is ${daysOfWeek[now.getDay()]}, the ${date}th.`);

// 5

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let now = new Date();
let date = now.getDate();

function dateSuffix(date) {
  const dateArr = String(date).split('');
  const lastDigit = dateArr[dateArr.length - 1];
  
  const tensPlaceIsOne = (dateArr[dateArr.length - 2] == '1') ? true : false;
  
  let suffix = null;
  
  if (tensPlaceIsOne) {
    suffix = 'th';    
  } else {
    switch (lastDigit) {
      case '1': 
        suffix = 'st';
        break;
      case '2': 
        suffix = 'nd';
        break;
      case '3': 
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }
  
 k return suffix;
}

// 6

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let now = new Date();
let date = now.getDate();

function dateSuffix(date) {
  const dateArr = String(date).split('');
  const lastDigit = dateArr[dateArr.length - 1];

  const tensPlaceIsOne = (dateArr[dateArr.length - 2] == '1') ? true : false;

  let suffix = null;

  if (tensPlaceIsOne) {
    suffix = 'th';
  } else {
    switch (lastDigit) {
      case '1':
        suffix = 'st';
        break;
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  return suffix;
}

console.log(`Today's date is ${daysOfWeek[now.getDay()]}, ${now.getMonth()} ${date + dateSuffix(date)}.`);

// 7

function dateSuffix(date) {
  const dateArr = String(date).split('');
  const lastDigit = dateArr[dateArr.length - 1];

  const tensPlaceIsOne = (dateArr[dateArr.length - 2] == '1') ? true : false;

  let suffix = null;

  if (tensPlaceIsOne) {
    suffix = 'th';
  } else {
    switch (lastDigit) {
      case '1':
        suffix = 'st';
        break;
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  return suffix;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let now = new Date();
let date = now.getDate();

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(`Today's date is ${daysOfWeek[now.getDay()]}, ${months[now.getMonth()]} ${date + dateSuffix(date)}.`);

// 8

// Our call to console.log is getting cluttered. Let's clean things up a bit and refactor the code into a few formatting functions that we can call from anywhere in our code. Create formattedMonth and formattedDay functions to format the month and day, then write a formattedDate function that pulls everything together and logs the fully formatted date.

function dateSuffix(date) {
  const dateArr = String(date).split('');
  const lastDigit = dateArr[dateArr.length - 1];

  const tensPlaceIsOne = (dateArr[dateArr.length - 2] == '1') ? true : false;

  let suffix = null;

  if (tensPlaceIsOne) {
    suffix = 'th';
  } else {
    switch (lastDigit) {
      case '1':
        suffix = 'st';
        break;
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  return suffix;
}

function formattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months[date.getMonth()];
}

function formattedDay(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  
  const dateWithSuffix = `${date.getDate()}${dateSuffix(date.getDate())}`;
  
  return `${formattedDay(date)}, ${formattedMonth(date)} ${dateWithSuffix}`;
}

console.log(`Today's date is ${formattedDate(new Date())}`);

// 9

let now = new Date();

console.log(`getYear: ${now.getYear()}`);
console.log(`getFullYear: ${now.getFullYear()}`);

// 10

console.log(new Date().getTime());

// 11

const today = new Date();
const tomorrow = new Date(today.getTime());

tomorrow.setDate(tomorrow.getDate() + 1);

// 12

const nextWeek = new Date(today.getTime());

console.log(nextWeek === today); // This will output false, because these objects are in different places in memory. They are not the same object, and that's what JavaScript is comparing.

// 13

const today = new Date();
const nextWeek = new Date(today.getTime());

console.log(nextWeek.toDateString() === today.toDateString()); // This outputs true, because now string primitives are being compared and the values of each string are the same.

nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString()); // This outputs false, because the dates are no longer the same and thus the primitive strings resulting from the dates no longer match

// 14

function formatTime(date) {

  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  const hoursString = (String(hours).length === 2) ? String(hours) : `0${String(hours)}`;
  
  const minutesString = (String(minutes).length === 2) ? String(minutes) : `0${String(minutes)}`;
  
  return `${hoursString}:${minutesString}`;  
}

