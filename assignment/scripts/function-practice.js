console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}!`;
}
// Remember to call the function to test
console.log('Test - should return "Hello Thomas!"', helloName('Thomas'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let sum = firstNumber + secondNumber;
  return `The sum of ${firstNumber} and ${secondNumber} is: ${sum}`;
}

console.log('Test - should give sum of two numbers:', addNumbers(2, 6));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  let answer = num1 * num2 * num3;
  return `${num1} x ${num2} x ${num3} = ${answer}`;
}

console.log('Test - should return the result of multiplying 3 numbers:' ,multiplyThree(2, 2, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array.length > 0 ) {
    return array[array.length - 1];
  };
}

console.log('Test - Should return 2:', getLast([5, 3, 6, 2]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for ( let i = 0; i < array.length; i++ ) {
    if( value === array[i] ) {
      return true;
    }
  }
  return false;
}

console.log('Test - Should return false:', find(2, [3, 4, 6]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let letters = string.split('');
  if ( letter === letters[0] ) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for ( let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log('Should return 24:', sumAll([8, 8, 8]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositives( array ) {
  let positives = [];

  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > 0 ) {
      positives.push(array[i])
    }
  }

  if ( positives.length > 0 ) {
    return positives;
  }
  return [];
}

console.log('Should return [2, 4, 6]:', allPositives([2, 4, 6, -8]));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
function addUp( number ) {
  let sum = 0;
  for ( let i = 1; i <= number; i++ ) {
    sum += i;
  }
  return sum;
}

console.log('Should output 10:', addUp(4));
console.log('Should output 91:', addUp(13));
console.log('Should output 180300:', addUp(600));