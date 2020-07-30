// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// SOLUTION

const squareNumber = function(num) {
  const result = Math.pow(num, 2);
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result
}

squareNumber(2);
squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(num) {
  const result = num/2;
  console.log(`Half of ${num} is ${result}`);
  return result
}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function()


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// const areaOfCircle = function() {



// }

// Bonus: Round the result so there are only two digits after the decimal.





// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
//  js-homework-2.md


// SOLUTION

// const operations = function(num) {
//
//   const halfNum = halfNumber(num);
//   const sqNum = squareNumber(halfNum)
//
// }




// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
  // mixUp('mix', 'pod'): 'pox mid'
  // mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// SOLUTION

const mixUp = function (string1, string2) {
  const stringLength1 = string1.length;
  const stringLength2 = string2.length;

  const firstNewString = string2.slice(0,2) + string1.slice(2, stringLength1);
  const secondNewString = string1.slice(0,2) + string2.slice(2, stringLength2);
  return firstNewString + secondNewString;
}

console.log(mixUp('einfach', 'gesund'));

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

// SOLUTION

console.log('');
console.log('Fix Start');

const fixStart = function(string) {
   const firstLetter = string.charAt(0);
   const newString = string.split(firstLetter).join('*');
  const finalString = newString.replace(newString.charAt(0), firstLetter);

  return finalString;
};

console.log(fixStart('babble'));

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

// SOLUTION

console.log('');
console.log('Verbing');
const verbing = function(string) {
  let newString;
  if(string.endsWith('ing')){
    newString = string.concat('ly')
  } else if (string.length > 3) {
    newString = string.concat('ing')
  } else {
    newString = string;
    }
  };

  return newString;

};
console.log()




//
// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


console.log('');
console.log('Not Bad');
const notBad = function(string) {

  const firstNotIndex = string.search('not');
  const firstBadIndex = string.search('bad');
  let newString;
  if((firstNot < firstBad) && firstNot >= 0 && firstBad >= 0)
  newString
} elseif (){
  return string;
}

console.log(notBad(''))
