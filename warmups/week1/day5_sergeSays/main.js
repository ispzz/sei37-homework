console.log("sergeSays")

// * Serge answers 'Sure.' if you ask him a question.

// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// * He says 'Fine. Be that way!' if you address him without actually saying anything.

// * He answers 'Whatever.' to anything else.

// * Create a function that takes an input and returns Serge's response.

const sergeSays = function(input) {
    if (input.endsWith("?")) {
        return 'Sure.';
    } else if (input === "") {
        return 'Fine. Be that way!';
    } else if (input === input.toUpperCase()) {
        return 'Woah, chill out';
    } else {
        return 'Whatever';
    }
}
console.log(sergeSays('What toothpaste do you use?'));
console.log(sergeSays('TOOTHPASTE'));
console.log(sergeSays(''));
console.log(sergeSays('I like cats'));