
require "Colorize"

MTA = {  //stores line names as keys, and station names as values

network = {
  :n => ['Times Square', '34th', '28th - N Line', '23rd', 'Union Square', '8th']

  :l => ['8th', '6th', 'Union Square', '3rd', 'Astor Place']

  6: => [ 'Grand Central', '33rd', '28th - 6 Line', '23rd', 'Union Square', 'Astor Place']
  }

stepCounter = 0;


#  TRIP PROGRAM
def singleLineTrip(lineName, startStation, endStation) 
  route = [];

  #1. Look for start station in array. Eg. Times Square &look through line array for whichever input is
  
  # Get the line array
  currentLine = mta[key]; 

  # 2. Count stations from 'Times Square' to Union square; get index of times sq; then get index of union square, 
  
  #get the index of the start station.
  startIndex = network[line].index( start );  

  #get the index of the end station.
  endIndex = network[line].index( end ); 
        
  #checks if station is ahead or behind the start station
  if (startIndex < endIndex )  

  # Copy the stations between startStation and endStation into new array and print them to the console.
  route = this.network[line].sliceOf( startStation, endStation);          
  puts "You must travel through the following stops on the #{MTA.key} line: #{route}";
    
# singleLineTrip function



#MULTI LINE TRIP funct
  
  def multiLineTrip (startLine, startStation, endLine, endStation) 
    # 1. Look for start station in array

    # 2. look for destination station in all arrays. Keep looking until found destination station. Check if it's on the same line.

    # 2. If station is on another line, count stations from start station to Union square. Print the stations that are between start station and union square. Then, print 'Change at Union Square.'

    # 3. count stations from union square to destination point / 33rd

    # 4.  
  

# DRAFT CODE

# exampleTrip = MTA['N Line'][1, 3];
# p "You must travel through the following stops on the #{MTA.key} line: #{exampleTrip}"

# startStation = MTA['6 Line'][2];
# p startStation
# station = MTA[line][i]
# p startStation
# p startLine = allLines[startingLineName];


