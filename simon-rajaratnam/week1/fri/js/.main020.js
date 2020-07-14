// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
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
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// 2 options for searching the line to determine which direction to go.
//   1. Each station will have 2 arrays called going up and going down. Each having the list of station going outwards in either direction.
//   2. which is probably best, is the that the program will first search in one direction and then the other. It would need to fork at a changing station to then traverse that line in either direction. We need a function called determineDirection that genericially searcheres in either direction and can also call itself when on a intersection station so it can search the next line.
//     It would need to return the positive direction and where a station change was needed.
//     The function would need to take 2 arguments (the name it's looking for and the direction to try searching. So you call that from the parent function either search up, if that returns a false then search down.)
//
//   there could be variables that
//
//   Most high level.
//
//   program must determine which direction to travel on the line, up or down.
//   if it finds the destination then stops searching and returns true.
//   You then know that it's on the same line and which direction to go.
//   You keep count


const theGrid = {
  //an object of the line names as key and and array of stations as values.
  'N' : [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
  'L' : [ '8th', '6th', 'Union Square', '3rd', '1st' ],
  '6' : [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  //getStationIndex : function( line, station ){}

}; //end theGrid Object

const singleLineTrip = function( line, start, end) {

    const route = [];   // holds the travel plan. Makes it eaasier to print out.
//debugger;
    startIndex = theGrid[line].indexOf( start );
    endIndex = theGrid[line].indexOf( end );
    numberOfStops = endIndex - startIndex;

    if ( numberOfStops < 0 ) {    //travel backwards
      numberOfStops = numberOfStops * -1    // change it to a positive number.
      for ( i=0; i < numberOfStops; i++ ) {
        route[ i ] = theGrid[line][ (startIndex - i)-1 ];   // -1 because we don't include the starting station.
      }
    } else {    // travel forwards
      //console.log('entered forwards stops');
      for ( i=0; i < numberOfStops; i++ ) {
        route[ i ] = theGrid[line][( startIndex + i) +1];   // +1 because we don't include the starting station when reporting.
      }
    } // end if
      return route; // returns the array of station for a singleLineTrip

  }; // end singleLineTrip


const tripPlan = function( startLine, startStation, endLine, endStation ) {
    let singleLineRoute = [];   //store array of single line route.
    let multiLineRoute = [];    //stores array of the second train line if needed.

    if ( startLine === endLine ) {    // startStation and endStation on the same line.
      singleLineRoute = singleLineTrip( startLine, startStation,endStation);
      console.log(`You must travel through the following stops on the ${startLine} line: ${singleLineRoute.join(', ')}.`)
      console.log(`${singleLineRoute.length} stops in total.`);
    } else {
      singleLineRoute = singleLineTrip( startLine, startStation, 'Union Square');
      multiLineRoute = singleLineTrip( endLine, 'Union Square', endStation);
      console.log(`You must travel through the following stops on the ${startLine} line: ${singleLineRoute.join(', ')}.`)
      console.log(`Change at Union Square.`);
      console.log(`Your journey continues through the following stops: ${multiLineRoute.join(', ')}.`)
      console.log(`${ (singleLineRoute.length) + (multiLineRoute.length) } stops in total.`);
    }

};

tripPlan('6','Astor Place','6','Grand Central');
//tripPlan('N','Union Square','N','Times Square');
//singleLineTrip(N,'34th','8th');
//singleLineTrip(N,'8th','34th');
