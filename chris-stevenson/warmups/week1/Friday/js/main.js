// Warmup - Serge Says
// Create a function so Sarge can respond!
//
// Examples
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const sargeRespond = function(string) {
  if(string.endsWith('?')){
    return 'Sure.';
  } else if (string === string.toUpperCase() && string != '') {
    return 'Woah, chill out!';
  } else if(string === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

console.log(sargeRespond('Asking sarge a question?'));
console.log(sargeRespond('YELLING AT SARGE'));
console.log(sargeRespond(''));
console.log(sargeRespond('Anything else'));
