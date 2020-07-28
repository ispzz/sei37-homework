// // The Calculator
// // Part 1
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(number) {
  console.log(`The result of squaring the number ${number} is ${number ** 2}.`);
  return number ** 2;
};
squareNumber(4);


// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(number) {
  console.log(`Half of ${number} is ${number / 2}.`);
  return number / 2;
};
halfNumber(7);


// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(number1, number2) {
  const percent = (number1 / number2) * 100;
  console.log(`${number1} is ${percent}% of ${number2}.`);
  return `${percent}%`;
};
percentOf(20, 100);


// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius) {
  const area = (Math.PI * radius ** 2).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
};
areaOfCircle(32);
// // Bonus: Round the result so there are only two digits after the decimal.


// // Part 2
// // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// // Take half of the number and store the result.
// // Square the result of #1 and store that result.
// // Calculate the area of a circle with the result of #2 as the radius.
// // Calculate what percentage that area is of the squared result (#3).
const finalCalculator = function(number) {
  const result1 = halfNumber(number);
  const result2 = squareNumber(result1);
  const result3 = areaOfCircle(result2);
  const result4 = percentOf(result3, result3 ** 2);
  return result4;
};
const finalResult = finalCalculator(10);
console.log(finalResult);

// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
const DrEvil = function(amountNum) {
  if(amountNum === 1000000) {
    return `${amountNum} dollars (pinky)`;
  } else {
    return `${amountNum} dollars`;
  }
};
console.log(DrEvil(111));
console.log(DrEvil(1000000));

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(strOne, strTwo) {
  const a = strOne.substr(0, 2);
  const b = strTwo.substr(0, 2);
  const strOneNew = b + strOne.substr(2);
  const strTwoNew = a + strTwo.substr(2);
  return `${strOneNew} ${strTwoNew}`;
};
console.log(mixUp("111", "222"));
// Disfference between substr & substring & slice

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function(str) {
  const newStr = str.split(str.charAt(0)).join("*");
  const finalStr = str.charAt(0) + newStr.substr(1);
  return finalStr;
};
console.log(fixStart("babble"));


// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
const verbing = function(str) {
  if(str.length >= 3) {
    if(str.substr((str.length - 3), 3) === "ing") {
      return str + "ly";
    } else {
      return str + "ing"
    }
  } else {
    return str;
  }
};
console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

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

// const notBad = function(str) {
//   if(str.search("not") !== -1 & str.search("bad") !== -1) {
//     if(str.indexOf("not") < str.indexOf("bad")) {
//       return str.replace(str.substr(str.indexOf("not")), "good!");
//     } else {
//       return str;
//     }
//   } else {
//     return str;
//   }
// };
// console.log(notBad('This dinner is not that bad!'));
// console.log(notBad('This movie is not so bad!'));
// console.log(notBad('This dinner is bad!'));

const notBad = function(str) {
  const notIndex = str.search("not");
  const badIndex = str.search("bad");
  if(notIndex !== -1 & badIndex !== -1) {
    if(notIndex < badIndex) {
      return str.replace(str.substr(notIndex), "good!");
    } else {
      return str;
    }
  } else {
    return str;
  }
};
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
