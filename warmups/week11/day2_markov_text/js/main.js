const poem = `
The dogs are running.
The dogs are happy.
The owners are drunk.
No dogs survived.
`;

const sentenceStarterWords = []; // array to store our sentence starters

// Before we can create the table - we're first going to need to get our text and split it into an array
// To create our markov table, we're going to create a js object called table
// we want an object so we can store each word and it's list of possible words that could be next
// so to actually add to the table we are going to loop through each word in the array and add the currentWord as a key unless it's already been added
// The: []
// then we want to see whatever the following word is and push that into an array as a value
// The: ["dogs"]
// and when the loop gets to the next 'The' instead of creating a new key it will just push the word following the current word onto the array that was just created
const createMarkovTable = text => {

    const table = {};

    let words = text.split(/[ ;\-\n]+/);
    // console.log(words);

    words = words.filter(word => word.length > 0);
    console.log(words);

    // const outputArray = [];
    // for (let i = 0; i < words.length; i++) {
    //     const word = words[i];
    //     if (word.length > 0) {
    //         outputArray.push(word);
    //     }
    // }
    // console.log( outputArray );

    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];

        // Check if current word is in the table
        if (!(currentWord in table)) {
            // The first time we see this word, set its value to []
            table[currentWord] = [];
        }

        // get the word that follows this word
        const nextWord = words[ i + 1 ];
        table[currentWord].push( nextWord );

        if( currentWord.match(/^[A-Z][a-z]/) ) {
            sentenceStarterWords.push( currentWord );
        }
        
    } // end of for loop
    // console.log(sentenceStarterWords);
    // console.log(table);
    return table;

} // end of createMarkovTable
// createMarkovTable( poem );

// Each array can have multiple instances of each word
// We can use a random function since duplicated words will have a higher probability of being picked
const getRandomArrayElement = array => {
    const randomIndex = Math.floor( Math.random() * array.length );
    return array[ randomIndex ];
}

// This function will choose a random word from the array of sentence starters
// then it will choose one of the following words at random to generate the text
const generateMarkovText = (table, outputLength) => {

    let currentWord = getRandomArrayElement( sentenceStarterWords );
    let output = currentWord; // The first word we've chosen above is what starts the output

    for (let i = 0; i < outputLength; i++) {
        // Pick a new following word for the output sentence by using the current
        // word as an key into the table (object) of following words, and choosing
        // a following word from that array, at random
        const nextWords = table[currentWord];
        currentWord = getRandomArrayElement( nextWords );

        // Add the next word to the output string
        output += ' ' + currentWord;
    }

    return output;
}; // end of generateMarkovText

// const markovTable = createMarkovTable( poem );
// console.log(markovTable);
// const newText = generateMarkovText( markovTable, 3 );
// console.log(newText);

$.ajax('/text.txt')
.done( data => {
  console.log( data.length );

  const markovTable = createMarkovTable( data );
//   console.log( markovTable );

  window.markov = markovTable; // save to a global variable for debugging

  const newText = generateMarkovText( markovTable, 40 );
  console.log(`%c${newText}`, 'font-size: 12pt; font-weight: bold');
});

