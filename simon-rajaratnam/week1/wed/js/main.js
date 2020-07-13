// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//
// const theWord = [
//   'F',
//   'O',
//   'X'
// ];
//
// const guessAttempt = [
//   '_',
//   '_',
//   '_'
// ];
//
// console.log(`                    Welcome to THE WORD GUESSER!!!!`);
// console.log(`         Type  "guessLetter(' ')"  with your guess in the blank`);
//
// let gameSolved;
// let rewardTotal = 0;
//
// const guessLetter = function( guess ) {
//     if ( gameSolved ) {
//       console.log(`   The game has already been solved!!!! Please start a new game  !!!!`);
//   } else {
//         checkForMatch( guess );
//   }
// }
//
// const checkForMatch = function( guess ) {
//   let matchedPos = theWord.indexOf( guess );          //finds the index of a matched letter.
//
//   if ( matchedPos >= 0 ) {                            //if no match the matchedPos will be -1.
//       guessAttempt[ matchedPos ] = guess;             //ammends the new array to contain the guessed letter.
//       const getReward = Math.floor( Math.random() * 100);
//       rewardTotal = rewardTotal + getReward;
//       console.log(`${guessAttempt.join('')}    Congratulations!!! You found a new letter... You've earned $${getReward}.   Total Rewards $${rewardTotal}`);
//   } else {
//       const penaltyAmount = Math.floor( Math.random() * 10);
//       rewardTotal = rewardTotal - penaltyAmount;
//       console.log(`${guessAttempt.join('')}    Sorry, that's not one. Try again...          You've lost $${penaltyAmount}.      Total Rewards $${rewardTotal} `);          //prints the current status of the guessAttempt array
//   }
//
//   if ( guessAttempt.indexOf('_') === -1 ) {          //checks to see if the game is solved.
//       gameSolved = 1;
//       console.log(`        !!!!!  Congratulations!!! You solved it  !!!!`);
//   }
// }
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// const guessLetter = function(guess) {
//   let matchedPos = theWord.indexOf(guess);        //finds the index of a matched letter.
//   while (matchedPos >= 0) {                            //if no match the matchedPos will be -1.
//                         //in case there are multiple matching letters.
//         guessAttempt[matchedPos] = guess;               //ammends the new array to contain the guessed letter.
//       matchedPos = theWord.indexOf(guess);
//
//     console.log(`${guessAttempt.join('')}       Congratulations!!! You found a new letter`);
//   }
//     console.log(guessAttempt.join(''));
//
// }

// const guessLetter = function(guess) {
//   let matchedPos = theWord.indexOf(guess);          //finds the index of a matched letter.
//   if (matchedPos >= 0) {                            //if no match the matchedPos will be -1.
//       guessAttempt[matchedPos] = guess;             //ammends the new array to contain the guessed letter.
//       console.log(`${guessAttempt.join('')}       Congratulations!!! You found a new letter`);
//   } else {
//       console.log(guessAttempt.join(''));
//   }
//   if (guessAttempt.indexOf('_') === -1) {           //checks to see if the game is solved.
//      console.log(`        !!!!!  Congratulations!!! You solved it  !!!!`);
//   }
// }
//
// guessLetter('F');

// let gameSolved = Flase;
//
// const guessLetter = function( guess ) {
//     if ( gameSolved( guess ) ) {
//       console.log(`   The game has already been solved!!!! Please start a new game  !!!!`);
//   } else {
//         checkForMatch( guess );
//   }
// }
//
// const gameSolved = function( guess ){
//   if ( guessAttempt.indexOf('_') === -1 ) {           //checks to see if the game is solved.
//     return true;
//   }
// }
//
// const checkForMatch = function( guess ) {
//   let matchedPos = theWord.indexOf( guess );          //finds the index of a matched letter.
//   if ( matchedPos >= 0 ) {                            //if no match the matchedPos will be -1.
//       guessAttempt[ matchedPos ] = guess;             //ammends the new array to contain the guessed letter.
//       console.log(`${guessAttempt.join('')}       Congratulations!!! You found a new letter`);
//   } else {
//       console.log( guessAttempt.join('') );
//   }
//   if (gameSolved( guess )) {           //checks to see if the game is solved.
//      console.log(`        !!!!!  Congratulations!!! You solved it  !!!!`);
//   }
// }
//
// guessLetter('');

// let gameSolved;
//
// const guessLetter = function( guess ) {
//     if ( gameSolved ) {
//       console.log(`   The game has already been solved!!!! Please start a new game  !!!!`);
//   } else {
//         checkForMatch( guess );
//   }
// }
//
// const checkForMatch = function( guess ) {
//   let matchedPos = theWord.indexOf( guess );          //finds the index of a matched letter.
//   if ( matchedPos >= 0 ) {                            //if no match the matchedPos will be -1.
//       guessAttempt[ matchedPos ] = guess;             //ammends the new array to contain the guessed letter.
//       console.log(`${guessAttempt.join('')}       Congratulations!!! You found a new letter`);
//   } else {
//       console.log( guessAttempt.join('') );
//   }
//   if ( guessAttempt.indexOf('_') === -1 ) {          //checks to see if the game is solved.
//       gameSolved = 1;
//       console.log(`        !!!!!  Congratulations!!! You solved it  !!!!`);
//   }
// }
//
// guessLetter('');

const theWord = [
  'F',
  'O',
  'X'
];

const guessAttempt = [
  '_',
  '_',
  '_'
];
const usedLetters = [];

console.log(`                    Welcome to THE WORD GUESSER!!!!`);
console.log(`         Type  "guessLetter(' ')"  with your guess in the blank`);

let gameSolved;
let rewardTotal = 0;

const guessLetter = function( guess ) {
    if ( gameSolved ) {
      console.log(`   The game has already been solved!!!! Please start a new game  !!!!`);
  } else {
        if (usedLetters.indexOf( guess) == -1) {        // checks to see if the letter has been used previously
          logLetter( guess );                           // logs the letter in the usedLetters array
          checkForMatch( guess );
      } else {
          console.log(`${guessAttempt.join('')}`);
      }
  }
}

const checkForMatch = function( guess ) {
  let matchedPos = theWord.indexOf( guess );          //finds the index of a matched letter.

  if ( matchedPos >= 0 ) {                            //if no match the matchedPos will be -1.
      guessAttempt[ matchedPos ] = guess;             //ammends the new array to contain the guessed letter.
      const getReward = Math.floor( Math.random() * 100);
      rewardTotal = rewardTotal + getReward;
      console.log(`${guessAttempt.join('')}    Congratulations!!! You found a new letter... You've earned $${getReward}.   Total Rewards $${rewardTotal}`);
  } else {
      const penaltyAmount = Math.floor( Math.random() * 10);
      rewardTotal = rewardTotal - penaltyAmount;
      console.log(`${guessAttempt.join('')}    Sorry, that's not one. Try again...          You've lost $${penaltyAmount}.      Total Rewards $${rewardTotal} `);          //prints the current status of the guessAttempt array
  }

  if ( guessAttempt.indexOf('_') === -1 ) {          //checks to see if the game is solved.
      gameSolved = 1;
      console.log(`        !!!!!  Congratulations!!! You solved it  !!!!`);
  }
}

const logLetter = function ( guess ) {
    usedLetters.push( guess );
}

//guessLetter('');

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
