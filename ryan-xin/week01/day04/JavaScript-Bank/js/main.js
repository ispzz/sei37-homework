// JavaScript Bank
const jsBank = [
  {
    name: "Ryan",
    balance: 1000
  },
  {
    name: "Peter",
    balance: 2000
  },
  {
    name: "David",
    balance: 3000
  },
  {
    name: "Tony",
    balance: 4000
  },
];

// The bank needs a method that will return the total sum of money in the accounts.
const totalSum = function( ) {
  let totalBalance = 0;
  for( let i = 0; i < jsBank.length; i++) {
    totalBalance += jsBank[i].balance;
  }
  console.log(`The total sum of money in JavaScript Banks is $${totalBalance}.`)
  return totalBalance;
}; // totalSum

// Show all current accounts in the bank
const showAccounts = function( ) {
  for( let i = 0; i < jsBank.length; i++) {
    const accountName = jsBank[i].name;
    const accountBalance = jsBank[i].balance;
    const accountResult = `Name: ${accountName}; Balance: $${accountBalance}.`
    console.log(accountResult);
  }
}; //showAccounts

//It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
const addAccount = function(name, balance) {
  const newAccount = { name: "", balance: 0};
  newAccount.name = name;
  newAccount.balance = balance;
  jsBank.push(newAccount);
  showAccounts();
}; // addAccount

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
const deposit = function(name, amount) {
  for( let i = 0; i < jsBank.length; i++ ) {
    if(jsBank[i].name === name) {
      jsBank[i].balance += amount;
      console.log(`Name: ${jsBank[i].name}; Balance: $${jsBank[i].balance}.`);
      return jsBank[i].balance;
    }
  }
}; // deposit

// Ensure that the accounts cannot have negative values.
const withdraw = function(name, amount) {
  for( let i = 0; i < jsBank.length; i++ ) {
    if(jsBank[i].name === name) {
      jsBank[i].balance -= amount;
      if(jsBank[i].balance < 0){ // transfer cannot be completed if the balance less than 0
        jsBank[i].balance += amount; // add the amount back
        console.log("You don't have enough money!");
        console.log(`Name: ${jsBank[i].name}; Balance: $${jsBank[i].balance}.`);
        return jsBank[i].balance;
      } else {
        console.log(`Name: ${jsBank[i].name}; Balance: $${jsBank[i].balance}.`);
        return jsBank[i].balance;
      }
    }
  }
}; // withdraw


// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
const transfer = function(transfer, receiver, amount) {
  for( let j = 0; j < jsBank.length; j++ ) {
    if(jsBank[j].name === transfer) {
      jsBank[j].balance -= amount;
      if(jsBank[j].balance < 0){
        jsBank[j].balance += amount;
        console.log("You don't have enough money! Transfer cannot be completed.");
        console.log(`Name: ${jsBank[j].name}; Balance: $${jsBank[j].balance}.`);
        return jsBank[j].balance;
      } else {
        console.log(`Name: ${jsBank[j].name}; Balance: $${jsBank[j].balance}.`);
        deposit(receiver, amount);
        return jsBank[j].balance;
      }
    }
  }
}; // transfer


// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// Tips
// Don't overthink this. Shorter code is probably the answer.
