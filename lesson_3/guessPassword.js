function guessPassword() {
  let rlSync = require('readline-sync');
  const CORRECT_PASSWORD = 'Apples321#';

  for (let attempts = 1; attempts <= 3; attempts +=1) {
    let enteredPassword = rlSync.question('What is the password?  ');

    if (enteredPassword === CORRECT_PASSWORD) {
      console.log('You have successfully logged in.');
      return;
    }
  }

  console.log('You have been denied access.');
}

guessPassword();
