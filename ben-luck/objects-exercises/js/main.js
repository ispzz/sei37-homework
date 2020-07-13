
console.log(`Object exercises`);

// The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


var bookList = [
{title: "To kill a mockingbird", author: "Luke Hammer", alreadyRead: true},
{title: "Harry Potter", author: "Stevo", alreadyRead: false},
{title: "Doco", author: "Ben Luck", alreadyRead: true}
];
for (var i = 0; i < bookList.length; i++){
  // var update = bookList[i];
  // console.log(update.title, `by`, update.author);

  if(bookList [i].alreadyRead){
  console.log(`You have already read ${bookList[i].title} by ${bookList[i].author}`);
} else {
  console.log(`You need to read ${bookList[i].title} by ${bookList[i].author}`);
}
}

// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipeCard = {
  title: 'Lasagna',
  servings: 5,
  ingredients: [
    "Pasta sheets",
    "Cream",
    "Beef mince"
  ]
};

console.log(recipeCard.title);
console.log(`Serves ${recipeCard.servings}`);
console.log('Ingredients:');
console.log(recipeCard.ingredients[0]);
console.log(recipeCard.ingredients[1]);
console.log(recipeCard.ingredients[2]);

//console.log(recipe.ingredients.join('\n'));

// The Movie Database
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here

const favouriteMovie = {
  title: 'Inherent Vice',
  duration: 120,
  stars: ['Joaquim Phoenix', 'Josh Brolin', 'Reese Witherspoon']
};

const printMovie = function( movie ){
  console.log(`${ movie.title } lasts for ${ movie.duration } minutes. Stars: ${ movie.stars.join(', ') }.`);
};

// Homework
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

console.log('Rectangle');

const rectangle = {
  length: 4,
  width: 4
};

const rectangleLab = {
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

console.log(rectangleLab.isSquare(rectangle.length, rectangle.width));
console.log(rectangleLab.area(rectangle.length, rectangle.width));
console.log(rectangleLab.perimeter(rectangle.length, rectangle.width));


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


console.log('Triangle');

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


const triangleLab = {
  isEquilateral: function(side1, side2, side3) {
      if(side1 === side2 && side1 === side3){
        return true;
      } else {
        return false;
      }
    },
  isIsosceles: function(side1, side2, side3) {
      if(side1 === side2 || side1 === side3 || side2 === side3){
        return true;
      } else {
        return false;
      }
    }
  }

console.log(triangleLab.isEquilateral(triangle.sideA ,triangle.sideB, triangle.sideC));
console.log(triangleLab.isIsosceles(triangle.sideA ,triangle.sideB, triangle.sideC));

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

// Chris' return

// console.log('The Cash Register');
//
// var cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// const cashRegister = function(cart) {
//   let totalCost = 0;
//   for(const i in cart) {
//     totalCost += parseFloat(cart[i]); // parseFloat returns numerical values, returns Nan for characters
//   }
//   return totalCost;
// };
//
// console.log(cashRegister(cartForParty));

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

console.log('JavaScript Bank');



const bank = {
  accounts: [
    {name: 'Ben', balance: 1000000}
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
        console.log(`You  deposited $${inputBalance} into ${inputName}. ${inputName}'s new account balance is $${bank.accounts[names].balance}`);
      }
    }
  },//deposit
  withdraw: function(inputName, inputBalance) {
    for(const names in bank.accounts) {
      if(bank.accounts[names].name === inputName) {
        if(inputBalance > bank.accounts[names].balance){
          console.log(`Your account currently  holds $${bank.accounts[names].balance} so you cannot withdraw your requested amount.`);
        } else{
          bank.accounts[names].balance -= inputBalance;
          console.log(`You just withdrew $${inputBalance} from ${inputName}'s account'. ${inputName}'s new account balance is $${bank.accounts[names].balance}`);
        }
      }
    }

// Help from Chris from here on

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
      }
    }//for
  }//transfer
};

console.log(bank.accounts);
bank.addAccount('Luke', 50000);
console.log(bank.accounts);
bank.deposit('Ben', 500000);
bank.withdraw('Luke', 100);
// bank.transfer('Ben', 'Luke', 10000);


// Create a function so Sarge can respond!
//
// Examples
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const sargeRespond = function(string) {
  if(string.endsWith('?')){
    return 'Sure.';
  } else if (string === string.toUpperCase() && string != '') {
    return 'Woah, chill out!';
  } else if(string === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

console.log(sargeRespond('Can we have a half day?'));
console.log(sargeRespond('CAN WE HAVE A HALF DAY'));
console.log(sargeRespond(''));
console.log(sargeRespond('We definitely need a half day.'));





// var sargesResponses = [ - Using objects and arrays is incorrect in this case
// {input:response: "Sure."},
// {input: response: "Woah, chill out!."},
// {input: response: "Fine. Be that way!."},
// {input: response: "Whatever."},
// ];
// for (var i = 0; i sargesResponses.length; i++){
//   if (sargesResponses [i].response )
// } else {
