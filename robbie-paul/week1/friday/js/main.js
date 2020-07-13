// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
//


const MTA = {  //stores line names as keys, and station names as values
  
  const network = {
    N: [
      'Times Square',
      '34th',
      '28th - N Line',
      '23rd',
      'Union Square',
      '8th',
    ],

    L: [
      '8th',
      '6th',
      'Union Square',
      '3rd',
      'Astor Place',
    ],

    6: [
      'Grand Central',
      '33rd',
      '28th - 6 Line',
      '23rd',
      'Union Square',
      'Astor Place',
    ],
};

let stepCounter = 0;


//  TRIP PROGRAM
const singleLineTrip = function(lineName, startStation, endStation) {
  let route = [];

    // 1. Look for start station in array/ . Eg. Times Square &look through line array for whichever input is
    const currentLine = mta[key]; // Get the line array

    // 2. Count stations from 'Times Square' to Union square; get index of times sq; then get index of union square, 
    const startIndex = network[line].indexOf( start );  //get the index of the start station.
    const endIndex = network[line].indexOf( end ); //get the index of the end station.
        
    if (startIndex < endIndex ) {    //checks if station is ahead or behind the start station

        }
    // Copy the stations between startStation and endStation into new array and print them to the console.
    let route = this.network[line].sliceOf( startStation, endStation);          
    console.log(`You must travel through the following stops on the ${MTA.key} line: ${route}`);
    
    } // singleLineTrip function



//MULTI LINE TRIP funct
  
  const multiLineTrip = function(startLine, startStation, endLine, endStation) {
    // 1. Look for start station in array

    // 2. look for destination station in all arrays. Keep looking until found destination station. Check if it's on the same line.

    // 2. If station is on another line, count stations from start station to Union square. Print the stations that are between start station and union square. Then, print 'Change at Union Square.'

    // 3. count stations from union square to destination point / 33rd

    // 4.  
  }

// DRAFT CODE

// let exampleTrip = MTA['N Line'].slice(1, 3);
// console.log(`You must travel through the following stops on the ${MTA.key} line: ${exampleTrip}`);


  // const startStation = MTA['6 Line'][2];
  // console.log(startStation);
    // let station = MTA[line][i].;
    // console.log(startStation)
//   // const startLine = allLines[startingLineName];


// // } 







// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)