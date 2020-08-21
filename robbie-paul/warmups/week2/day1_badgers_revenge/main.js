// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.

// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.



// Your program should:

// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.


// 1. Check the number of times person has clappped

        // 4. If random picker doesn't find anyone with a clap amount/any claps, should console.log that Badger has to do own warmup

// 2. Store a separate list of people/keys from array who clapped more than twice, so check to see which people have clap amount higher than 2.
    // use .sliceOf to make new array with these amounts

// const revengeOfBadger = {

//     const clapCount = [
//         Robbie: 2,
//         Swaroop: 3,
//         Ben-L: 4,
//         Ben-P: 2,
//         Simon: 1,
//     ]

//     const fridayCandidates = function() {
//         if (this.clapCount.value > 2) {
//             fridayCandidates.student.sliceOf;
//         } else {
//             console.log('Badger has to do own warmup');
//         }
//     }

//     const randomPicker = function() {
//         this.fridayCandidates
//     }
// }


// 3. Randomly pick from the new array a person
//      use Math.random to find someone in the other array



// SOLUTION

// create revengeOfBadger object
const revengeOfBadger = {
    students: {
        Zara: 2,
        Luke: 1,
        Danny: 3,
        Ben: 2,
    }, //probably want an object for storing the student as a key and storing the value of clap count....

    // you need a nested object so that you can differentiate between them and the object...

    shortlist: [],
    generateShortlist: function() {
        for( const key in this.students ) {
            const numClaps = this.students[key];
            if[numClaps > 2){
                this.shortlist.push( key );
            }
        }
        console.log(this.shortlist);
    },
    drawWinner: function(){
        this.shortlist = [],
        this.generateShortlist();
        if (this.shortlist.length > 0){
            const randomIndex = Math.floor(Math.random() * this.shortlist.length);
            return this.shortlist[randomIndex];
        } else {
            return 'Badger';
        }
    }
}

console.log(revengeOfBadger.drawWinner());
// revengeOfBadger.generateShortlist();




