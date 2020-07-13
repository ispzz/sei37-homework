console.log(`%cMTA Lab`, "color: green; font-size: 20px; font-weight: bold");

// MTA stops objects
const mta = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};


// Single line function
const singleTrip = function(lineName, startStop, endStop){
  for(const key in mta){ 
    // Check which line it is
    if(key === lineName){  
      const currentLine = mta[key];  // Get the line array
      const startIndex = currentLine.indexOf(startStop);  // Start stop index in array
      const endIndex = currentLine.indexOf(endStop);  // End stop index in array
      let lineStops;
      // If it is forward or backward
      if(startIndex < endIndex){  
        lineStops = currentLine.slice(startIndex + 1, endIndex + 1);  // Get travel stops array
      } else {
        // Get travel stops array
        lineStops = currentLine.slice(endIndex, startIndex); 
        // Reverse travel stops array as it is travelling backwards
        lineStops = lineStops.reverse();  
      }
      return lineStops;  // Return the stops array
    }
  }
}; // Single line function


// planTrip
const planTrip = function(lineName1, startStop, lineName2, endStop){
  if(lineName1 === lineName2){ // Travel on the same line
    const trip = singleTrip(lineName1, startStop, endStop);
      // Convert array to string and print out
      console.log(`You must travel through the following stops on the ${lineName1} line: ${trip.join(", ")}.`); 
      // Total stops equal stop array number
      console.log(`${trip.length} stops in total.`);  
  } else {  // Travel on different lines
    // First part of stops before Union Square
    const tripOne = singleTrip(lineName1, startStop, "Union Square");  
    // Convert array to string and print out
    console.log(`You must travel through the following stops on the ${lineName1} line: ${tripOne.join(", ")}.`); 
    console.log(`Change at Union Square.`);  
    // Second part of stops after Union Square
    const tripTwo = singleTrip(lineName2, "Union Square", endStop);  
    // Convert array to string and print out  
    console.log(`Your journey continues through the following stops: ${tripTwo.join(", ")}.`);
    // Total stops equal first part stop array number plus second part stop array number
    console.log(`${tripOne.length + tripTwo.length} stops in total.`);  
  }
}; // Plan Trip
