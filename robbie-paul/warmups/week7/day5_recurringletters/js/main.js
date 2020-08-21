
// wordArray = []

// const recurringLetterCounter = (word) => {

//     word.forEach(element => {
//         let wordLength = element.length();
//         console.log('wordArray', wordLength )
//     });

// };




// SOULTINO

const recurrLetter = function(sentence) {
    const noSpaceSen = sentence.split(' ').join('');
    // console.log(noSpacesen);
    const letterScores = {};
    let maxScore = 0;
    let maxLetter = '';



    noSpaceSen.split('').forEach(function(char) {
        // console.log('here is ' + char);
        if (letterScores[char]) {
            letterScores[char]++;
        } else {
            letterScores[char] = 1
        } 
        //console.log(letterScores);
    });

    for(let char in letterScores) {
        console.log(letterScores[char]);
        const score = letterScores[char]
        if (letterScores[char] > maxScore) {
            maxScore = letterScores[char];
            maxLetter = char;
            console.log(maxScore);
            console.log(maxLetter);
        }
    }
}

recurrLetter('he e e y e');