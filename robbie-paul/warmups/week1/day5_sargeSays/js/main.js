console.log("sergeSays or sargeSays?");

let isUpperCase = function(string) {

  if (string = )
}

const sergeSays = function(string) {
// * Serge answers 'Sure.' if you ask him a question.

  if (string.includes('?')) {
    console.log('Sure.');
  }

// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

  else if (isUpperCase(string)) {
    console.log('Woah, chill out!');
  }


// * He says 'Fine. Be that way!' if you address him without actually saying anything.

  else if

// * He answers 'Whatever.' to anything else.
  else {
    console.log('Whatever');
  }
}
// * Create a function that takes an input and returns Serge's response.





// SOLUTION

// can use .includes or .endsWith

const sergeSays = function(input) {
  if(input.endsWith"?"){
    return 'Sure.';
  } else if ( input === input.toUpperCase() ) {
    return 'Woah, chill out';
  } else if ( input === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever';
  }
}

console.log(sergeSays('What toothpaste do you use?'));
console.log(sergeSays('TOOTHPASTE'));
