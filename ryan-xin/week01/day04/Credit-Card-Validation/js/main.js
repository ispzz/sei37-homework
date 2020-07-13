// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
let errorMessage = "";


// Number must be 16 digits, all of them must be numbers
const numberCheck = function(string) {
  if(!isNaN(string)) {
      return true;
    }
  errorMessage = errorMessage + "Invalid_number; "
  return false;
}; // numberCheck


// You must have at least two different digits represented (all of the digits cannot be the same)
const differentDigits = function(string) {
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    if(string.indexOf(string[i], i + 1) !== -1) {
      count += 1;
    }
  }
  if(count === 15) {
    errorMessage = errorMessage + "Wrong_length; "
    return false;
  } else {
    return true;
  }
}; // differentDigits


// The final digit must be even
const lastDigit = function(string) {
  const lastNumber = string[string.length - 1];
  if(Number(lastNumber) % 2 === 0 || Number(lastNumber) === 0) {
    return true;
  } else {
    errorMessage = errorMessage + "Not_end_with_even; "
    return false;
  }
}; // lastDigit


// The sum of all the digits must be greater than 16
const digitsSum = function(string) {
  let sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  if(sum > 15) {
    return true;
  } else {
    errorMessage = errorMessage + "Invalid_sum; "
    return false;
  }
}; // digitsSum


// Constructor objects
const CardDetails = function(cardNumber, valid, error){
  this.number = cardNumber;
  this.valid = valid;
  this.error = error;
};


// validateCreditCard
const validateCreditCard = function(cardNumber) {
  const newString = cardNumber.split("-").join("")
  if(numberCheck(newString) && lastDigit(newString) && digitsSum(newString) && differentDigits(newString)){   // Helper Functions
    const card01 = new CardDetails(cardNumber, "Valid", "");
    console.log(card01);
  } else {
    const card01 = new CardDetails(cardNumber, "Invalid", errorMessage);
    console.log(card01);
  }
};


validateCreditCard("9999-9999-8888-0000");
validateCreditCard("6666-6666-6666-1666");

validateCreditCard("a923-3211-9c01-1112");
validateCreditCard("4444-4444-4444-4444");
validateCreditCard("1111-1111-1111-1110");
validateCreditCard("6666-6666-6666-6661");
