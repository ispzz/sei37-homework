console.log(`Hello, world!`);
console.log(' ');
console.log(`Badger's Revenge`);

// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

// const revengeOfBadger = {
//
//   clapCount: [
//       {name: 'Danny', claps: 4},
//       {name: 'Luke', claps: 6},
//       {name: 'Zara', claps: 2},
//       {name: 'Chris', claps: 1},
//       {name: 'Simon', claps: 7},
//   ],
//
//   fridayDraw: function(){
//     for(let i = 0; i < revengeOfBadger.clapCount.length; i++) {
//       if(revengeOfBadger.clapCount[i].claps > 2){
//         let demoCandidates = revengeOfBadger.clapCount.filter()
//       }
//     }; //end of for loop
//
//   // loop through revengeOfBadger.clapCount array
//   // if revengeOfBadger.clapCount[i].claps > 2, create new array with these key/values
//   // Math.random
//
//   }, //end of fridayDraw
//
// } //end of revengeOfBadger

const revengeOfBadger = {

  students: {
    Zara: 5,
    Luke: 1,
    Danny: 3,
    Ben: 2,
    Ryan: 0
  },

  shortlist: [],

  generateShortlist: function(){
    for(const key in this.students){
      const numberOfClaps = this.students[key];
      if(numberOfClaps > 2){
        this.shortlist.push(key);
      }
    }
    // console.log(this.shortlist);
  },

  drawWinner: function(){
    this.shortlist = [],
    this.generateShortlist();
    if(this.shortlist.length > 0){
      const randomIndex = Math.floor(Math.random() * this.shortlist.length);
      return this.shortlist[randomIndex];
    } else {
      return 'Badger';
    }
  }

}
