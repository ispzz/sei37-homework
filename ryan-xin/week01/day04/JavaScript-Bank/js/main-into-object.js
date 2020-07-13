// JavaScript Bank
let transferChecker = true;
const jsBank = {

  accounts: [
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
  ],

  // The bank needs a method that will return the total sum of money in the accounts.
  totalSum: function( ) {
    let totalBalance = 0;
    for( let i = 0; i < this.accounts.length; i++) {
      totalBalance += this.accounts[i].balance;
    }
    console.log(`The total sum of money in JavaScript Banks is $${totalBalance}.`)
    return totalBalance;
  }, // totalSum

  // Show all current accounts in the bank
  showAccounts: function( ) {
    for( let i = 0; i < this.accounts.length; i++) {
      const accountName = this.accounts[i].name;
      const accountBalance = this.accounts[i].balance;
      const accountResult = `Name: ${accountName}; Balance: $${accountBalance}.`
      console.log(accountResult);
    }
  }, //showAccounts

  //It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
  addAccount: function(name, balance) {
    for( let i = 0; i < this.accounts.length; i++ ) {
      if(this.accounts[i].name === name) {
        console.log(`This account has already exists!`);
        return this.accounts[i].name;
      }
    }
    const newAccount = { name: "", balance: 0};
    newAccount.name = name;
    newAccount.balance = balance;
    this.accounts.push(newAccount);
    this.showAccounts();
  }, // addAccount

  // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
  deposit: function(name, amount) {
    if(this.existingCheck(name)){
      for( let i = 0; i < this.accounts.length; i++ ) {
        if(this.accounts[i].name === name) {
          this.accounts[i].balance += amount;
          console.log(`Name: ${this.accounts[i].name}; Balance: $${this.accounts[i].balance}`);
          break;
        }
      }
    } else {
        console.log(`The account does not exist.`);
    }
  }, // deposit

  // Ensure that the accounts cannot have negative values.

  withdraw: function(name, amount) {
    if(this.existingCheck(name)){
      for( let i = 0; i < this.accounts.length; i++ ) {
        if(this.accounts[i].name === name) {
          if(this.accounts[i].balance - amount < 0){ // transfer cannot be completed if the balance less than 0
            console.log("You don't have enough money!");
            console.log(`Name: ${this.accounts[i].name}; Balance: $${this.accounts[i].balance}.`);
            transferChecker = false;
            return this.accounts[i].balance;
          } else {
            this.accounts[i].balance -= amount;
            console.log(`Name: ${this.accounts[i].name}; Balance: $${this.accounts[i].balance}.`);
            return this.accounts[i].balance;
          }
        }
      }
    } else {
        transferChecker = false;
        console.log(`The account does not exist.`);
    }
  }, // withdraw

  // Check account if exists
  existingCheck: function(name) {
    let checkCount = 0;
    for( let i = 0; i < this.accounts.length; i++ ) {
      if(this.accounts[i].name === name) {
        return true;
      } else {
        checkCount += 1;
      }
    }
    if(checkCount === this.accounts.length){
      return false;
    }
  },

  // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
  transfer: function(transferor, transferee, amount){
    if(this.existingCheck(transferor) && this.existingCheck(transferee)){
      this.withdraw(transferor, amount);
      if(transferChecker){
        this.deposit(transferee,amount);
      }
    } else {
      console.log(`The account does not exist. Please check again!`);
    }
  },// transfer
};


// transfer: function(transfer, receiver, amount) {
//   for( let j = 0; j < this.accounts.length; j++ ) {
//     if(this.accounts[j].name === transfer) {
//       this.accounts[j].balance -= amount;
//       if(this.accounts[j].balance < 0){
//         this.accounts[j].balance += amount;
//         console.log("You don't have enough money! Transfer cannot be completed.");
//         console.log(`Name: ${jsBank[j].name}; Balance: $${this.accounts[j].balance}.`);
//         return this.accounts[j].balance;
//       } else {
//         console.log(`Name: ${jsBank[j].name}; Balance: $${this.accounts[j].balance}.`);
//         deposit(receiver, amount);
//         return this.accounts[j].balance;
//       }
//     }
//   }
// },
