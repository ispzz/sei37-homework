 /////////////// TEXT SOUP ///////////////

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

// When the document(html is all loaded) the functions will run
$(document).ready(function() {

    // Capture the ID of the setInterval timer we create, so we can cancel and re-create it
    let timerID = null;
    let words = [];

    // a query string is the url with '?' at the end and followed by some parameters, in this case whatever we want to search in the wikiAPI
    // e.g. day4_text_soup_3/index.html?page=Alan+Turing
    // window.location gets the current windows location(URL)
    // window.location.search returns the query string
    const urlParams = new URLSearchParams(window.location.search);

    // urlParams will have 'page=Cat' stored so now we can get the value of page which is Cat in this example
    const page = urlParams.get('page');
    console.log(page);

    $.getJSON("https://en.wikipedia.org/w/api.php?callback=?", {
        action: 'parse',
        format: 'json',
        page: page
    }).done(data => {
        // console.log(data);
        let wikiHTML = data.parse.text["*"];
        // console.log(wikiHTML);

        let text = $('#words').html(wikiHTML).text();

        words = text.split(/[ :_;.,"'\-\n]+/);

        // console.log(words);

        timerID = setInterval(displayWord, 100);
    })

    // So dat.GUI will determine a controller type based on the properties initial value
    const controls = {
        fadeIn: 2000,
        fadeOut: 2000,
        fontSize: 30,
        wordTimerInterval: 100,
        addWord: "",
        // color: [ 0, 128, 255 ],
        // reset: function () {
        //     window.clearInterval(timerID);
        //  },
    }

    // create a new GUI object which we call  methods on to add graphical controls
    // make new object from dat.GUI
    const gui = new dat.GUI();

    gui.add(controls, 'fadeIn', 0, 5000);
    gui.add(controls, 'fadeOut', 0, 5000);
    gui.add(controls, 'fontSize', 10, 200);
    gui.add(controls, 'wordTimerInterval', 1, 1000)
    .onFinishChange(function(newValue) {
        // This code will run when the slider has stopped being dragged by the user
        console.log(newValue);

        // Cancel the currently-running putWord() setInterval, and start a new one
        // with the new interval value
        window.clearInterval(timerID);
        timerID = setInterval(displayWord, newValue);
    })
    gui.add(controls, 'addWord');

    // 1. Get contents of the div as a string
    const divContents = $('#words').text(); // getter

    // 2. Split it into an array from a string
    // const words = divContents.split(/[ :_;.,"'\-\n]+/);
    // up based on a regular expression which looks for spaces, punctuation and newlines.
    // (That punctuation will not appear in the words that fill our new array.)
    // .split(/\W+/) - any non word characters will be excluded

    // 5. Main function
    const displayWord = function() {
        
        // get random word from the array of words
        let word = getRandomElementFromArray(words);

        // Use the value from the GUI text input approx half the time
        // (but only if the string has contents)
        if (controls.addWord.length > 0 && Math.random() > 0.5) {
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
            // color: `rgb(${controls.color})`,
            fontSize: `${controls.fontSize}pt`,
            transform: `rotate(${randomValue(360)}deg)`,
        });
        
        // append to the body
        $('body').append($wordDiv);

        // fadeIn and fadeOut words
        // remove the newly created divs
        $wordDiv.fadeIn(controls.fadeIn).fadeOut(controls.fadeOut, function() {
            // remove the div from the DOM when the fadeOut is finished (i.e., it's invisible)
            $(this).remove(); // same as $wordDiv.remove();
        });
    };
    // add a word to the page every 100ms
    timerID = setInterval(displayWord, 100);
});