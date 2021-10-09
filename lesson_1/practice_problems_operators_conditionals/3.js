let apples = 3;
let bananas = "3";

if (apples === bananas) {
  console.log('Yup! Apples and bananas are equal!');
}

// This code won't output a message because the variables are being compared using strict equality, which checks for equal values and also the same type. Since apples points to a number and bananas references a string, these values aren't the same type and thus the strict equality returns false and the block after the if statement isn't executed.
