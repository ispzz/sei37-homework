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
  sideA: 6,
  sideB: 5,
  sideC: 10
};

const triangleCheck = {
  isEquilateral: function(side1, side2, side3) {
    if(triangleCheck.validTriangle(side1, side2, side3)) {
      if(side1 === side2 && side1 === side3){
        return true;
      } else {
        return false;
      }
    }
  },
  isIsosceles: function(side1, side2, side3) {
    if(triangleCheck.validTriangle(side1, side2, side3)) {
      if(side1 === side2 || side1 === side3 || side2 === side3){
        return true;
      } else {
        return false;
      }
    }
  },
  area: function(side1, side2, side3) {
    if(triangleCheck.validTriangle(side1, side2, side3)) {
        halfPerimiter = (side1 + side2 + side3)/2;
        return Math.sqrt(halfPerimiter*((halfPerimiter-side1)*(halfPerimiter-side2)*(halfPerimiter-side3)));
      }
  },
  isObtuse: function(side1, side2, side3) {
    if(triangleCheck.validTriangle(side1, side2, side3)) {
      const longSide = Math.max(side1, side2, side3);
      const shortSide = Math.min(side1, side2, side3);
      const medSide = side1 + side2 + side3 - longSide - shortSide;
      if (longSide**2 > (shortSide**2 + medSide**2)) {
        return true;
      }
      else {
        return false
      }
    }
  },
  validTriangle: function(side1, side2, side3) {
    let longSide = Math.max(side1, side2, side3);
    if(longSide >= (side1 + side2 + side3 - longSide)) {
      console.log('Triangle is invalid. Please ensure that a+b > c');
      return false;
  } else {
    return true;
  }
}
}

console.log(triangleCheck.isEquilateral(triangle.sideA ,triangle.sideB, triangle.sideC));
console.log(triangleCheck.isIsosceles(triangle.sideA ,triangle.sideB, triangle.sideC));
console.log(triangleCheck.area(triangle.sideA ,triangle.sideB, triangle.sideC));
console.log(triangleCheck.isObtuse(triangle.sideA ,triangle.sideB, triangle.sideC));


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
