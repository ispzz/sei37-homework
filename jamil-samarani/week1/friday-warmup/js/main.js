console.log("Hello World!");

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


console.log("sergeSays")

const sergeSays = function (input){
  if (input[input.length - 1] === "?") { //can also use if (inout.endsWith("?"))
    return "Sure.";
}else if (input === "") {
    return "Fine. Be that way!";
}else if (input === input.toUpperCase()) {
    return "Whoa, chill out!";
  }else {
    return "Whatever";
}};

console.log(sergeSays('What toothpaste do you use?'));
console.log(sergeSays("SHUT UP"));
console.log(sergeSays(""));
console.log(sergeSays("bacon and eggs"));
