// Exercises: For loops
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number
//  is even or odd, and report that to the screen (e.g. "2 is even").
//
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the
//  number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so
// your log should show "For 89, you got a B. For 90, you got an A.", etc.

// first problem

for(let i = 0; i <= 20; i++){
  if(i % 2 == 0)
  {
  console.log(`${i} is even`);
  }
  else
  {
    console.log(`${i} is odd`);
  }
}

//second problem

for( let i = 1; i <= 10; i++){
//let res = i * 9;
for(let j = 1; j <= 10; j++){
  console.log(`${i * j}`);
}
}

//third problem
