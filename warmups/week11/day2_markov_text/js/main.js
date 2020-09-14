// seperate text into an array of words
// iterate over the array and add the current word(if the current word already exists as a key don't re-add it) as a key with an empty array as a value to your lookup table
// get the word that follows this word and push it onto the array of words for this key

// Pick a random starting word, and get the next word by randomly picking one of the words in its array of following words - Use Math.random to get random words from the array e.g. maybe like text soup hmmmmm

// Have your page load the contents of a text file into a single variable using AJAX (you will need to run a local server so you can open the file as a URL). To run a local server which will let you load a local text file via AJAX, try `python -m SimpleHTTPServer` on the command line.