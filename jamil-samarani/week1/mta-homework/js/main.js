console.log("MTA Homework");

// # MTA Lab
// ​
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation and JS data structures.
// ​
// #### Activity
// * Create a program that models a simple subway system.
// ​
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// ​
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// ​
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
// ​
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// ​
// ​
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const mta = {line_N :
  ['Times Square',
  '34th',
  '28th',
  '23rd',
  'Union Square',
  '8th'],

  line_6 :
  ['Grand Central',
  '33rd',
  '28th',
  '23rd',
  'Union Square',
  'Astor Place'],

  line_L :
  ['8th',
  '6th',
  'Union Square',
  '3rd',
  '1st']

};

const planTrip = function ( lineName, startStation, endLineName, endStation)

  if (lineName === endLineName){

    const singleLineTrip = function( lineName, startStation, endStation){
      console.log(`In singleLineTrip: ${lineName}, ${startStation}, ${endStation}`);
      //Now that the user has defined the "lineName", use it as a key to extract the
      //array of stations for this line. (value of the key (array in this case))
      const stations = mta[lineName];
      console.log(stations);

      //Create variable to store indexOf startStation and endStation
      const startStationIndex = stations.indexOf(startStation);
      //above constant is equivalent to =mta[lineName].indexOf(startStation)
      const endStationIndex = stations.indexOf(endStation);
      console.log(startStationIndex, endStationIndex);

      //to identify if the train is going backward along the line,
      //endStationIndex need to be less than startStationIndex.
      if (endStationIndex < startStationIndex){
        console.log("reverse direction journey"); //Test If statement true or false
        const route= stations.slice(endStationIndex, startStationIndex);
        const reverseRoute= route.reverse();
        console.log(reverseRoute);

      }else {
        const route= stations.slice(startStationIndex +1, endStationIndex +1);
        console.log(route);

        console.log("forward direction journey"); //Test If statement true or false

      }//Else

    }; // End function singleLineTrip

  }else {
    console.log(cheese)
  };





planTrip("line_6", "33rd", "line_L", "1st");

      // console.log("Forward Trip");
      // singleLineTrip("line_6", "33rd", "Union Square");
      // console.log("Reverse Trip");
      // singleLineTrip("line_6", "Union Square", "33rd");


//   const firstStation = mta[startLine].indexOf(startStation);
//   const unionSquare = mta[startLine].indexOf(unionSquare);
//   const endStation = mta[endLine].indexOf(endStation);
//
//   if (firstStation < unionSquare){
//
//     let route= (mta[startLine].slice(startStation + 1, "unionSquare");
//      console.log(`You must travel the following stations on the ${startLine}: ${rotue}.`);
//
//    }
//    else {
//       let reverseRoute = mta[startLine].reverse();
//       let route = reverseRoute.slice(startStation + 1, "unionSquare");
//       console.log(`You must travel the following stations on the ${startLine}: ${rotue}.`);
//   }
//
//   if ('unionSquare'< )
//
//   } //IF
// }// Function
