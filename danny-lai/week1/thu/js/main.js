
console.log('Hello, world!');
console.log(' ');

// Given a rectangle object like the one below, write the following functions:

const rectangle = {
  length: 4,
  width: 4
};

const rectangle2 = {
  length: 4,
  width: 3
};

// isSquare(rect) - Returns whether the rectangle is a square or not

const isSquare = function(object){
  return(object.length === object.width)
}

isSquare(rectangle);
isSquare(rectangle2);

// area(rect) - Returns the area of the rectangle

const rectangleArea = function(object){
  return object.length * object.width;
}

rectangleArea(rectangle);
rectangleArea(rectangle2);

// perimeter(rect) - Returns the perimeter of the rectangle

const rectanglePerimeter = function(object){
  return object.length + object.width;
}

rectanglePerimeter(rectangle);
rectanglePerimeter(rectangle2);

// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
// Given a triangle object like the one below, write the following functions:

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangle2 = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};

// isEquilateral(tri) - Returns whether the triangle is equilateral or not

const isEquilateral = function(object){
  return(object.sideA === object.sideB && object.sideB === object.sideC)
}

isEquilateral(triangle);
isEquilateral(triangle2);

// isIsosceles(tri) - Returns whether the triangle is isosceles or not

const isIsosceles = function(object){
  return(object.sideA === object.sideB || object.sideA === object.sideC || object.sideB === object.sideC)
}

// area(tri) - Returns the area of the Triangle

const triangleArea = function(object){
  let semiPerimeter = (object.sideA + object.sideB + object.sideC) / 2;
  return Math.sqrt(semiPerimeter * (semiPerimeter - object.sideA) * (semiPerimeter - object.sideB) * (semiPerimeter - object.sideC))
}

triangleArea(triangle);
triangleArea(triangle2);

// isObtuse(tri) - Returns whether the triangle is obtuse or not

console.log('The Cash Register');
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

const cashRegister = function(cart){
  let totalPrice = 0;
  for(const key in cartForParty){
    totalPrice += parseFloat(cartForParty[key]);
  }
  return balance;
}

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// cashRegister(cartForParty); // 60.55

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

console.log('JavaScript Bank');

const bank = {

  accounts: [
    {name: 'Danny', balance: 50},
    {name: 'Luke', balance: 100},
    {name: 'Zara', balance: 150},
    {name: 'Ruby', balance: 1000}
  ],

  totalBankBalance: function(){ //bank.accounts[0].balance + bank.accounts[1].balance + bank.accounts[2].balance...
    let bankBalance = 0;
    for(let i = 0; i < bank.accounts.length; i++){
      bankBalance += bank.accounts[i].balance
    }
  return bankBalance;
  }, //end of totalBankBalance

  addAccount: function(accountName, amount){ //add accountName and amount to bank.accounts, need to add new object to the accounts array
    bank.accounts.push({name: accountName, balance: parseFloat(amount)});
  },

  deposit: function(accountName, amount){
    for(let i = 0; i < bank.accounts.length; i++){
      if(accountName === bank.accounts[i].name){
        bank.accounts[i].balance += amount
      }
    }
  },

  withdraw: function(accountName, amount){
    for(let i = 0; i < bank.accounts.length; i++){
      if(accountName === bank.accounts[i].name){
        bank.accounts[i].balance -= amount
      }
    }
  },


}//end of bank
