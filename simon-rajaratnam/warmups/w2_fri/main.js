// # Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
// In other words, given: ``"listen"`` and ``["enlists" "google" "inlets" "banana"]`` the program should return ``"inlets"``.
// ## Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagrams = [
    'enlists',
    'google',
    'inlets',
    'banana',
    'netsil'
];

const word = 'listen';

const ana = function( aWord, anagramList) {

    const wordArray = aWord.split('');  //places the letters of the aWord into an array to consider each letter.
    const matchedArray = [];
    let match = 'No';

    console.log(' catched array at start', matchedArray);

    while (anagramList.length) { // the length will return false if the length is zero.
      examine = anagramList.pop(); //removes the END element of array and places it in examine

      for (var i = 0; i < wordArray.length; i++) {    // we're going to examine each word of the anagram array for a potential match
          if (examine.indexOf(wordArray[i]) == -1 ) { // if a letter is not in the examine word then exit the for loop.
            console.log(examine + ' got ditched.')
            break;

          } else if ( i = (wordArray.length - 1)) { // if letter is a match and if we made it to the last letter of the wordArray
            match = 'Yes';
            matchedArray.push(examine); // adds examine to the matchedArray
            console.log('Added ' + examine + ' to the matchedArray');
          } // end if
      } // end for loop
    } // end while loop for all the words in the anagram array.
    if (match === 'Yes') {
      return matchedArray;   // if the a word in the anagramList is an anagram, then return it.
    }

} // end ana
