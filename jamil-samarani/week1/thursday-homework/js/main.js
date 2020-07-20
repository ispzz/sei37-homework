console.log('Thursday homework: geometry, cash, bank');
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
//





//console.log( "Geometry:" );

// const rectangle = {
//   length: 4,
//   width: 4
// };
//
// const isSquare = function(rect){
  /////////console.log(rect.length, rect.width)
//////  // if( rect.width === rect.length ){
//////  //   return true;
  ////////// } else {
  //////////   return false;
/////////  // }
//   return rect.width === rect.length;
// };
//
// const result = isSquare( rectangle );
// console.log(`Is the rectangle square? ${ result }`);

////////////isSquare ({length:7 , width:3}) - to call function in console




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




//
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

// Input

// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// const cashRegister = function( cart ){
//   let runningTotal = 0
//
//   /////////////////for..in
//   for( const key in cart ){
//     console.log( cart[key] );
//////////////////// runningTotal = runningTotal + parseFloat( cart[key] );
//     runningTotal += runningTotal + parseFloat(cart[key]);
//
//   }// for
//
//     console.log(runningTotal); // Print out the final running total
//
// }; ////////////// Cash Register
//
// ///////////////////Output
// cashRegister(cartForParty);







//  js-homework-bank.md
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

console.log('GA Bank!');


const bank = {

  accounts: [
    {name: 'Zara', balance: -253},
    {name: 'Jamil', balance: 3500},
    {name: 'Nemo', balance: 18974},
    {name: 'Luke', balance: 39652},
  ],

  deposit: function(accountName, amount ){
    console.log(`in bank.deposit(${ accountName }, ${amount})`);

    let foundAccount = false;
    //1. Find the account by name, i.e. loop through the this.accounts array
    // and check if any of the account object have the .name === accountName
    for( let i = 0; i < this.accounts.length; i++ ){
      const currentAccount = this.accounts[ i ];
      if( currentAccount.name === accountName ){
          // Found the account we want to deposit into!
          console.log('Found the account!', currentAccount);

          currentAccount.balance += amount;
          foundAccount = true;
          break;// Stop searching once match is Found
      }//if

    } //For

    if( foundAccount === false ){
      console.log(`no such account: ${accountName}`);
    }
  } //deposit

}; // bank
















// const accounts = [
//   {name: "Jamil", accountNum: "0001", currentBal: "1500"},
//   {name: "Luke", accountNum: "0002", currentBal: "2000"},
//   {name: "Nemo", accountNum: "0003", currentBal: "25"}
// ];
// const account = function(name, currentBal){
//
//   accounts.name = name;
//   accounts.balance = currentBal;
//
//   accounts.deposit = function (depositAmount) {
//     newBalance = accounts.balance - depositAmount;
//     console.log("Your account balance is now " + newBalance);
//
//   };
//
//   account.withdraw = function (withdrawAmount){
//     newBalance = accounts.balance - withdrawAmount;
//     console.log("Your account balance is now " + newBalance);
//
//     }
//
//   };

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
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
