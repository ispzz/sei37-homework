
console.log( "Hello World!" ) ;

// Exercises: Functions
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

console.log( "Fortune Teller" );

const tellFortune = function(numberOfChildren, partnersName, place, jobTitle ){
  const ouput = `You will be a ${jobTitle} in ${place} and married to ${partnersName} with ${numberOfChildren} kids.` ;

console.log(output);

};

tellFortune(5, `Debbie`, `Hawaii`, `pro surfer`);


// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
//
// takes 1 argument: your puppy's age.
// calculates your dog's human-equivalent age based on the conversion rate of 7 human years to 1 dog year.
// returns a string that looks like this: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Call that function 3 times with 3 different values for the puppy's age; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
//
console.log('Age Calculator');

const currentYear = 2020;
const birthYear = 1980;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

const ageOutput = `You are either ${ageBeforeBirthday} or ${ageAfterBirthday} years old.`;

console.log(ageOutput );



// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a fixed maximum age).
// returns a string that looks like this: "You will need NN to last you until the ripe old age of X"
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
//

console.log('Lifetime Supply Calculator')

const currentAge= 60;
const maxAge= 90;
const dayRate= 5;

const yearsRemaining = maxAge - currentAge;
const amountPerYear = dayRate * 365.25;
const totalSnacksRequired = amountPerYear * yearsRemaining;

console.log(`You will need a total of ${totalSnacksRequired} to last you until the ripe old age of ${maxAge}.` );



// The Geometrizer
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and return this value from the function (as a number, not a string).
// Call the function with a radius argument of your choice, capture the return value in a variable, and use the variable to print out a string like: "The circumference of the circle is XX."
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and return this number from the function.
// Call the function with a radius argument, capture its return value in a variable, and use the variable to output to the consle "The area is NN".

console.log('Geometrizer');

const radius = 10;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius ** 2;

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);



// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit which:
//
// Takes a celsius temperature as its argument.
//
// Converts it to fahrenheit and returns this value from the function
//
// Call the funtion this way:
//
// Create a variable called celsius and store a temperature value in it
// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.
//
// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.


console.log(`The Temperature Converter`)

let celsiusTemp = 47;
let fahrenheitTemp = (celsiusTemp * 1.8 + 32);

console.log(`${celsiusTemp}°C is ${fahrenheitTemp.toFixed(2)}°F`);
