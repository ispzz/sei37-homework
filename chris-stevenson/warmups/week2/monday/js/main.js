// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
// Your program should:
// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = {
  classClaps: {
    'Chris': 3,
    'Zara': 1,
    'Luke': 4
  },

  checkClaps: function() {
    const goodClappers = [];
    for (let names in this.classClaps) {
      if (this.classClaps[names] > 2) {
        goodClappers.push(names);
      }
    }//for loop
    return goodClappers;
  },//CheckClaps function

  deliverWarmup: function() {
    const goodClappers = this.checkClaps();
    if(goodClappers.length > 0) {
      const selector = Math.floor(Math.random()*goodClappers.length);
      return `${goodClappers[selector]} will be delivering Friday's warmup!`;
    } else {
      return `Badger must deliver his own warmup.`;
    }
  },
};

console.log(revengeOfBadger.classClaps);
console.log(revengeOfBadger.checkClaps());
console.log(revengeOfBadger.deliverWarmup());
