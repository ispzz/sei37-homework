
console.log(`Loop exercises`);


// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let num = 0; num <= 20; num++){
  if(num % 2 === 0){
  console.log(`${num} is even.`);
} else {
  console.log(`${num} is odd.`);
}
}
//
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for(let i = 0; i <= 10; i++) {
    let iMultiplied = i * 9;
    console.log(`${i} * 9 = ${iMultiplied}`);
    //console.log (`${i} * 9 = ${1 * 9}`); alternative
}


//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 0; i <= 10; i++){
  for(let num = 0; num <=10; num++) {
  let iTimes = i * num;
  console.log(`${i} * ${num} = ${iTimes}.`);
}
}
//
// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function(score){

let grade;

if (score >= 90 ){
  grade = 'A';
} else if ( score >= 80){
  grade = 'B';
} else if ( score >= 70){
  grade = 'C';
} else if ( score >= 60){
  grade = 'D';
} else  {
  grade = 'F';
}

return grade;

}; //assignGrade()

for (let i = 60; i <= 100; i++){
  console.log(`For the score of ${i}, the grade is ${ assignGrade(i)}`);
}

var fruits = [
  "Mango",
  "Orange",
  "Apple",
  "Kiwi Fruit"
];


for (var i = 0; i < fruits.length; i++) {
  const currentFruit = fruits[i];
  console.log (currentFruit);
}




  const bestSports = [
    "Football",
    "Rugby League",
    "Tennis",
    "Rugby Union",
    "Swimming"
  ];



for (var i = 0; i < bestSports.length; i++) {
  const currentSport = bestSports[i];
  const suffixes = ['st','nd','rd', 'th', 'th'];
  const currentSuffix = suffixes [i];
  console.log (`My ${i+1}${currentSuffix} choice is ${currentSport}`);
}

// console.log(`My #${i+1} choice is ${currentSport}`);

// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - **Bonus:** Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the
//Wednesday Homework
//The Word Guesser

//Creating three global arrays to hold the letters of the word and letters guessed
const secretWord = [ 'S', 'N', 'A', 'K', 'E' ];
const guessedLetters = [ '_', '_', '_', '_', '_' ];

let correctGuesses = 0;

const guessLetter = function( letterGuess ){


  letterGuess = letterGuess.toUpperCase();

  console.log(`guessLetter('${ letterGuess }')`);

  let found = false;

  // 1) Iterate through the secret word letters
  for( let i = 0; i < secretWord.length; i++ ){

    const currentLetter = secretWord[ i ].toUpperCase();

    // 2) 'See if the guessed letter is in there'
    if( letterGuess === currentLetter ){
      console.log(`Correct guess for ${letterGuess} at position ${ i }`);
      // Set our found flag to true - so we can determine after the loop is finished,
      // whether or not we found any matches
      guessedLetters[ i ] = letterGuess;
      found = true;
      correctGuesses++;
    }

  } // for

  console.log(guessedLetters.join(' '));

  // We have to wait until the loop is finished, to
  // check whether we actually found ANY matches during any iteration of the loop
  if( found ){
    console.log('Nice job!');
  } else {
    console.log('Sorry, bad guess!');
  }

  // Check if the game is over
  if( correctGuesses === secretWord.length ){
    console.log('CONGRATULATIONS! YOU WIN!!!');
  }


}; // guessLetter()
// guessLetter('f');

// ## Warmup - Raindrops
// ​
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
// ​
// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

const raindrops = function(factor){
  if(factor === 0){
    return 0;
  }
  let output = '';
  if (factor % 3 === 0) {
    output += 'Pling';
  }
  if (factor % 5 === 0){
    output += 'Plang';
  }
  if (factor % 7 === 0){
    output += 'Plong';
  }
  if (output === ''){
    output += factor.toString();
  }
  console.log(output);
  return output;
}
