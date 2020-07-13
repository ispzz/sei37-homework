
console.log(`MTA Homework`);

// MTA Lab

// const mta = {
 // nline: "8th", "6th", "Union Square", "3rd", "1st"
//  }

// const mta = {
//   "N": [
//     "Times Square",
//     "34th",
//     "29th",
//     "21st",
//     "Union Square",
//     "8th"
//   ], // End of NLine
//
//   "L": [
//     "8th",
//     "6th",
//     "Union Square",
//     "3rd",
//     "1st"
//   ],
//
//   "6": [ // How to rename it as 6line?
//     "33rd",
//     "28th",
//     "23rd",
//     "Union Square",
//     "Astor Place"
//   ]
// }; // End of Lines
//
//
//
// var array1 = mta["N"];
// console.log(array1);
// array1 = array1.reverse();
// console.log(array1);
// array1 = array1.join(', ');
// console.log(array1);
//
// console.log(`You must travel through the following stops on the N line: ${array1}`);
//
// console.log(`Change at Union Square`);
//
// console.log(`Your journey continues through the following stops: ${array1}`);

// function - take arguments of where I am now to where I want to be, run to show how to get from point A - B
// Ryan's example

// const mta = {
//   'N Line': [
//     'Times Square',
//     '34th',
//     '28th',
//     '23rd',
//     'Union Square',
//     '8th'
//   ],
//   'L Line': [
//     '8th',
//     '6th',
//     'Union Square',
//     '3rd',
//     '1st'
//   ],
//   '6 Line': [
//     'Grand Central',
//     '33rd',
//     '28th',
//     '23rd',
//     'Union Square',
//     'Astor Place'
//   ],
//   singleLineTrip: function(getOnLine, getOnStop, getOffLine, getOffStop){
//     const firstStop = mta[getOnLine].indexOf(getOnStop);
//     const secondStop = mta[getOffLine].indexOf(getOffStop);
//     if(firstStop < secondStop){
//       let route = mta[getOnLine].slice(firstStop + 1, secondStop);
//       console.log(`You must travel through the following stops on the ${getOnLine}: ${route}.`);
//     } else {
//         let reverseRoute = mta[getOnLine].reverse();
//         let route = reverseRoute.slice(firstStop + 1, secondStop);
//         console.log(`You must travel through the following stops on the ${getOnLine}: ${route}.`);
//       }
//   }, //end of singleLineTrip
// } //end of MTA
// mta.singleLineTrip('N Line', 'Times Square', 'N Line', '8th');
// mta.singleLineTrip('N Line', '8th', 'N Line', 'Times Square');
// Collapse


// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
// Your program should:
// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = {

  studentList: {
    'Ben': 4,
    'Chris': 10,
    'Luke': 7,
    'Simon': 5,
    'Ryan': 1
  },

  shortList: [],

  getStudentList: function(){
    this.shortList = []
    for(let key in this.studentList){
      console.log(this.studentList[key])
      if(this.studentList[key] > 2){
        this.shortList.push(key)
      }
    }

    return this.shortList.length;
  },

  draw: function(){
    let numberOfStudents = this.getStudentList();
    if(numberOfStudents > 0){
      let random = Math.floor(Math.random() * numberOfStudents)
      presenter = this.shortList[random]
      console.log(random)
    }
    console.log(`${presenter}`)

  }
}

revengeOfBadger.draw()
revengeOfBadger.draw()
