// ## Warmup - Raindrops
// ​
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
// ​
// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// ​
// ### Examples
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

console.log('Hello, world!');
console.log(' ');

const raindrops = function(number){
  if(number % 3 === 0 && number % 5 === 0 && number % 7 === 0){
    return 'PlingPlangPlong';
  } else if(number % 3 === 0 && number % 5 === 0){
      return 'PlingPlang';
  } else if(number % 3 === 0 && number % 7 === 0){
      return 'PlingPlong';
  } else if(number % 5 === 0 && number % 7 === 0){
      return 'PlangPlong';
  } else if(number % 3 === 0){
      return 'Pling';
  } else if(number % 5 === 0){
      return 'Plang';
  } else if(number % 7 === 0){
      return 'Plong';
  } else {
      return `${number} has neither 3, 5 nor 7 as a factor.`;
  }
}


console.log(`${raindrops(3)}`);
console.log(`${raindrops(20)}`);
console.log(`${raindrops(28)}`);
console.log(`${raindrops(15)}`);
console.log(`${raindrops(21)}`);
console.log(`${raindrops(35)}`);
console.log(`${raindrops(105)}`);
console.log(`${raindrops(2)}`);
