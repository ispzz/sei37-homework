console.log(`Hello, world!`);
console.log(' ');
console.log('Serge Says');

// Create a function so Sarge can respond!
// ## Examples
// - Serge answers 'Sure.' if you ask him a question.
// - He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// - He says 'Fine. Be that way!' if you address him without actually saying anything.
// - He answers 'Whatever.' to anything else.
// - Create a function that takes an input and returns Serge's response.

const sergeResponse = function(userInput){
  if(userInput.includes('?')){
    return 'Sure.';
  } if(userInput === userInput.toUpperCase()){
    return 'Woah, chill out!';
  } if(userInput === ''){
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }

}; //end of sergeResponse

sergeResponse('Do you wanna build a snowman?');
sergeResponse('WOAHHHH WERE HALFWAY THERE');
sergeResponse('');
sergeResponse('You should learn to code.');
