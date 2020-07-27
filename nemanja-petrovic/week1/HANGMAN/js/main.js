const secretLetters = ['F','O','X']; //array for secret letters
const emptyLetters = ['\_','\_','\_']; //array for empty letters
for (var i = 0; i < secretLetters.length; i++) {
    console.log(secretLetters[i]);
}   //for loop that requires all the information greater than i (i=0;)
emptyLetters.splice(1,3,"f","o","x"); //del from item 1, to del 3 items and replace wit 'fox'
for (var i = 0; i < emptyLetters.length; i++) {
    console.log(emptyLetters[i]);
}      //as above, same move to reveal whats been replaced from \_ (x3) to "fox"

//or

var secretLetter = ['f','o','x'];
var emptyLetter = ['_','_','_'];

let correctGuessCount = 0;

const guessLetter = function( letter ){
  console.log (`your guess is: ${letter}`);

  let correctGuessCount = false;
  for (let i = 0; i < secretLetter.length; i++){



    if (secretLetter[i]===letter){
     console.log('Correct Guess');
     emptyLetter[i] = letter;
     console.log(emptyLetter);
     correctGuessCount = true;
    }
  }
 if ( correctGuessCount === false){
     console.log('Bad Guess');

 }

};

guessLetter('f');
guessLetter('j');
guessLetter('o');
guessLetter('v');
guessLetter('x');

if (emptyLetter==="f","o","x")
   console.log("Congratulations")
