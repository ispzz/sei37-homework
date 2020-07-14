//Wednesday Homework
//The Word Guesser

//Creating three global arrays to hold the letters of the word and letters guessed
const secretWordLetters = ['F', 'O', 'X'];
const correctlyGuessedLetters = [];
const incorrectlyGuessedLetters = [];
let rewardAmount = 0;
let hangMan = 0;

const guessLetter = function(letter) {
  //Case check the letter
  letter = letter.toUpperCase();
  //check if the letter has been guessed yet
  if(correctlyGuessedLetters.includes(letter) || incorrectlyGuessedLetters.includes(letter)){
    rewardAmount = rewardAmount/2;
      console.log(`You already guessed that letter dum dum`);
      console.log(`I'm taking away half of your reward for this. You're now down to $${rewardAmount.toFixed(2)}`);
  } else {
    //Loop through array
    for (var i = 0; i < secretWordLetters.length; i++) {
      //check array for the input letter
      if(secretWordLetters.includes(letter)) {
        if(correctlyGuessedLetters.length === 0){
          //if you guessed your first letter, have some cash
          rewardAmount = rewardAmount + (Math.random() * 100);
        } else {
          //if this is your second or more letter, you've hit cash multiplyer
          rewardAmount = rewardAmount * Math.random() * 10;
        }//if
        //if the input letter is there add to correctly guessed letters
        correctlyGuessedLetters.push(letter);
        console.log(`You have correcly guessed the letter '${letter}'`);
        console.log(`Your reward is now sitting at $${rewardAmount.toFixed(2)}`);
        console.log(`You have ${secretWordLetters.length - correctlyGuessedLetters.length} letters left to guess!`);
        //check if there are any more letters to be guessed and print a congrats if not
        if(secretWordLetters.length === correctlyGuessedLetters.length) {
          console.log(`Congrats!! You correctly guessed all the letters in ${secretWordLetters}!`);
          console.log(`Your incorrect guesses were ${incorrectlyGuessedLetters}`);
        }//if
        break;
      } else if (hangMan >= 5) {
        displayHangMan();
        break;
      } else if(i === secretWordLetters.length - 1){
        //add one to hangMan
        hangMan += 1;
        //else add to incorrectly guessed letters
        incorrectlyGuessedLetters.push(letter);
        //And take away 25% of the money
        rewardAmount = rewardAmount * 0.75;
        console.log(`Sorry! '${letter}' isn't part of the secret word!`);
        console.log(`I'm taking away 25% of your money for being so bad at this... You're now down to $${rewardAmount.toFixed(2)}`);
        console.log('');
        console.log(`Your Hang Man score is now at ${hangMan}! Dont let it get to 6!!`);
      } //if
    }//for loop
  }
};//guessLetter function


const displayHangMan = function() {
  console.log('________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_________');
  console.log('______¶¶¶¶¶¶_____________¶¶¶¶¶¶_______');
  console.log('____¶¶¶¶_____________________¶¶¶¶¶____');
  console.log('__¶¶¶¶_____¶¶¶¶_______¶¶¶¶______¶¶¶___');
  console.log('_¶¶¶¶_____¶¶¶¶¶¶_____¶¶¶¶¶¶______¶¶¶__');
  console.log('_¶¶¶______________________________¶¶¶_');
  console.log('_¶¶¶______________________________¶¶¶_');
  console.log('_¶¶¶¶________¶¶¶¶¶¶¶¶¶¶¶_________¶¶¶__');
  console.log('__¶¶¶¶____¶¶¶___________¶¶¶____¶¶¶¶___');
  console.log('_____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______');
  console.log('____________YOU______LOSE_____________');
};



//Array and Functions Bonus Material
//1.
const maxOfTwoNumbers = function(i, j) {
  if(i > j){
    return i;
  } else {
    return j;
  }
};

//2.
const maxofThree = function(i, j, k) {
  return Math.max(i, j, k);
};

//3.
const isAVowel = function(character) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if(vowels.includes(character)){
    return true
  } else {
    return false
  }
};


//4.
const sumArray = function(array){
  return array.reduce((a, b) => a + b);
};
//This is a solution I found online. As I understand it, the reduce() method subtracts all numbers in an array starting from the left. So instead you repurpose the action of the method by using an arrow function to continue adding each consecutive number 'b' into the running total 'a'

//Please let me know if I don't understand the above correctly :)

//otherwise the below is fine too
const sumArraySimple = function(array) {
  let finalNum = array[0];
  for (var i = 1; i < array.length; i++) {
    finalNum = finalNum + array[i];
  }
  return finalNum;
};


const multiplyArray = function(array){
  let finalNum = array[0];
  for (var i = 1; i < array.length; i++) {
    finalNum = finalNum * array[i];
  }
  return finalNum;
};

//Bonus

//5.

const reverseString = function(string) {
  return string.split('').reverse().join('');
};
//Methods chained here split the characters into an array. Reverse the order, and then piece them all back together.


//6.
const findLongestWord = function(array){
  let longestWord = '';
  for (var i = 0; i < array.length; i++) {
    if(array[i].toString().length > longestWord.length) {
      longestWord = array[i].toString();
    }
  }
  return longestWord.length;
};


//7.
const filterLongWords = function(array, i) {
  const newArray = [];
  for (var j = 0; j < array.length; j++) {
    if(array[j].toString().length > i) {
      newArray.push(array[j]);
    }
  }
  return newArray;
};

//Very similar to the last question
