// # Homework: The Word Guesser
// ​
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// ​
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


// const wordLetter = ["F", "O", "X"];
// let guessedLetter = ["_", "_", "_"];
//
// const guesseLetter = function(letter) {
//   // if letter is included
//   if(wordLetter.indexOf(letter) === -1) {
//     console.log("Please try again!");
//   } else {
//     console.log("Your guess was correct!");
//     // check which letter it is in wordLetter
//     for (var i = 0; i < wordLetter.length; i++) {
//       if(letter === wordLetter[i]) {
//         guessedLetter[i] = letter;
//         // check if all letters have been gussed
//         if(guessedLetter.indexOf("_") === -1) {
//           console.log("Congratulations! You win!");
//         } // if win
//       } // if which
//     } // for loop
//   } // if else
//   console.log(guessedLetter);
// }; // guesseLetter




// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// const wordLetter = ["F", "O", "X"];
// let guessedLetter = ["_", "_", "_"];
// let reward = 0;
//
// const guesseLetter = function(letter) {
//   // if letter is included
//   if(wordLetter.indexOf(letter) === -1) {
//     console.log("Please try again!");
//     reward -= (Math.random() * 10);
//   } else {
//     console.log("Your guess was correct!");
//     // check which letter it is in wordLetter
//     for (var i = 0; i < wordLetter.length; i++) {
//       if(letter === wordLetter[i]) {
           // reward += (Math.random() * 10);
//         guessedLetter[i] = letter;
//         // check if all letters have been gussed
//         if(guessedLetter.indexOf("_") === -1) {
//           console.log("Congratulations! You win!");
//         } // if win
//       } // if which
//     } // for loop
//   } // if else
//   console.log(guessedLetter);
//   console.log(`Your reward is $${reward}.`);
// }; // guesseLetter




// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
const wordLetter = ["F", "O", "X", "X"];
let guessedLetter = ["_", "_", "_", "_"];
let hangmanState = 0;
let reward = 0;
const randomReward = 50;

const guesseLetter = function(letter) {
  // if letter is included
  if(wordLetter.indexOf(letter) === -1) {
    console.log("Please try again!");
    hangmanState += 1;
    reward -= randomReward;
    if(hangmanState === 6) {
      console.log("You lost!");
      console.log("This is a hangman img.")
    }
  } else {
    console.log("Your guess was correct!");
    reward += randomReward;
    // check which letter it is in wordLetter
    for (var i = 0; i < wordLetter.length; i++) {
      if(letter === wordLetter[i]) {
        guessedLetter[i] = letter;
        // check if all letters have been gussed
        if(guessedLetter.indexOf("_") === -1) {
          console.log("Congratulations! You win!");
        } // if win
      } // if which
    } // for loop
  } // if else
  console.log(guessedLetter);
  console.log(`Your reward is $${reward}.`);
}; // guesseLetter




// # Array and Functions Bonus Material
// ​
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(num1, num2) {
  if(num1 > num2) {
    console.log(`The larger number is ${num1}.`);
  } else {
    console.log(`The larger number is ${num2}.`);
  }
};
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(num1, num2, num3) {
  let largestNum = num1;
  if(num1 > num2) {
    if(num1 > num3){
      console.log(`The largest number is ${largestNum}.`)
    } else {
      largestNum = num3;
      console.log(`The largest number is ${largestNum}.`)
    }
  } else {
    largestNum = num2;
    if(num2 > num3) {
      console.log(`The largest number is ${largestNum}.`)
    } else {
      largestNum = num3;
      console.log(`The largest number is ${largestNum}.`)
    }
  }
};
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelArr = ["a", "e", "i", "o", "u"];
const vowelChecker = function(char) {
  if(vowelArr.indexOf(char) === -1) {
    console.log("False");
  } else {
    console.log("True");
  }
};
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(arr) {
  let sum = 0;
  for( i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiplyArray= function(arr) {
  let sum = 1;
  for( i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};



// ## Bonus
// ​
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(str) {
  const newString = str.split("").reverse().join("");
  return newString;
};

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arr) {
  let longest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
};

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function(arr, i) {
  let newArr = [];
  for( let j = 0; j < arr.length; j++) {
    if(arr[j].length > i) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
};
