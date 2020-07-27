
const anagramObject = {
  myArray: ["enlists", "google", "inlets", "banana"],

  checkForAnagram: function(myWord, array) {
    const myWordArray = myWord.split('');
    let counter = 0;
    for (var i = 0; i < array.length; i++) {
      let checkedWord = array[i];
      for (var j = 0; j < myWordArray.length; j++) {
        if(checkedWord.includes(myWordArray[j].toString())) {
          counter++;
        }
      }
      if(counter === myWordArray.length){
        return myWord;
      } else {
        counter = 0;
      }
    }
    return 'Your word does not exist (even as an anagram) in this list';
  },
}
