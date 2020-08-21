/////////////// TEXT SOUP ///////////////

// Thanks Zara



// When the document(html is all loaded) the functions will run
$(document).ready(function() {

   // 1. Get contents of the div as a string
   const divContents = $('#words').text(); // getter


const controls = {
    fadeIn: 2000,
    fadeOut: 2000,
    fontSize: 30,
    wordTimerInterval: 100,
    addWord: "",
}
    // makes new object fro dat.GUI
const gui = new dat.GUI();

gui.add(controls, 'fadeIn',0,5000);
gui.add(controls, 'fadeOut', 0, 5000);
gui.add(controls, 'fontSize', 10, 200);

gui.add(controls, 'wordTimerInterval', 1, 1000).onFinishChange(function(newValue) {
    console.log(newValue);
    window.clearInterval(timerID);
    timerID = setINterval(displayWord, newValue);
});
gui.add(controls, 'addWord);

   // 2. Split it into an array from a string
   const words = divContents.split(/[ :_;.,"'\-\n]+/);
   // up based on a regular expression which looks for spaces, punctuation and newlines.
   // (That punctuation will not appear in the words that fill our new array.)
   // .split(/\W+/) - any non word characters will be excluded

   // 3. Takes a max value and returns a random number between 0 and max-1
   const randomValue = function(max) {
     return Math.floor(Math.random() * max);
   };

   // 4. Get a random element from the array
   // So we want to take a random word from the array of words
   const getRandomElementFromArray = function(array) {
     const randomIndex = randomValue(array.length);
     return array[randomIndex];
   };

   // 5. Main function
   const displayWord = function() {

       // get random word from the array of words
       let word = getRandomElementFromArray(words);

if (control.addWord.length > 0 && Math.random() > 0.5) {
  word = controls.addWord;
}

       // create a new div with a class of word
       const $wordDiv = $('<div class="word">');
       // set the text contents of our new div to be the randomly chosen word
       $wordDiv.text(word); // setter

       // Display the words randomly at different positions of the browser window
       // Get a random x, y position to use
       const xRand = randomValue(window.innerWidth);
       const yRand = randomValue(window.innerHeight);
       // console.log(xRand, yRand);

       // Get a random colour for colourful words!
       const randomColour = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;
       // console.log(randomColour);

       // Add the random positions and colours to the css of each word
       $wordDiv.css({
           top: yRand,
           left: xRand,
           color: randomColour,
           fontSize: `${30 + randomValue(30)}pt`,
           transform: `rotate(${randomValue(360)}deg)`,
       });

       // append to the body
       $('body').append($wordDiv);

       // fadeIn and fadeOut words
       // remove the newly created divs
       $wordDiv.fadeIn(2000).fadeOut(2000, function() {
           // remove the div from the DOM when the fadeOut is finished (i.e., it's invisible)
           $(this).remove(); // same as $wordDiv.remove();
       });
   };
   // add a word to the page every 100ms
   setInterval(displayWord, 100);
});
