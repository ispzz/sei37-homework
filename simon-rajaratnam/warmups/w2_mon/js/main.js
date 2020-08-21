// Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = {   //object tracking the number of claps for each student
    'Nemo' : 2,
    'Ben' : 1,
    'Simon' : 5,
    'Chris' : 4,
    'Danny' : 20
};

const badgerStrikes = function(claps) {
  const candidates = [];    // candidates for Friday's draw.

    for (let key in claps) {

      if (claps[key] >2) {    // if the number of claps for the student is > 2
        candidates.push(key);  // add the student name to the array
      } // end if
    } // end for

      const chosenStudent = candidates[Math.floor(Math.random()*candidates.length)];
      return chosenStudent;
}

console.log(`Chosen student is ${badgerStrikes(revengeOfBadger)}`)
