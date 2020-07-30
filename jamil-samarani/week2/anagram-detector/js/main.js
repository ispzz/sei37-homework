// Rearrange the characters of all the words to find anagram
// so wordOne === wordTwo returns true

//// Helper function ////
// This will rearrange characters of any strings
// .toLowerCase() to turn any upperCase characters to lowerCase
// .sort() will sort the elements of an array alphabetically
// before sorting the string we need to .split() into an array
// .join("") will return the array as a string ["a", "z"] -> "az"
const wordSort = function(unsortedWord) {
    let sortedWord = unsortedWord.toLowerCase().split("").sort().join("");
    return sortedWord;
}

/////////////// Anagram Detector ///////////////
// All this function will do is use wordSort() on the word and list of possible anagrams
// The for loop will iterate through the array and run wordSort() on each string
const anagramDetector = function(word, array) {
    let wordOne = wordSort(word);
    console.log(wordOne);
    for (let i = 0; i < array.length; i++) {
        let wordTwo = wordSort(array[i]);
        console.log(wordTwo);
        if (wordOne === wordTwo) {
            console.log(wordOne === wordTwo); // will return true
            console.log(`The anagram of ${word} is ${array[i]}`);
        }
    }
}
anagramDetector("listen", ["enlists", "google", "inlets", "banana"]);
