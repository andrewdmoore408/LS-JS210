let getAverage = (firstNum, secondNum, thirdNum) => {
  return (firstNum + secondNum + thirdNum) / 3;
};

function studentGrade() {
  let rlSync = require('readline-sync');

  let gradeCount = 0;
  const grades = [];

  while (gradeCount < 3) {
    let grade = Number(rlSync.question(`Enter score ${gradeCount + 1}:  `));
    grades.push(grade);

    gradeCount += 1;
  }

  let average = getAverage(...grades); // This spread syntax allows an iterable to be expanded so that its first 3 elements will be used as the three arguments to the function upon its invocation

  let grade = null;

  switch (true) {
    case (average >= 90):
      grade = 'A';
      break;
    case (average >= 70):
      grade = 'B';
      break;
    case (average >= 50):
      grade = 'C';
      break;
    default:
      grade = 'F';
      break;
  }

  console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`);

}

studentGrade();
      
