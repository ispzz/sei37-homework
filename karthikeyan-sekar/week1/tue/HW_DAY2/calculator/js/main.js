// // Part 1
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of
// the second number, and return the result. It should also log a string like "2 is 50% of 4."
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and
// return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.
// // Part 2
// // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// //
// // Take half of the number and store the result.
// // Square the result of #1 and store that result.
// // Calculate the area of a circle with the result of #2 as the radius.
// // Calculate what percentage that area is of the squared result (#3).
console.log('square number');
console.log('\n');

const squareNumber = function(num) {
  let squ = num * num;
  console.log(`The result of squaring the number ${num} is ${squ}`);
};

squareNumber(2);

const halfNumber = function(num) {
  let half = num/2 ;
  console.log(`Half of ${num} is ${half}`);
};

halfNumber(5);
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add
//'(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = (amt) =>  {
  if (amt == 1000000)
   return (` ${amt} dollars (pinky)`);
  else
    return (` ${amt} dollars`);
};

console.log(DrEvil(1000000));
console.log(DrEvil(10));
console.log('\n');

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two
// strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that
// the strings are at least 2 characters long. For example:
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

console.log('Mix Up');
console.log('\n');

const mixUp = (strOne, strTwo) => {
  let strAns = strOne.slice(0,2) + strTwo.substr(2,strTwo.length);
  let strAns1 = strTwo.slice(0,2) + strOne.substr(2,strOne.length);
  const answer = `${strAns1} ${strAns}`;
console.log(answer);
};

mixUp('dog', 'dinner');

mixUp('mix', 'pod');

console.log('\n');

// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works
console.log('The World Translator');
console.log('\n');

const helloWorld = function(lang){
let ans;
if (lang == "es")
console.log("Hola, Mundo");
else if (lang =="de")
console.log("Hola, Welt");
else
console.log('Hello, World');

}
helloWorld("de");
helloWorld( );
console.log('\n');

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A",
// scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.
console.log('The Grade Assigner');
console.log('\n');

const assignGrade = (score) => {
  const str = "your grade is ";
  if(score > 90)
  console.log(`${str} A `);
  else if (score > 80 && score <= 90)
  console.log(`${str} B`);
  else if (score > 70 && score <= 80)
  console.log(`${str} C`);
  else if (score > 60 && score <= 70)
  console.log(`${str} D`);
  else if (score > 50 && score <= 60)
  console.log(`${str} F`);
}

assignGrade(72);
assignGrade(82);
