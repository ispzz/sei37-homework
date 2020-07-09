console.log("Hello, world!");

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

console.log('What number is bigger?');

const greaterNum = function(numberOne, numberTwo){
    if(numberOne > numberTwo){
      return numberOne;
    } else {
      return numberTwo;
    }
};

console.log(`The greater number of 5 and 6 is ${greaterNum(5,6)}.`);
console.log(`The greater number of 20 and 3 is ${greaterNum(20,3)}.`);

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

console.log('The World Translator');

const helloWorld = function(languageCode){
    if(languageCode === 'en'){
      return (`Hello, world.`);
    } else if(languageCode === 'de'){
      return ('Hallo, welt.');
    } else {
      return ('Hola, mundo.')
    }
};

console.log(helloWorld('en'));
console.log(helloWorld('es'));
console.log(helloWorld('de'));

// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

console.log('The Grade Assigner');

const assignGrade = function(score){
    if(score >= 90){
      return 'A';
    } else if(score >= 80){
      return 'B';
    } else if(score >= 70){
      return 'C';
    } else if(score >= 60){
      return 'D';
    } else if(score >= 50){
      return 'E';
    } else {
      return 'F';
    }
};

console.log(assignGrade(92));
console.log(assignGrade(46));

// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

console.log('The Pluralizer');

const pluralize = function(noun,number){
  const message = `${number} ${noun}`;
  if(1 === number){
    return message;
  } else {
    return message + 's';
  }
};

console.log(pluralize('duck',2));

// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

console.log('The Calculator');

const squareNumber = function(number2){
  const square = number2**2;
  return square;
};

console.log(`The result of squaring the number 3 is ${squareNumber(3)}`);

const halfNumber = function(number3){
  const halve = number3/2;
  return halve;
};

console.log(`Half of 5 is ${halfNumber(5)}`);

const percentOf = function(number4,number5){
  const percent = (number4/number5)*100;
  return percent;
};

console.log(`2 is ${percentOf(2,4)}% of 4.`);

const areaOfCircle = function(radius){
  const area = Math.PI * radius**2;
  return area.toFixed(2);
};

console.log(`The area for a circle with radius 2 is ${areaOfCircle(2)}.`)

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
