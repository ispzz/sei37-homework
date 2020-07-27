const mta = {
  line_N: [
   'Times Square',
   '34th',
   '28th',
   '23rd',
   'Union Square',
   '8th'
  ],
  //array

  line_6 : [
    'Grand Central',
    '33rd',
    '28th',
    '23rd',
    'Union Square',
    'Astor Place'
  ],
   //array

  line_L : [
    '8th',
    '6th',
    'Union Square',
    '3rd',
    '1st'
  ]
  //array
}; //object array


const planTrip = function(line_Name, startStop,line_Name2, endStop){

    //forms a function and collects all the indexes from array
    const startIndex = mta[line_Name].indexOf(startStop);
    const endIndex = mta[line_Name2].indexOf(endStop);



    if (startIndex > endIndex){

        //travelling in reverse direction.
        //we have to give slice the smaller number first.
        const stationsOfTrip = mta[line_Name].slice(endIndex,startIndex);
        const reversedStations =  stationsOfTrip.reverse();
        console.log(reversedStations);
        console.log(`You must travel through the following stops on ${line_Name}: ${reversedStations}.`);
        console.log(`Total Train stops: ${stationsOfTrip.length}`);

    } else if (line_Name===line_Name2) {

       //travelling in forward direction.
       const stationsOfTrip = mta[line_Name].slice(startIndex +1, endIndex +1);
       console.log(stationsOfTrip, startIndex, endIndex);
       console.log(`You must travel through the following stops on ${line_Name}: ${stationsOfTrip}.`);
       console.log(`Total Train stops: ${stationsOfTrip.length}`);

    } else {

      //changing station lines.
      const stationsOfTrip = mta[line_Name].slice( startIndex +1,endIndex +1);
      const multiStationTrip = mta[line_Name2].slice(startIndex +1,endIndex +1);
      console.log(`You must travel through the following stops on ${line_Name}: ${stationsOfTrip}.`);
      console.log(`change at Union Square to ${line_Name2} and you must travel through the following stops: ${multiStationTrip}`);
      console.log(`Total Train stops: ${stationsOfTrip.length + multiStationTrip.length}`);

    // } else if (startIndex > "Union Square")


    } if (line_Name !== line_Name2) {

      const multiStationTrip = mta[line_Name2].slice(endIndex, startIndex);
      const reversedStations =  multiStationTrip.reverse();
      console.log(`change at Union Square to ${line_Name2} and you must travel through the following stops: ${multiStationTrip}`);
      console.log(`Total Train stops: ${multiStationTrip.length}`);

  }
};

  planTrip("line_L","1st","line_N","28th");
