console.log("Badger's Revenge");

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
    for( const key in this.students ){
      const numClaps = this.students[key];
      if ( numClaps > 2) {
        this.shortlist.push( key );

      } //if
    }//For
  },//Function
  drawWinner: function(){
    this.shortlist = [],
    this.generateShortlist();
    if ( this.shortlist.length > 0 ){
      const randomIndex = Math.floor(Math.random() * this.shortlist.length);
      return this.shortlist[randomIndex];

    } else {
      return 'Badger' ;

    }//else
  }//function
console.log(revengeOfBadger.drawWinner());
