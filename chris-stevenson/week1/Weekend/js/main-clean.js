//MTA Lab
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

//object mtaLines is three arrays of each line in order of their stops
const mtaLines = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};


//Function to find the common train station in the train network object
const findCommonStation = function(trainNetwork) {
  //Turn object into array of keys
  const trainNetworkArray = Object.keys(trainNetwork);
  //Create a default search array to use as my standard to loop through
  const baseSearchArray = trainNetwork[trainNetworkArray[0]];
  //Create empty array to store the duplicate train stations
  let commonStationArray = [];
  //loop through each train line
  for (let i = 1; i < trainNetworkArray.length; i++) {
    //I was getting too many nesting square brackets so I've turned the currently searched array into it's own variable
    let currentSearchArray = trainNetwork[trainNetworkArray[i]];
    //loop through the array contents and push any duplicates to the commonStationArray
    for (let i = 1; i < baseSearchArray.length; i++) {
      if(baseSearchArray.indexOf(currentSearchArray[i]) > -1){
          commonStationArray.push(currentSearchArray[i]);
      }
    }//end of loop through array
  }//end of loop through object
  let maxOccurence = 1; //stores maximum number of duplicate stations
  let count = 0; //counter
  let mostCommonStation; //stores most common station in train network
  for (let i = 0; i < commonStationArray.length; i++)  {  //Double loop to catch all values
    for (let j = i; j < commonStationArray.length; j++) {
      if (commonStationArray[i] == commonStationArray[j]){ //see if element occurs again in the array
        count++;   //add count if true
      }
      if (maxOccurence < count){   //See if the value being evaluated is smaller than the number of times it's been found
        maxOccurence = count;      //keep a hold of the value now so we can check future values which might be more common
        mostCommonStation = commonStationArray[i];   // store the most common station
      }
    }//for loop end
  }//for loop end
  return mostCommonStation;
};


const travel = function(start, end, lineArray) {
  //Variable to store lineDestination
  let lineDestination;
  //Array to hold stations we've passed
  let passedStationsArray = [];
  //Store output object
  const travelOutput = {};
  //if starting station comes before end station
  if(start < end) {
    lineDestination = lineArray[lineArray.length - 1];
    passedStationsArray = lineArray.slice(start, end);
    passedStationsArray.shift();
  } else { //else we must travel in opposite direction
    lineDestination = lineArray[0];
    passedStationsArray = lineArray.slice(end, start);
    passedStationsArray = passedStationsArray.reverse();
    passedStationsArray.pop();
  }//else
  travelOutput.lineDestination = lineDestination;
  travelOutput.passedStationsArray = passedStationsArray;
  return travelOutput;
};//Travel function

//Output objects and methods
const output = {
  intro: function(lineA, lineAArray, stationAIndex, lineB, lineBArray, stationBIndex) {
    //Simple Intro message confirming the user's choice
    console.log(`You have entered that you are currently at ${lineAArray[stationAIndex]} station on the ${lineA} line and would like directions to ${lineBArray[stationBIndex]} station on the ${lineB} line.\nPlease follow the below steps for the shortest possible route:`);
  },//intro function end
  travelSteps: function(destination, lineDestination, passedStationsArray, stepCounter) {
    console.log(`${stepCounter}. Board the train moving toward ${lineDestination} station.`);
    stepCounter++;
    //Check if we have passed any stations on our way to the destination
    if(passedStationsArray.length > 0){
      //This code is just to make the grammar nice
      if(passedStationsArray.length > 1) {
        passedStationsArray.splice(passedStationsArray.length - 1, 0, 'and'); // add an 'and' before the last value in the array of station we've gone past but not stopped at
        let passedStations = passedStationsArray.join(', '); // join the array into a string but separate values with ', '
        const lastComma = passedStations.lastIndexOf(','); // variable to store the last comma in the string
        passedStations = passedStations.slice(0, lastComma) + passedStations.slice(lastComma + 1); //remove the last comma in the string
        console.log(`${stepCounter}. Wait until you have passed stations ${passedStations}.`);
      } else {
        console.log(`${stepCounter}. Wait until you have passed ${passedStationsArray} station.`);
      }
      stepCounter++;
    }
    console.log(`You have now have arrived at ${destination} station.`);
    return stepCounter;
  },//travelSteps function end
  //Output to switch train lines
  switchLines: function(lineB, stepCounter) {
    console.log(`${stepCounter}. Exit the train and make your way to line ${lineB}.`);
    stepCounter++;
    return stepCounter;
  },
  moveWithinStation: function(lineB, stopOver, stepCounter){
    console.log(`${stepCounter}. Make your way to line ${lineB} within ${stopOver} station.`);
    stepCounter++;
    return stepCounter;
  },
}//End of output object




//planTrip function to give directions going from pointA to pointB
const planTrip = function(lineA, stationA, lineB, stationB){

  //turn train line arguments into respective line's array for easier access
  let lineAArray = mtaLines[lineA];
  let lineBArray = mtaLines[lineB];
  //define the start and end station's index as its own variable
  let stationAIndex = lineAArray.indexOf(stationA);
  let stationBIndex = lineBArray.indexOf(stationB);

  //find the common station in the train network
  let stopOver = findCommonStation(mtaLines);

  //intro the travel plan
  output.intro(lineA, lineAArray, stationAIndex, lineB, lineBArray, stationBIndex);

  //variable to count the number of steps in the journey
  let stepCounter = 1;

  //Check if you're already at the most common station but in the wrong part of the station
  if(stationA === stopOver && lineA != lineB) {
    stepCounter = output.moveWithinStation(lineB, stopOver, stepCounter);
    lineA = lineB;
    stationAIndex = lineBArray.indexOf(stopOver);
    lineAArray = lineBArray;
  }

  //variable to store object created in travel function
  let travelOutput;
  //Check if stations are on the same line
  if(lineA === lineB){
    travelOutput = travel(stationAIndex, stationBIndex, lineAArray);
    stepCounter = output.travelSteps(stationB, travelOutput.lineDestination, travelOutput.passedStationsArray, stepCounter);
  } else {
    //Travel to the shared station in the network
    travelOutput = travel(stationAIndex, lineAArray.indexOf(stopOver), lineAArray);
    stepCounter = output.travelSteps(stopOver, travelOutput.lineDestination, travelOutput.passedStationsArray, stepCounter);
    //Exit function if you have arrived at the shared station.
    if(stationB === stopOver){
      return;
    }
    stepCounter = output.switchLines(lineB, stepCounter);
    travelOutput = travel(lineBArray.indexOf(stopOver), stationBIndex, lineBArray);
    //Travel to destination
    stepCounter = output.travelSteps(stationB, travelOutput.lineDestination, travelOutput.passedStationsArray, stepCounter);
  }//if else end
};

console.log(planTrip('N', 'Times Square', '6', '33rd'));
console.log(planTrip('N', '34th', 'N', 'Times Square'));
console.log(planTrip('N', '34th', 'N', 'Union Square'));
console.log(planTrip('N', 'Union Square', 'N', '34th'));
console.log(planTrip('6', 'Grand Central', 'L', '1st'));
console.log(planTrip('6', 'Union Square', 'N', '34th'));
