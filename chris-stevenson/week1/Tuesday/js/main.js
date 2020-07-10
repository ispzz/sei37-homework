//The Calculator
console.log('The Calculator');
//Part 1
console.log('Part 1');
//Qusttion 1
console.log('Question 1');

const squareNumber = function(number){
  const result = number**2;
  console.log(`The square of ${number} is ${result}`);
  return result;
};
squareNumber(3);

//Question 2
console.log('Question 2');
const halfNumber = function(number){
  const result = number / 2;
  console.log(`Half of ${number} is ${result}`);
  return result;
};
halfNumber(4);

//Question 3
console.log('Question 3');
const percentOf = function(num1, num2){
  const result = (num1/num2) * 100;
  console.log(`${num1} is ${result.toFixed(0)}% of ${num2}`);
  return result.toFixed(0);
};
percentOf(4, 9);

//Question 4
console.log('Question 4');
const areaOfCircle = function(radius){
  const result = Math.PI * radius**2;
  console.log(`The area for a circle with a radius of ${radius} is ${result.toFixed(2)}`);
  return result.toFixed(2);
};
areaOfCircle(14);

//Part 2
console.log('');
console.log('Part 2');
const calculatorFunction = function(number){
  const half = halfNumber(number);
  const square = squareNumber(half);
  const circleArea = areaOfCircle(square);
  const percent = percentOf(circleArea, square);
};
calculatorFunction(34);

//Strings
console.log('');
console.log('Strings');
console.log('');
//Dr Evil
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
    return string.concat('ly');
  } else if (string.length > 3) {
    return string.concat('ing');
  } else {
    return string;
  }
};
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));


//Not Bad
console.log('');
console.log('Not Bad');
const notBad = function(string){
  const firstNotIndex = string.search('not');
  const firstBadIndex = string.search('bad');
  let newString;
  if((firstNotIndex < firstBadIndex) && firstNotIndex >= 0 && firstBadIndex >= 0){
    newString = string.slice(0, firstNotIndex).concat('good!');
  } else {
    newString = string;
  }
  return newString;
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
