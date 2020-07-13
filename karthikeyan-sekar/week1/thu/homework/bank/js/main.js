/* JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities
that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of
 money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the
  array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change
the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions
console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as
expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional
Begin exploring the JavaScript Koans. Fork, clone and start trying them. */

const bank = [
  {
    accountNumber : 1000,
    name: 'Ajith',
    currentBalance: 100
  },
  {
    accountNumber : 1001,
    name: 'Jacob',
    currentBalance: 100
  },
  {
    accountNumber : 1002,
    name: 'stephen',
    currentBalance: 100
  },
  {
    accountNumber : 1003,
    name: 'Jerry',
    currentBalance: 100
  },
  {
    accountNumber : 1004,
    name: 'Cena',
    currentBalance: 100
  }
];

const totalSum = () => {
  let sum = 0;
  for (let i = 0; i < bank.length; i++)
  {
    sum = sum + bank[i].currentBalance;
  }
  console.log(sum);

};

const newAccount = (acc, nam, bal) => {
  bank.push({accountNumber : acc, name : nam, currentBalance : bal});
};

const withdraw = (no, amt) => {
  for (let i = 0; i < bank.length; i++)
  {
    if(no == bank[i].accountNumber)
    {
      if ((bank[i].currentBalance - amt) < 0)
      {
        console.log(`You have insufficient balance with ${bank[i].currentBalance}`);
      }
      else {
        bank[i].currentBalance = bank[i].currentBalance - amt;
        console.log(`Hey ${bank[i].name} !! your current balance : ${bank[i].currentBalance}`);
      }

  }
  }
};

const deposit = (no, amt) => {
  for (let i = 0; i < bank.length; i++)
  {
    if(no == bank[i].accountNumber)
    {
    bank[i].currentBalance= bank[i].currentBalance + amt;
    console.log(`Hey ${bank[i].name} !! your current balance : ${bank[i].currentBalance}`);
  }
  }
};

const trf = (acc1, acc2, amt) => {
  for (let i = 0; i < bank.length; i++)
  {
    if(acc1 == bank[i].accountNumber)
    {
      if ((bank[i].currentBalance - amt) > 0)
      {
        bank[i].currentBalance = bank[i].currentBalance - amt;

        console.log(`Your account have been debited with ${amt} and current balance is ${bank[i].currentBalance}`);
      }
      else {
        console.log(`Hey ${bank[i].name} !! you have insufficient money with current balance : ${bank[i].currentBalance}`);
        break;
      }

  }
  if(acc2 == bank[i].accountNumber)
  {
    bank[i].currentBalance= bank[i].currentBalance + amt;

  }

  }
}
//if(bank[i].accountNumber == accnum)
//{

newAccount(1005, 'nelson', 1000);
totalSum();
withdraw(1004, 150);
deposit(1005, 100);

console.log(bank);
totalSum();
trf(1002,1003,50);
