// # Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the
// anagrams of the given word.
// In other words, given: ``"listen"`` and ``["enlists" "google" "inlets" "banana"]``
// the program should return ``"inlets"``.
// ## Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.
const givenWords =
  [
    'enlists',
    'google',
    'inlets',
    'banana'
  ];

let ar = [];
let arr = [];
const input = (x) => {


ar = x.split('').sort();
let ar1 = ar.join('');
for (var i = 0; i < givenWords.length; i++) {
  arr = givenWords[i].split('').sort();
  let ar2 = arr.join('');
if(ar1 == ar2)
{
  console.log(givenWords[i]);
  break;
}
}

};

input('ooggle');
