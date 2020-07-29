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
const askSerge = function( sentance ) {
  if ( sentance.charAt( (sentance.length)-1 ) === '?' ) {  //if asking a question
    return 'Sure';
  } // end if asking a question

  const noSpaces = sentance.replace(/ /g,'');   // remove all the spaces from the string
  if ( noSpaces.length === 0) {
    return 'Fine. Be that way!';
  }

   if (sentance.toUpperCase() === sentance) {
     return 'Woah, chill out!';
   }

   return 'Whatever.';

}; // end askSerg

askSerge('Dude!! Should I have another coffee?');
