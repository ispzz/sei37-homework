console.log('Hello, world!');
console.log(' ');
console.log('The Word Guesser');

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

const secretLetters = ['F', 'O', 'X']
const guesses = [ ]

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.

const guessLetter = function(letter){
  for(let i = 0; i < secretLetters.length; i++){
    if(letter === 'F'){
      guesses.splice(0, 0, 'F');
      console.log('Your guess was correct!');
    } else if(letter === 'O'){
      guesses.splice(1, 0, 'O');
      console.log('Your guess was correct!');
    } else if(letter ==='X'){
      guesses.splice(2, 0, 'X');
      console.log('Your guess was correct!');
    } else {
      console.log('Sorry, your guess was incorrect.');
    }
  }
}

guessLetter('O');

// once guesses array length = 3, then print 'Congratulations! You have correctly guessed the word'

// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
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

console.log(' ');
console.log('Array and Functions Bonus Material');

const maxOfTwoNumbers = function(num1, num2){
  if(num1 > num2){
    return num1;
  } else {
    return num2;
  }
}

console.log(`The larger number is ${maxOfTwoNumbers(2,3)}`);
console.log(`The larger number is ${maxOfTwoNumbers(8,3)}`);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

console.log(' ');

const maxOfThreeNumbers = function(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  } else if(num2 > num1 && num2 > num3){
    return num2;
  } else if(num3 > num1 && num3 > num2){
    return num3;
  }
}

console.log(`The larger number is ${maxOfThreeNumbers(2,3,4)}`);
console.log(`The larger number is ${maxOfThreeNumbers(2,8,4)}`);
console.log(`The larger number is ${maxOfThreeNumbers(100,8,4)}`);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

console.log(' ');

const takeCharacter = function(char){
  if(char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    return 'true';
  } else return 'false';
}

console.log(`Result is ${takeCharacter('a')} because it is a vowel.`);
console.log(`Result is ${takeCharacter('p')} because it is not a vowel.`);

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

console.log(' ');

const randomArray = [1, 2, 3, 4, 5]

const sumArray = function(a, b, c, d, e){
  return a + b + c + d + e;
}

console.log(sumArray(...randomArray));

const multiplyArray = function(a, b, c, d, e){
  return a * b * c * d * e;
}

console.log(multiplyArray(...randomArray));

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
