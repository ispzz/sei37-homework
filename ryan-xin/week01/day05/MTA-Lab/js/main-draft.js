console.log(`%cMTA Lab`, "color: green; font-size: 20px; font-weight: bold");
//   planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the ${N line}: ${34th, 28th, 23rd, Union Square}."
// // "Change at Union Square."
// // "Your journey continues through the following stops: ${23rd, 28th, 33rd}."
// // "${7} stops in total."

const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

let stopCounts = 0;

// Single line function
const singleTrip = function(lineName, startStop, endStop){
  const startIndex = lineName.indexOf(startStop);
  const endIndex = lineName.indexOf(endStop);
  stopCounts += Math.abs(startIndex - endIndex);
  let lineStops;
  if(startIndex < endIndex){
    lineStops = lineName.slice(startIndex + 1, endIndex + 1);
  } else {
    lineStops = lineName.slice(endIndex, startIndex);
    lineStops = lineStops.reverse();
  }
  return lineStops.join(", ");
}; // Single line function

// // planTrip
const planTrip = function(lineName1, startStop, lineName2, endStop){
  const tripOne = singleTrip(lineName1, startStop, "Union Square");
  console.log(`You must travel through the following stops on the line: ${tripOne}.`)
  console.log(`Change at Union Square.`)
  const tripTwo = singleTrip(lineName2, "Union Square", endStop);
  console.log(`Your journey continues through the following stops: ${tripTwo}.`)
  console.log(`${stopCounts} stops in total.`);
  stopCounts = 0;
}; //