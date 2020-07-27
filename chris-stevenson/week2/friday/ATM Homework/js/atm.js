
// // ----------------------------- Move the money around  -----------------------------

const moveMoney = function(method, account, inputValue, sisterAccount){
  //removes the $ and makes a variable integer
  const currentBalance = parseInt(account.text().split('$').join(''));
  const sisterBalance = parseInt(sisterAccount.text().split('$').join(''));

  //sets changable variables for the accounts
  let newCurrentBalance = currentBalance;
  let newSisterBalance = sisterBalance;

  if(method === 'Deposit'){
    newCurrentBalance = inputValue + currentBalance;
  } else {
    //check enough money is in account
    if(inputValue > currentBalance) {
      //if the total amount held in both accounts is smaller than requested withdrawl
      if((currentBalance + sisterBalance) < inputValue){
        alert('You do not have enough money to make this withdrawl.')
      } else {
        //clean out the current account
        newCurrentBalance = 0;
        //take the rest of the money from the other account
        newSisterBalance = sisterBalance - Math.abs(currentBalance - inputValue);
        //set the sister account's DOM text to the new balance
        $(sisterAccount).text(`$${newSisterBalance}`);
      }
    } else {
      //make the withdrawl
      newCurrentBalance = currentBalance - inputValue;
    }
  }
  //inputs that new balance into the DOM
  $(account).text(`$${newCurrentBalance}`);
  checkIfMaxed(account);
  checkIfMaxed(sisterAccount);
};//move money function

// ----------------------------- Change colour of maxed out accounts -----------------------------
//Checks if the account is out of money and changes the backgroud to red. Will change it back to gray if new money is deposited. 
const checkIfMaxed = function(account) {
  if(account.text() === '$0') {
    $(account).css('background-color', 'red');
  } else {
    $(account).css('background-color', '#E3E3E3');
  }
};


// ----------------------------- Button Functions -----------------------------
$(':button').on('click', function(){
  //set input value to be the value of the button's sibling text field
  let inputValue = $(this).siblings('input[type=text]').val();
  //if no input in the text then just set the value to zero
  if (inputValue === '') {
    inputValue = 0;
  } else { // else turn the string into a the number of the inpnut text
    inputValue = parseInt(inputValue);
  }
  //set sister sister account to the correct child of the button's parent's sibling's DOM window.
  const sisterAccount = $(this).parent().siblings('.account').children('div[class=balance]');
  //sets account to the button's DOM window
  const account = $(this).siblings('div[class=balance]');
  //run the move money function
  moveMoney(this.value, $(account), inputValue, $(sisterAccount));
  $(this).siblings('input[type=text]').val('');
});
