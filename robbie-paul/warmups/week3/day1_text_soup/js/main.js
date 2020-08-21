// Text Soup
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.

// Hints:
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg, and paste the text into a hidden <div> element in your HTML file (use CSS to hide it).
// Use jQuery to get the contents of the div as a string, then split up the string into an array of words.

// $('#words')

// Re-use the getRandomElementFromArray() function we wrote at the end of week 1 to pick a random word from the array.
// Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.
// Bonus:
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.

const randomValue = function(max) {
    return Math.floor(Math.random() * max);
};

const getRandomElementFromArray = function(array) {
    const randomIndex = randomValue(array.length);
    return array[randomIndex];
};

$(document).ready(function() {
    //Get contents of div as a string
    const divContents = $('#words').text(); 
        
    //split it into an array from string.
    const words = divContents.split(/[ :_;.,"'\-\n]+/);
    //(/\W+/) any non-word characters will be excluded

    //Main function
    const displayWord = function() {
        //get random word from the array of words
        const word = getRandomElementFromArray(words);
    
        //create a new div with a class
        const $wordDiv = $('<div class="word">');
        $wordDiv.text(word); //setter

        const xRand = randomValue(window.innerWidth);
        const yRand = randomValue(window.innerHeight);
        console.log(xRand, yRand);

        const randomColor = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;
        
        // console.log(randomColour);

        //add to css 
        $wordDiv.css({
            top: yRand,
            left: xRand, 
            color: randomColor,
            fontSize: `${30 + randomValue(30)}pt`,
            transform: `rotate(${randomValue(360)}deg)`
        });

        $('body').append($wordDiv);
        
        $wordDiv.fadeIn(2000).fadeOut(2000, function() {
            $(this).remove(); //same as $wordDiv.remove()
        });
    };

    displayWord();

});