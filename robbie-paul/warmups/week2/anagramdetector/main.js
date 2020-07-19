// // # Anagram Detector
// // Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// // In other words, given: ``"listen"`` and ``["enlists" "google" "inlets" "banana"]`` the program should return ``"inlets"``.



// // 1. get the given word and an array of words to check

// const wordList = ["enlists", "google",  "inlets", "banana",];


// // 2. compare the word with the array of words to check if an anagram exists in the array

// // set the 'output object'https://stackoverflow.com/questions/909449/anagrams-finder-in-javascript

// const anagram = {}; 

//  const anagramDetector (wordA, wordList) = function() {

//     if (wordA.length !== wordB.length) {
//         return false;
//     }

//     for (let wordListIndex = 0; wordListIndex < wordList.length; wordListIndex++) {

//         let word = wordList[wordListIndex];
//         if (...)
        
//         other.split("").sort().join("")){

//     }
//     }
    

// // 3. output the word from the array tht matches

// } //anagram detector function
// g





// ## Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.



//SOLUTION :: :

    const wordSort = function(unsortedWord) {
        let sortedWord = unsortedWord.toLowerCase().split("").sort().join("");              //sort puts in alpha order 
        return sortedWord;
    }

    const anagramDetector = function( word, array) {
        let wordOne = wordSort(word);
        console.log(wordOne);

        for (let i = 0; i < array.length; i++) {
            let wordTwo = wordSort(array[i]);
            console.log('word one =' + wordOne)
            console.log('word two =' + wordTwo);
            if (wordOne === wordTwo ) {
                console.log(`The anagram of ${word} is ${array[i]}`);
            }
        }
    }

    anagramDetector("listen", ["enlists", "google", "inlets", "banana"]);