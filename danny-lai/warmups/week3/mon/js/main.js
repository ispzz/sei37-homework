console.log(`Hello, world!`);
console.log(' ');
console.log(`Text Soup`);

// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg, and paste the text into a hidden <div> element in your HTML file (use CSS to hide it).
// Use jQuery to get the contents of the div as a string, then split up the string into an array of words.

const divContents = $('#text').text();

const words = divContents.split(" "); //.split(/[:_;.,"'/-/n]+/) or .split(/\W+/) any non word characters will be excluded

// Re-use the getRandomElementFromArray() function we wrote at the end of week 1 to pick a random word from the array.

const randomValue = function(max) {
  return Math.floor(Math.random() * max);
};

const getRandomElementFromArray = function(array) {
  const randomIndex = randomValue(array.length);
  return array[randomIndex];
};

const displayWord = function() {
  const word = getRandomElementFromArray(words); //get random word from the array of words
  const $wordDiv = $('<div class="word">'); //create a new div with a class
  $wordDiv.text(word); //setter - taking the random random word and inserting it into the .text value of $wordDiv

  const xRand = randomValue(window.innerWidth);
  const yRand = randomValue(window.innerHeight);

  const randomColour = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)},)`;

  $wordDiv.css({
    top: yRand,
    left:  xRand,
    color: randomColour,
  });

  $('body').append($wordDiv);
};

setInterval(displayWord, 100);

// Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.
// Bonus:
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.
