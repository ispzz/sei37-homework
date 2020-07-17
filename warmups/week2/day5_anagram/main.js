const wordSort = function(unsortedWord) {
    let sortedWord = unsortedWord.toLowerCase().split("").sort().join("");
    return sortedWord;
}

const anagramDetector = function(word, array) {
    let wordOne = wordSort(word);
    console.log(wordOne);

    for (let i = 0; i < array.length; i++) {
        let wordTwo = wordSort(array[i]);
        console.log(wordTwo);
        
        if (wordOne === wordTwo) {
            console.log(`The anagram of ${word} is ${array[i]}`);
        }
    }
}
anagramDetector("listen", ["enlists", "google", "inlets", "banana"]);


