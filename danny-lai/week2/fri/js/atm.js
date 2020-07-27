// Specification:
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.

const checkingBackground = function() {
  if(checkingBalance === 0){
    $('#balance1').css({
      'background-color': 'red'
    });
  } else {
    $('#balance1').css({
      'background-color': '#E3E3E3'
    });
  }
};

const savingsBackground = function() {
  if(savingsBalance === 0){
    $('#balance2').css({
      'background-color': 'red'
    });
  } else {
    $('#balance2').css({
      'background-color': '#E3E3E3'
    });
  }
};

let checkingBalance = 0;
let savingsBalance = 0;

const checkingDeposit = function() {
  const checkingDepositAmount = parseInt($('#checkingAmount').val())
  checkingBalance += checkingDepositAmount;
  checkingBackground();
  $('#balance1').text(`$${checkingBalance}`);
}; //end of checkingDeposit

$('#checkingDeposit').on('click', checkingDeposit)

const checkingWithdraw = function() {
  const checkingWithdrawAmount = parseInt($('#checkingAmount').val())
  if(checkingWithdrawAmount > checkingBalance){
    alert(`Error! Withdrawal amount exceeds account balance.`)
  } else {
    checkingBalance -= checkingWithdrawAmount;
    checkingBackground();
    $('#balance1').text(`$${checkingBalance}`);
  }
}; //end of checkingWithdraw

$('#checkingWithdraw').on('click', checkingWithdraw)

const savingsDeposit = function() {
  const savingsDepositAmount = parseInt($('#savingsAmount').val())
  savingsBalance += savingsDepositAmount;
  savingsBackground();
  $('#balance2').text(`$${savingsBalance}`);
}; //end of savingsDeposit

$('#savingsDeposit').on('click', savingsDeposit)

const savingsWithdraw = function() {
  const savingsWithdrawAmount = parseInt($('#savingsAmount').val())
  if(savingsWithdrawAmount > savingsBalance){
    alert(`Error! Withdrawal amount exceeds account balance.`)
  } else {
    savingsBalance -= savingsWithdrawAmount;
    savingsBackground();
    $('#balance2').text(`$${savingsBalance}`);
  }
}; //end of savingsWithdraw

$('#savingsWithdraw').on('click', savingsWithdraw)

// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.

// if savingsWithdrawAmount > savingsBalance && savingsBalance > 0 && checkingBalance > 0, then:
//    1. savingsBalance - savingsWithdrawAmount until savingsBalance = 0
//    2.

// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?
