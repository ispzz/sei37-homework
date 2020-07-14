console.log('Hello, world!');
console.log(' ');
console.log('The Word Guesser');

const secretWord = ['b', 'a', 'b', 'b', 'l', 'e'];
const secretBlank = ['_', '_', '_', '_', '_', '_']

let correctGuessCount = 0; //when = array.length win!!

const guessLetter = function(letter){
  console.log(`Current guess is ${letter}.`);

let correctGuessFound = false;

 for(let i = 0; i < secretWord.length; i++){
  // const currentSecretLetter = secretWord[i];
  if(secretWord[i] === letter){
    console.log('Correct guess!');
    secretBlank[i] = letter
    console.log(secretBlank);
    correctGuessFound = true;
    }

  }

  if(correctGuessFound === false){
    console.log('Bad guess!');
  }

}

guessLetter('b');
