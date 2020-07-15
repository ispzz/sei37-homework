/*# MTA Lab

## Objectives:
* Apply your knowledge of Javascript to solve a real world problem.
* Get really good at array manipulation.

#### Activity
* Create a program that models a simple subway system.

* The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

```javascript
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
```

* There are 3 subway lines:
  * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example,
  this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have
  to differentiate this when you name your stops in the arrays.)
* Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


#### Hints:
* Work out how you would do it on paper first! Then start to explain that process in Javascript.
* Get the program to work for a single line before trying to tackle multiple lines.
* Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()```
later to make it more interactive.
* Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
* The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
* Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6
need to be differentiated)*/

const subwayLines = [{ line :'N' , stops:["Time Square","34th","28th", "23rd","Union Square","8th"]},
                   {line: 'L', stops:["8th","6th", "Union Square","3rd","1st"]},
                   {line: '6', stops:["Grand Central","33rd", "28th","23rd","Union Square","Astor Place"]}];

const interSectionPoint = 'Union Square';
const travelInstruction = 'You must travel through the following stops on the';
const travelChangeOver = 'Your journey continues through the following stops:';
let a, b, c, d;
//Get the whole stoplist for particular given line.
const getStopDetails = function(line)
{
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
let lineDetails = subwayLines.find(subwayLine => (subwayLine.line == line));
return lineDetails.stops;
};

// Get the user stoplist for a particular line.
const getUsersStopsByLine = function(line,originStop,destinationStop)
{
let stopList = getStopDetails(line);
let originStopIndex = stopList.indexOf(originStop);
let destinationStopIndex = stopList.indexOf(destinationStop);

if(originStopIndex < destinationStopIndex)
{
return stopList.slice(stopList.indexOf(originStop) + 1 ,stopList.indexOf(destinationStop) + 1);
}
else
{
return stopList.reverse().slice(stopList.indexOf(originStop) + 1 ,stopList.indexOf(destinationStop) + 1);
}
};

//Check is lines are same or not
const lineCheck = function(originLine,destinationLine)
{
if(originLine === destinationLine)
{
return true;
}
return false;
}

//Provide Customer Plan details
const planTrip = function(originLine,originStop,destinationLine,destinationStop)
{

if(lineCheck(originLine,destinationLine))
{
 let finalLineStops = getUsersStopsByLine(originLine,originStop,destinationStop);
 document.getElementById("ans1").innerHTML = `${travelInstruction} <span>${originLine}</span> line: <span id = 'st'>${finalLineStops} </span>`;
 document.getElementById("ans2").innerHTML = `<span>${finalLineStops.length}</span> stops in total.` ;
}
else
{
let originLineStops  = getUsersStopsByLine(originLine,originStop,interSectionPoint);
let destinationLineStops = getUsersStopsByLine(destinationLine,interSectionPoint,destinationStop);
let finalLineStops = originLineStops.concat(destinationLineStops);
document.getElementById("ans1").innerHTML = `${travelInstruction} <span>${originLine}</span> line:<span> ${originLineStops}</span>.` ;
document.getElementById("ans2").innerHTML = `Change at <span>${interSectionPoint}</span>.` ;
document.getElementById("ans3").innerHTML = `<span>${travelChangeOver} ${destinationLineStops}</span>.` ;
document.getElementById("ans4").innerHTML = `<span>${finalLineStops.length}</span> stops in total.` ;

}
};

const clearFields = () => {

     document.getElementById("originLine").value = "";
     document.getElementById("originStop").value = "";
     document.getElementById("destinationLine").value = "";
     document.getElementById("destinationStop").value = "";

};

const getValue = () => {
a =  document.getElementById("originLine").value;
b =  document.getElementById("originStop").value ;
c =  document.getElementById("destinationLine").value;
d =  document.getElementById("destinationStop").value;
planTrip(a,b,c,d);
};
// /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//  console.log(' Welcome to MTA Lab \n\n');
//  planTrip('6','33rd','6','Astor Place');
// /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// console.log(' Next Output ');
// planTrip('6','Astor Place','6','Grand Central');
// /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// console.log(' Next Output ');
// planTrip('L','1st','L','8th');
// /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// console.log(' Next Output ');
// planTrip('L','1st','N','Time Square');
