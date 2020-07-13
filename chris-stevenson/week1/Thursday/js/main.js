// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

console.log('Geometry Function Lab');
console.log('Part 1, Rectangle');

const rectangle = {
  length: 5,
  width: 4
};

const rectangleCheck = {
  isSquare: function(length, width) {
    if(length === width){
      return true;
    } else {
      return false;
    }
  },
  area: function(length, width) {
    return length * width;
  },
  perimeter: function(length, width) {
    return 2*(length + width);
  },
}

console.log(rectangleCheck.isSquare(rectangle.length, rectangle.width));
console.log(rectangleCheck.area(rectangle.length, rectangle.width));
console.log(rectangleCheck.perimeter(rectangle.length, rectangle.width));




// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

console.log('');
console.log('Part 2, Triangle');

const triangle = {
  sideA: 10,
  sideB: 10,
  sideC: 10
};

const triangleCheck = {
  isEquilateral: function(triangle) {
    if(triangleCheck.validTriangle(triangle)) {
      if(triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
        return true;
      } else {
        return false;
      }
    }
  },
  isIsosceles: function(triangle) {
    if(triangleCheck.validTriangle(triangle)) {
      if(triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC){
        return true;
      } else {
        return false;
      }
    }
  },
  area: function(triangle) {
    if(triangleCheck.validTriangle(triangle)) {
        halfPerimiter = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
        return Math.sqrt(halfPerimiter*((halfPerimiter-triangle.sideA)*(halfPerimiter-triangle.sideB)*(halfPerimiter-triangle.sideC)));
      }
  },
  isObtuse: function(triangle) {
    if(triangleCheck.validTriangle(triangle)) {
      const longSide = Math.max(triangle.sideA, triangle.sideB, triangle.sideC);
      const shortSide = Math.min(triangle.sideA, triangle.sideB, triangle.sideC);
      const medSide = triangle.sideA + triangle.sideB + triangle.sideC - longSide - shortSide;
      if (longSide**2 > (shortSide**2 + medSide**2)) {
        return true;
      }
      else {
        return false
      }
    }
  },
  validTriangle: function(triangle) {
    let longSide = Math.max(triangle.sideA, triangle.sideB, triangle.sideC);
    if(longSide >= (triangle.sideA + triangle.sideB + triangle.sideC - longSide)) {
      console.log('Triangle is invalid. Please ensure that a+b > c');
      return false;
  } else {
    return true;
  }
}
}

console.log(triangleCheck.isEquilateral(triangle));
console.log(triangleCheck.isIsosceles(triangle));
console.log(triangleCheck.area(triangle));
console.log(triangleCheck.isObtuse(triangle));


//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty); // 60.55
//  js-homework-bank.md
console.log('');
console.log('The Cash Register');

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  let totalCost = 0;
  for(const items in cart) {
    totalCost += parseFloat(cart[items]);
  }
  return totalCost;
};

console.log(cashRegister(cartForParty));

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

console.log('');
console.log('JavaScript Bank');

const bank = {
  accounts: [
    {name: 'Chris', balance: 30}
  ],
  addAccount: function(inputName, inputBalance) {
    bank.accounts.push({
      name: inputName,
      balance: inputBalance
    });
  },//addAccount
  deposit: function(inputName, inputBalance) {
    for(const names in bank.accounts) {
      if(bank.accounts[names].name === inputName) {
        bank.accounts[names].balance += inputBalance;
        console.log(`You just deposited $${inputBalance}. ${inputName}'s new account balance is $${bank.accounts[names].balance}`);
        break;
      }
    }
  },//deposit
  withdraw: function(inputName, inputBalance) {
    for(const names in bank.accounts) {
      if(bank.accounts[names].name === inputName) {
        if(inputBalance > bank.accounts[names].balance){
          console.log(`Your account currently only holds $${bank.accounts[names].balance} so you cannot withdraw your requested amount.`);
        } else{
          bank.accounts[names].balance -= inputBalance;
          console.log(`You just withdrew $${inputBalance}. ${inputName}'s new account balance is $${bank.accounts[names].balance}`);
          break;
        }
      }
    }
  },//withdraw
  transfer: function(inputName1, inputName2, inputBalance) {
    let personOneBalance = 0;
    let personTwoBalance = 0;
    for(const names in bank.accounts) {
      if(bank.accounts[names].name === inputName1) {
        if(inputBalance > bank.accounts[names].balance){
          console.log(`${inputName1}'s account currently only holds $${bank.accounts[names].balance} so you cannot withdraw the requested amount.`);
          break;
        } else{
          bank.accounts[names].balance -= inputBalance;
          personOneBalance = bank.accounts[names].balance;
          break;
        }
      }
    }//for
    for(const names in bank.accounts) {
      if(bank.accounts[names].name === inputName2) {
          bank.accounts[names].balance += inputBalance;
          personTwoBalance = bank.accounts[names].balance;
          console.log(`You have just transferred $${inputBalance} from ${inputName1}'s account to ${inputName2}'s account`);
          console.log(`${inputName1}'s account balance is now $${personOneBalance}`);
          console.log(`${inputName2}'s account balance is now $${personTwoBalance}`);
          break;
      }
    }//for
  }//transfer
};

console.log(bank.accounts);
bank.addAccount('Todd', 400);
console.log(bank.accounts);
bank.deposit('Chris', 46);
bank.withdraw('Todd', 100);
bank.transfer('Chris', 'Todd', 20);


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

console.log('');
console.log('Validate Credit Card');

const validateCreditCard = function(ccNumber){
  //Turn the CC Number into an array
  let ccArray = ccNumber.toString().split('')
  //remove any dashes
  for (let i = 0; i < ccArray.length; i++) {
    if(ccArray[i] === '-'){
      ccArray.splice(i, 1);
    }
  }
  //redefine the CC number with dashes removed
  ccNumber = ccArray.join('');
  //redefine the ccArray with dashes removed
  ccArray = ccNumber.split('');
  //Loop to turn each number inside the array to an integer
  for (let i = 0; i < ccArray.length; i++) {
    ccArray[i] = parseInt(ccArray[i]);
  }
  //Create errorMessage object which will diagnose errors and serve as final validation
  const finalMessage = {errors: []};
  //Start to check conditions
  //Check that the credit card length is 16 digits
  if(ccArray.length != 16) {
    finalMessage.errors.push({error: 'The Credit Card number must be exactly 16 digits.'});
  }
  //Check if each digit of the credit card is the same
  let sameTally = 0;
  for (let i = 0; i < ccArray.length; i++) {
    if(ccArray[0] === ccArray[i]) {
      sameTally += 1;
    }
    if(sameTally === ccArray.length) {
      finalMessage.errors.push({error: 'The Credit Card cannot be entirely the same number.'});
    }
  }
  //Check if final digit is an even number
  if(ccArray[ccArray.length - 1] % 2 != 0){
    finalMessage.errors.push({error: 'The Credit Card number must end in an even number.'});
  }
  //Check that sum of all digits is greater than 16
  const sumArray = function(array){
    return array.reduce((a, b) => a + b);
  };
  if(sumArray(ccArray) <= 16) {
    finalMessage.errors.push({error: 'The sum of all digits in the Credit Card number must be greater than 16.'});
  }
  //Check for invalid characters
  for (let i = 0; i < ccArray.length; i++) {
    if(Number.isInteger(ccArray[i]) === false){
      finalMessage.errors.push({error: 'The input Credit Card number contains illegal characters.'});
      break;
    }
  }
  //Check to see if we have any errors, if not then print that the card is valid
  if(finalMessage.errors.length === 0) {
    console.log(`You have a valid Credit Card number of ${ccNumber}.`);
    return true;
  } else {
    console.log(`There is at least one error with your credit card number ${ccNumber}:\n`);
    console.log(finalMessage);
    return false;
  }
  // if(ccNumber.toString().length === 16 && Number.isInteger(ccNumber) && ){
  //
  // } else {
  // }
}

validateCreditCard(1234567890123456); //Correct CC Number
validateCreditCard('123456789f123456'); //incorrect character in middle
validateCreditCard(123456789012345); //Only 15 Didgets
validateCreditCard(1111111111111111); //All number one
validateCreditCard(11111111111111); //All number one
validateCreditCard('9999-9999-8888-0000'); //Should be valid
validateCreditCard('a923-3211-9c01-1112'); //Invalid characters
