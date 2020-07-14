console.log(`%cMTA Lab`, "color: green; font-size: 20px; font-weight: bold");
//   planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the ${N line}: ${34th, 28th, 23rd, Union Square}."
// // "Change at Union Square."
// // "Your journey continues through the following stops: ${23rd, 28th, 33rd}."
// // "${7} stops in total."
const mta = {
  lineN: {
    name: "N",
    stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },
  lineL: {
    name: "L",
    stops: ["8th", "6th", "Union Square", "3rd", "1st"]
  },
  line6: {
    name: "6",
    stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  },
  // Which line?
  lineChecker: function(lineName){
    for(const key in mta){
      if(mta[key].name === lineName){
        return mta[key].stops; // return the stop array
      }
    }
  } // which line
};

let stopCounts = 0;

// Single line function
const singleTrip = function(lineName, startStop, endStop){
  const currentLine = mta.lineChecker(lineName);
  const startIndex = currentLine.indexOf(startStop);
  const endIndex = currentLine.indexOf(endStop);
  stopCounts += Math.abs(startIndex - endIndex);
  let lineStops;
  if(startIndex < endIndex){
    lineStops = currentLine.slice(startIndex + 1, endIndex + 1);
  } else {
    lineStops = currentLine.slice(endIndex, startIndex);
    lineStops = lineStops.reverse();
  }
  return lineStops.join(", ");
}; // Single line function



// // planTrip
const planTrip = function(lineName1, startStop, lineName2, endStop){
  const tripOne = singleTrip(lineName1, startStop, "Union Square");
  console.log(`You must travel through the following stops on the ${lineName1} line: ${tripOne}.`);
  console.log(`Change at Union Square.`);
  const tripTwo = singleTrip(lineName2, "Union Square", endStop);
  console.log(`Your journey continues through the following stops: ${tripTwo}.`)
  console.log(`${stopCounts} stops in total.`);
  stopCounts = 0;
}; //

// // planTrip
// const planTrip = function(lineName1, startStop, lineName2, endStop){
//   if(startStop === "Union Square"){
//     const trip = singleTrip(lineName2, "Union Square", endStop);
//     console.log(`You must travel through the following stops on the ${lineName2} line: ${trip}.`);
//     console.log(`${stopCounts} stops in total.`);
//     stopCounts = 0;
//   } else if (endStop === "Union Square") {   
//     const trip = singleTrip(lineName1, startStop, "Union Square");
//     console.log(`You must travel through the following stops on the ${lineName1} line: ${trip}.`);
//     console.log(`${stopCounts} stops in total.`);
//     stopCounts = 0;
//   } else {
//     const tripOne = singleTrip(lineName1, startStop, "Union Square");
//     console.log(`You must travel through the following stops on the ${lineName1} line: ${tripOne}.`);
//     console.log(`Change at Union Square.`);
//     const tripTwo = singleTrip(lineName2, "Union Square", endStop);
//     console.log(`Your journey continues through the following stops: ${tripTwo}.`)
//     console.log(`${stopCounts} stops in total.`);
//     stopCounts = 0;
//   };
//   };