// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle

 const rectangle = {
   length: 4,
   width: 10
 };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const isSquare = function ( rect ) {
  if (rect.length === rect.width) {
      return true;
  } else {
    return false;
  }
}

const areaQuad = function( rect ) {
  return rect.length * rect.width;
}

const perimeter = function( rect ) {
  return (rect.length * 2 + rect.length * 2);
}

// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
const triangle = {
  sideA: 1,
  sideB: 10,
  sideC: 10
};
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
//

const isEquilateral = function( tri ) {
    if ( tri.sideA === tri.sideB  &&  tri.sideB === tri.sideC ) {
      return true;
    } else {
      return false;
    }
};

const isIsosceles = function( tri ) {
    if ( tri.sideA === tri.sideB  ||  tri.sideB === tri.sideC  ||  tri.sideC === tri.sideA ) {
      return true;
    } else {
      return false;
    }

};

const areaTri = function( tri ) {
    const s = (tri.sideA + tri.sideB + tri.sideC)/2;
    const theArea = Math.sqrt(s * ((s-tri.sideA) * (s-tri.sideB) * (s-tri.sideC)));
    return theArea;
};

const isObtuse = function( tri ) {
  let longestSide = tri.sideA;                // establishes a current order to challange.
  let secondSide = tri.sideB;
  let thirdSide = tri.sideC;

  if ( secondSide > longestSide ) {             // if statements to establish and order the sides to find the longest side.
    longestSide = tri.sideB;
    secondSide = tri.sideA;
    if ( thirdSide > longestSide ) {
        longestSide = tri.sideC;
        thridSide = tri.sideB;
    }
  } else if (thirdSide > longestSide){
      longestSide = tri.sideC;
      thirdSide = tri.sideA;
  } // end if statements of sorting longest sides.

  if (Math.pow(longestSide,2) > (Math.pow(secondSide,2) + Math.pow(thirdSide,2))) {           //formula to determine if it's Obtuse
    return true;
  } else {
    return false;
  }
};

//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//
// // Output
// cashRegister(cartForParty); // 60.55

const cashRegister = function (cart) {
  const pricesToSum = Object.values(cart);
  let totalValue = 0;

  for (i=0; i < pricesToSum.length; i++) {
    totalValue = totalValue + Number(pricesToSum[i]);
  }
  return totalValue;
}



//  js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
const aBank = [
  {accountName: 'Joe Jackson', currentBalance: 1000000},
  {accountName: 'Elon Musk', currentBalance: 50},
  {accountName: 'Michael Jordan', currentBalance: 23000}
];

const bankTotalBalance = function( bank ) {  // returns the total balance of the bank.
  let total = 0;
  for ( i=0; i<bank.length; i++ ) {            //iterate the bank
    total = total + bank[i].currentBalance;
  }
  return total;
} //bankTotalBalance

const addAccount = function( newName ) {      // creates a new account of name with a zero balance and adds it to the bank array.
  for ( let i=0; i<aBank.length; i++ ) {
    if ( aBank[i].accountName === newName ) {     // check if that account name already exists
      console.log(`     Sorry... The account name ${newName}, already exists..`);
      break;
    } else {
      const newAccount = {  //declare an account object
      accountName: newName,
      currentBalance: 0
      }; // declared the account object
      aBank.push(newAccount);
      console.log(`     Sucsess!!!! You have created an account, ${newName}.`)
      break;
    }
  } //end for loop
};  //addAccount

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
const deposit = function( accName, depositAmount ) {      //make a deposit to aBank
  for ( i=0; i<aBank.length; i++ ) {
    if ( aBank[i].accountName === accName ) {     // check that the account of that name exists
      aBank[i].currentBalance = aBank[i].currentBalance + depositAmount;      //add the deposited value to currentBalance
      console.log(`     Deposit sucessful... Your current balance is $${aBank[i].currentBalance}`)
      break;
    }
  }
  if ( i==aBank.length ){    //if 'i' from the for loop reaches the length the details entered do not match existing customer
    console.log(`     Sorry.... We don't have a customer with those details  !!!`);
  }
}; // end deposit.

const withdraw = function( accName, withdrawalAmount ) {
  for ( i=0; i < aBank.length; i++ ) {
  if ( aBank[i].accountName === accName ) {     // check that the account of that name exists
    if ( aBank[i].currentBalance - withdrawalAmount < 0 ) {   //check that the withdrawal won't place the balance below zero.
      console.log(`     Sorry...   Insufficient balance of $${aBank[i].currentBalance}.....  Select a smaller amount`);
      break;
    } else {
      aBank[i].currentBalance = aBank[i].currentBalance - withdrawalAmount;      //add the deposited value to currentBalance
      console.log(`     Withdrawal sucessful... Your current balance is $${aBank[i].currentBalance}`)
      break;
      }
    }
  }
  if ( i==aBank.length ){    //if 'i' from the for loop reaches the length the details entered do not match existing customer
    console.log(`     !!!  Sorry.... Invalid customer details  !!!`);
  }
}; // ends withdraw

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
console.log(`Adding an account "Heston Blumenthal". `);
addAccount('Heston Blumenthal');

console.log(`Depositing $300 into Heston's account `);
deposit('Heston Blumenthal',300);

console.log(`Depositing $700 into Heston's account `);
deposit('Heston Blumenthal',700);

console.log(`Depositing $300 into "Heston Blu" account. This tests writing an account that does not exist `);
deposit('Heston Blu',700);

console.log(`Withdraw $700 from Heston's account.`);
withdraw('Heston Blumenthal',700);

console.log(`Withdrawing a furthur $700 will place Heston's account into the negative`);
withdraw('Heston Blumenthal',700);

console.log(`calling "bankTotalBalance(aBank)" returns a value of $${bankTotalBalance(aBank)}`);


// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
//
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
const validateCreditCard = function( cardNumber ) {
  if ( correctDigits (cardNumber) ) {
    return true;
  } else {
    return false;
  }

}; // end validateCreditCard

const correctDigits = function( cardNumber ) {
  let compressedNumbers = cardNumber;
  for ( i=1; i<4; i++) {         // loop through 3 times to remove the - between numbers
    compressedNumbers = compressedNumbers.replace( '-', '' );
  };
  if ( compressedNumbers.length === 16 ) {
    return true;
  } else {
    return false;
  }
}; // end correctDigits

const isTwoDiffDigits = function( cardNumber ) {
  for ( i=1; i < 19; i++ ) {      //iterates through a valid length number, 19 including the -s. But if included a +1.
      if ( cardNumber.charAt(i) != cardNumber.charAt(i+1) ) {
        return true;
      }
  } // end for loop
    return false;
}; // end isTwoDiffDigits

validateCreditCard('9999-9999-8888-0000');


//correctDigits('9999-9999-8888-0000-1323');

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
