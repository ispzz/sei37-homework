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
let arr
const splitSent = (sent) => {
  arr = sent.trim().split(" ");
  serge(arr);
}

const serge = (words) => {
  let ans;
  for (let i = 0; i < arr.length; i++) {
    if (words[i] === 'you')
    {
   ans = "Sure";
  }
  else if (words[i].toUpperCase())
  {
    console.log("Woah, chill out!");
  }
  else if (words[i] === ' ') {
    let ans = "Fine. Be that way!";
  }
  else {
let ans = 'Whatever.';
  }
  }
  console.log(ans);

}

splitSent("HEY");
