// # Warmup - Serge Says
// Create a function so Sarge can respond!
// ## Examples
// - Serge answers 'Sure.' if you ask him a question.
// - He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// - He says 'Fine. Be that way!' if you address him without actually saying anything.
// - He answers 'Whatever.' to anything else.
// - Create a function that takes an input and returns Serge's response.

const questionCheck = function(words) {
  if(words.endsWith("?")){
    return true;
  } else {
    return false;
  }
}; // questionCheck

const capsCheck = function(words) {
  if(words === words.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

// const capsCheck = function(words) {
//   let checkCount = 0;
//   for( let i = 0; i < words.length; i++ ){
//     if(words[i] === words[i].toUpperCase()){
//       checkCount += 1;
//     }
//   }
//   if(checkCount === words.length){
//     return true;
//   } else {
//     return false;
//   }
// }; // capsCheck

const emptyCheck = function(words) {
  if(words.length === 0){    // words === ""
    return true;
  } else {
    return false;
  }
}; // emptyCheck


const sergeSays = function(words) {
  let sergeResponse = "";
  if( questionCheck(words) ) {
    sergeResponse = "Sure.";
  } else if( emptyCheck(words) ) {
    sergeResponse = "Fine. Be that way!";
  } else if( capsCheck(words) ) {
    sergeResponse = "Woah, chill out!";
  } else {
    sergeResponse = "Whatever.";
  }
  return sergeResponse;
};

console.log(sergeSays("This is a question?"));
console.log(sergeSays("YELL AT YOU"));
console.log(sergeSays("YELL AT you"));
console.log(sergeSays(""));
console.log(sergeSays(" "));
console.log(sergeSays("Lalallala"));
