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
// ​
// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
// ​
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
// ---
// ​
// # Array and Functions Bonus Material
// ​
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
// ​
// ## Bonus
// ​
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
//
//
// If you're not sure where to start, try and get the simplest parts working first:
// define the two arrays, one for the letters of the secret word, and one for the blank spaces that will be filled in one by one
// create a function guessLetter that takes one argument letter, and make sure it works by printing out letter to the console from inside the function
// so far so good? Now write a loop (inside the guessLetter function) that loops over the secret letters array and prints out each letter to the console
// once your loop is working, instead of printing out each letter of the secret word, use an if statement to check if the letter argument (the user's guess) is equal to the current letter from the secret letters array.... if so, print out "Your guess was correct!"
// etc...



const secretWord  = [ 'b', 'a', 'b', 'b', 'l', 'e' ];
const secretBlank = [ '_', '_', '_', '_', '_', '_' ];

// let correctGuessCount = 0;
const guessLetter = function( letter ) {
  console.log(`Your guess is: ${letter}`);

  // Check if the user`s guess actually matches any of the letters in the secret words
  // 1. write a loop that prints out each of the secret letters in the secret word
  // 2. instead of printing the secret letter out, check if it matches the user`s guess letter
  let correctGuessFound = false;

  for (let i=0; i < secretWord.length; i++){
    const currentSecretLetter = secretWord[i];
    // console.log(currentSecretLetter);

    // Check if the current secret letter matches the user`s guess
    if ( secretWord[i] === letter ){
      console.log('Correct guess!');
      secretBlank[i] = letter; // fill in the correct guess at the corresponding blank position
      console.log( secretBlank ); // Print out what the blanks look like now
      correctGuessFound = true;
    }


    // This gives us too many false negatives!
    // } else {
    //   console.log('Sorry, bad guess!');
    // }

  } // for
  if( correctGuessFound === false ){
    console.log('Bad guess!');
  }
  // console.log('correctGuessFound = ', correctGuessFound);

}; // guessLetter()

// Call it once for testing
guessLetter('b');
guessLetter('a');
guessLetter('l');
guessLetter('e');
