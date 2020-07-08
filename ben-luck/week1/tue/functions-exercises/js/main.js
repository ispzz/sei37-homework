
console.log( 'Hello World!' );

// ## The Fortune Teller

console.log( 'Fortune Teller' );

const partnerName = "Michael";
const numberOfKids = 4;
const geographicLocation = "Sydney";
const jobTitle = "Developer";

console.log( `You will be a ${ jobTitle } in ${ geographicLocation} , and married to ${ partnerName} with ${ numberOfKids} kids.`);

// console log for outputs
// return when required

const tellFortune = function(numberOfKids, partnerName, geographicLocation, jobTitle ){

  const output = `You will be a ${ jobTitle } in ${ geographicLocation} , and married to ${ partnerName} with ${ numberOfKids} kids.`;

  //console.log ( output );

  return output;

};

const firstFortune = tellFortune (4, "Derek", "China", "Flog");
console.log (firstFortune);






// const output = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnerName + ' with ' + numberOfKids +' kids.';

//Interpolation






// ​
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


// ​
// ---
// ​
// ## The Age Calculator
console.log('Age Calculator');

const currentYear = 2020;
const birthYear = 1998;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;
//DRY - Don't repeat yourself!!!

console.log( `They are either ${ ageAfterBirthday } or ${ ageBeforeBirthday}.` );

// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "They are either NN or NN", substituting the values.
// ​
// ---
// ​
// ## The Lifetime Supply Calculator
// ​
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// ​
// - Store your current age into a variable.
// - Store a maximum age into a variable.
// - Store an estimated amount per day (as a number).
// - Calculate how many you would eat total for the rest of your life.
// - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// ​
// ---
// ​
// ## The Geometrizer
// ​
console.log('Geometrizer');

const radius = 10;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius ** 2
console.log(`The circumference is ${circumference.toFixed(2)}`);
console.log(`The area is ${area.toFixed(2)}`);

// Calculate properties of a circle, using the definitions here.
// ​
// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".
// ​
// ---
// ​
// ## The Temperature Converter
console.log(`The Temperature Converter`);

let celsiusTemp = 47;
let fahrenheitTemp = (celsiusTemp * 1.8) + 32
console.log(`${celsiusTemp}°C is ${fahrenheitTemp.toFixed(2)}°F.`);

fahrenheitTemp = 116;
celsiusTemp = (fahrenheitTemp - 32) / 1.8;
console.log(`${fahrenheitTemp}°F is ${celsiusTemp}°C`);





// It's hot out! Let's make a converter based on the steps here.
// ​
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Conve


const calculateDogAge = function (puppyAge, humanToDogFactor){
  //const humanToDogFactor = 7;
  const result = puppyAge * humanToDogFactor;
  console.log(`Your doggie is ${result} in dog years.`);
};

calculateDogAge (2, 7);
calculateDogAge (10, 20);

console.log('The Calculator');

//Squared Values
const squareNumber = function(number){
  const result = number**2;
  console.log(`The square of ${number} is ${result}`);
  return result;
};
squareNumber(3);


//Division
const halfNumber = function(number){
  const result = number / 2;
  console.log(`Half of ${number} is ${result}.`);
  return result;
};
halfNumber(5);

// Percentages
const percentOf = function(num1, num2){
  const result = (num1/num2) * 100;
  console.log(`${num1} is ${result.toFixed(0)}% of ${num2}.`)
  return result;
};
percentOf(4, 9);

//Radius
const areaOfCircle = function(radius){
  const result = Math.PI * radius**2;
  console.log(`The area for a circle with a radius ${radius} is ${result.toFixed(2)}.`)
  return result;
}
areaOfCircle(2);


console.log('Part 2');
const calculatorFunction = function(number){
  const half = halfNumber(number);
  const square = squareNumber(half);
  const circleArea = areaOfCircle(square);
  const percent = percentOf(circleArea, square);
};
calculatorFunction(34);

console.log(`Strings`);
console.log('Dr Evil');
const drEvil = function(input){
  const evilSaying = `${input} dollars`;
  if(input >= 1000000){
    return evilSaying + ` (pinky)`;
  } else {
    return evilSaying;
  }
};
console.log(drEvil(10));
console.log(drEvil(1000000));

//Mix Up
console.log('');
console.log('Mix Up');
const mixUp = function(string1, string2){
  const subString1 = string1.substring(0, 2);
  const subString2 = string2.substring(0, 2);
  const cutString1 = string1.slice(2);
  const cutString2 = string2.slice(2);
  const finalString = subString2.concat(cutString1, ' ', subString1, cutString2);
  return finalString;
};
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

//Fix Start
console.log('');
console.log('Fix Start');
const fixStart = function(string){
  //Identify first letter of string
  const firstLetter = string.charAt(0);
  //replace all instances of the first letter with an asterix
  const newString = string.split(firstLetter).join('*');
  //locate and replace the first character of string with the previously identified first letter
  const finalString = newString.replace(newString.charAt(0), firstLetter)
  return finalString;
};
console.log(fixStart('babble'));



//Verbing
console.log('');
console.log('Verbing');
const verbing = function(string){
  if(string.endsWith('ing')){
    newString = string.concat('ly');
  } else if (string.length > 3) {
    newString = string.concat('ing');
  } else {
    newString = string;
  }
  return newString;
};
console.log(verbing('swim'));
console.log(verbing('swiming'));
console.log(verbing('go'));


//Not Bad
console.log('');
console.log('Not Bad');
const notBad = function(string){
  const firstNot = string.search('not');
  const firstBad = string.search('bad');
  if((firstNot < firstBad) && firstNot >= 0 && firstBad >= 0){
    newString = string.slice(0, firstNot).concat('good!');
  } else {
    newString = string;
  }
  return newString;
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
