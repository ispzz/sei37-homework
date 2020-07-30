// Ben Purvis, 7/12/2020

const lines = {
    nLine : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lLine : ["8th", "6th", "Union Square", "3rd", "1st"],
    sixLine : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
planTrip = (isGoingBack = false, ...stops) => {       
    getDirection(isGoingBack, ...stops);
}
getDirection = (reverse = false, ...stops) => {
    let endLineStops;
    let lineIndexes = [];
    let interceptString = "Your journey continues through: ";
    for (let i = 0; i < stops.length; i++){
        lineIndexes.push(getStopIndex(stops[i]))
    }

    !reverse ? 
    endLineStops = getLine(stops[stops.length - 1])
    : endLineStops = getLine(stops[stops.length - 1]).reverse()
    interceptString += checkLine(endLineStops, endLineStops.length) 
    console.log("You start here: " + stops[0]);
    if(checkIntersect(endLineStops)){
        console.log("You are intersecting at Union Square please change stops")
    }
    console.log(interceptString)
}
checkIntersect = (stop) => {
    if (stop.indexOf("Union Square") !== -1){
        return true;
    }else{
        return false;
    }
}
getLine = (stop) => {
    let isNLine = lines.nLine.includes(stop);
    let islLine = lines.lLine.includes(stop);
    let isSixLine = lines.sixLine.includes(stop);
    let line = [];
    if (isNLine){
        line = lines.nLine;
        return line;
    }
    if (islLine){
        line = lines.lLine;
        return line;
    }
    if (isSixLine){
        line = lines.sixLine;
        return line;
    }
}
stopExists = (line, stops) => {
    for(let i = 0; i < line.length; i++){
        //console.log(line[i])
        return line[i] === stops;
    }
}
checkLine = (line, stop) => {
    let lineString = "";
    let linesAhead = [];
    if (line !== undefined){
        linesAhead = line.slice(getStopIndex(stop), line.length);
        lineString += linesAhead.join(", ");
    } 
    return lineString
}
checkStopValue = (stop) => {
    if(getLine(stop) !== undefined){
        if(getLine(stop).indexOf(stop) !== -1){
            return true;
        }else{
            return false;
        }
    }
}
getStopIndex = (stop) => {
    if(getLine(stop) !== undefined){
       return getLine(stop).indexOf(stop);
    }
}
method = async () => {
    const res = await fetch("https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace", object)
    const data = res.json;

}
const object = {
    method : "GET",
    headers : {
        "x-api-key" : "XoWjM9pgJl5TB0JC1gWzdacMD5ntgZjB4fjXUin9"
    }
}
console.log(res)
planTrip(false, '23rd', '23rd');