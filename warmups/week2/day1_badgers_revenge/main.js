// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

// create revengeOfBadger object
const revengeOfBadger = {
    students: {
        Zara: 1,
        Luke: 3,
        Danny: 4,
        Ben: 1,
        Ryan: 0
    },
    shortlist: [],
    generateShortlist: function(){
        for( const key in this.students ){
            const numClaps = this.students[key];
            if( numClaps > 2 ){
                this.shortlist.push( key );
            }
        }
        // console.log(this.shortlist);
    },
    drawWinner: function(){
        this.shortlist = [],
        this.generateShortlist();
        if ( this.shortlist.length > 0 ){
            const randomIndex = Math.floor(Math.random() * this.shortlist.length);
            return this.shortlist[randomIndex];
        } else {
            return 'Badger';
        }
    }
}
console.log(revengeOfBadger.drawWinner());
// revengeOfBadger.generateShortlist();