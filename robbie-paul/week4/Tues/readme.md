


// ZARA : HINT:
// Hello!! Yeah MTA confused me so much too. 

//So since you’ve already made a currentLine variable you don’t need to use network[line] on lines 68, 69 and 75. 

//Also, you’ve just misspelt your arguments so it should be currentLine.indexOf( startStation ) . 

//Your logic looks fine so you ask what line, start and stop station then you want to grab the indexOf those and with the index you want to .slice() 

//- slice will return a portion of the array and that’s how you’d list out what stations they’ll go by and 

//this where you’d use the indexOf start and stop. If you have other questions just ask 






// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)