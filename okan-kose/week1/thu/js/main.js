
console.log('Yo!')

//Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example


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
// // Output
// cashRegister(cartForParty); // 60.55
// //
//
//
//



// JavaScript Bank
//
//
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

const bank = {
  account: [
    {name: 'Mike', balance: 100},
    {name: 'Moulu', balance: 1000},
    {name: 'Jui', balance: 500},
    {name: 'Kui', balance: 700},
  ]
};


const account = function(name, balance){

  this.name = name;
  this.balance = balance;

  account.deposit = function(depositAmount) {
    newBalance = account.balance + depositAmount;
    console.log(`Your balance is now ${newBalance}`);
    if (newBalance <= 0 ) {
      console.log('You have insufficient funds!');
    }
  }

  account.withdraw = function(withdrawAmount){
  newBalance = account.balance - withdrawAmount;
    console.log(`Your balance is now ${newBalance}`);
    if (newBalance <= 0) {
      console.log(`You have insufficient funds!`);
    }
}
};

    // console.log(`Name ${name} ; Balance ${balance}`);






//need totalSum of money in the accounts.
//needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.





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
// Begin exploring the JavaScript Koans. Fork, clone and start trying thes
