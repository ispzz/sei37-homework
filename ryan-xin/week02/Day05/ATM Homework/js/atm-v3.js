

$(document).ready(function () {

  /* ---------------------------- Checking Account ---------------------------- */

  const $checkingAccount = $('#checkingAccount');  // Checking <div>
  const $checkingBalance = $('#balance1');  // Checking balance
  const $checkingAmount = $('#checkingAmount');  // Checking input amount
  const $checkingDeposit = $('#checkingDeposit');  // Checking deposit button
  const $checkingWithdraw = $('#checkingWithdraw');  // Checking withdraw button


  /* ---------------------------- Savings Account ---------------------------- */

  const $savingsAccount = $('#savingsAccount');  // Savings <div>
  const $savingsBalance = $('#balance2');  // Savings balance
  const $savingsAmount = $('#savingsAmount');  // Savings input amount
  const $savingsDeposit = $('#savingsDeposit');  // Savings deposit button
  const $savingsWithdraw = $('#savingsWithdraw');  // Savings withdraw button


  /* --------------------------------- Values --------------------------------- */

  let checkingDepositAmount;
  let currentCheckingBalance;
  let checkingWithdrawAmount
  let finalCheckingBalance;

  let savingsDepositAmount;
  let savingsWithdrawAmount;
  let currentSavingsBalance;
  let finalSavingsBalance;


  /* ------------------------- Clear message function ------------------------- */

  // Create <p> for error message
  const $message = $('<p></p>');

  // User click on input area clear the message
  const clearMessage = function () {
    // Empty message
    $message.text('');  
    // Remove form the div (otherwise the div will be longer)
    $message.remove();  
  };


  /* ---------------------- Checking valid input function --------------------- */

  const validChecking = function (value) {
    // Check if the input is empty, 0 or negative numbers.
    if (value === '' || value === '0' || isNaN(value) || parseInt(value) <= 0) {
      // Add error message to the $message
      $message.text(`Please enter a valid amount.`); 
      return false;
    } else {
      return true;
    }
  };


  /* ------------------------ Checking balance function ----------------------- */

  const checkingBalance = function (value) {
    // Remove '$' in the string and convert to num
    currentCheckingBalance = +($checkingBalance.text().slice(1)); 
    // Remove '$' in the string and convert to num
    currentSavingsBalance = +($savingsBalance.text().slice(1));
    // Check if the total balance is enough
    if (parseInt(value) > (currentCheckingBalance + currentSavingsBalance)) {
      $message.text(`Sorry you don't have enough balance.`);
      return false;
    } else {
      return true;
    }
  };


  /* ------------------------- Balance Red Background ------------------------- */

  const checkingBackground = function () {
    currentCheckingBalance = +($checkingBalance.text().slice(1));
    if (currentCheckingBalance === 0) {
      $('#balance1').css({
        'background-color': '#F52F4F',
        'color': '#ffffff'
      });
    } else {
      $('#balance1').css({
        'background-color': '#E3E3E3',
        'color': '#000000'
      });
    }
  };

  const savingsBackground = function () {
    currentSavingsBalance = +($savingsBalance.text().slice(1));
    if (currentSavingsBalance === 0) {
      $('#balance2').css({
        'background-color': '#F52F4F',
        'color': '#ffffff'
      });
    } else {
      $('#balance2').css({
        'background-color': '#E3E3E3',
        'color': '#000000'
      });
    }
  }

  /* ------------------------ Checking Deposit Function ----------------------- */

  const checkingDeposit = function(){
    // Use validChecking function to check if the input is valid
    if (!validChecking($checkingAmount.val())) {
      // Add error message to Checking <div>
      $checkingAccount.append($message);  
    } else {
      checkingDepositAmount = +$checkingAmount.val();
      currentCheckingBalance = +($checkingBalance.text().slice(1));
      finalCheckingBalance = currentCheckingBalance + checkingDepositAmount;
      $checkingBalance.text('$' + finalCheckingBalance);
    }
    checkingBackground(); // Change background color
    $checkingAmount.val(''); // Clear Checking input area
  };


  /* ------------------------ Savings Deposit Function ------------------------ */
  
  const savingsDeposit = function(){
    // Use validChecking function to check if the input is valid
    if (!validChecking($savingsAmount.val())) {
      // Add error message to Savings <div>
      $savingsAccount.append($message);
    } else {
      savingsDepositAmount = +$savingsAmount.val();
      currentSavingsBalance = +($savingsBalance.text().slice(1));
      finalSavingsBalance = currentSavingsBalance + savingsDepositAmount;
      $savingsBalance.text('$' + finalSavingsBalance);
    }
    savingsBackground(); // Change background color
    $savingsAmount.val(''); // Clear Savings input area
  };


  /* ----------------------- Checking Withdraw Function ----------------------- */

  const checkingWithdraw = function(){
    // Use validChecking function to check if the input is valid
    if (!validChecking($checkingAmount.val())) {
      $checkingAccount.append($message);
    } else if (!checkingBalance($checkingAmount.val())) {
      $checkingAccount.append($message);
    } else {
      checkingWithdrawAmount = +$checkingAmount.val();
      currentCheckingBalance = +($checkingBalance.text().slice(1));
      currentSavingsBalance = +($savingsBalance.text().slice(1));
      // Compare withdraw amount & current checking balance
      if (checkingWithdrawAmount <= currentCheckingBalance) {  
        finalCheckingBalance = currentCheckingBalance - checkingWithdrawAmount;
        $checkingBalance.text('$' + finalCheckingBalance); 
        // Keep Saving balance as is.
      } else {
        // Make Checking balance = 0
        finalCheckingBalance = 0;
        $checkingBalance.text('$0');
        finalSavingsBalance = currentCheckingBalance + currentSavingsBalance - checkingWithdrawAmount;
        $savingsBalance.text('$' + finalSavingsBalance);
      }
    }
    checkingBackground(); // Change background color
    savingsBackground(); // Change background color
    $checkingAmount.val(''); // Clear Checking input area
    $savingsAmount.val(''); // Clear Savings input area
  };


  /* ------------------------ Savings Withdraw Function ----------------------- */

  const savingsWithdraw = function(){
    // Use validChecking function to check if the input is valid
    if (!validChecking($savingsAmount.val())) {
      $savingsAccount.append($message);
    } else if (!checkingBalance($savingsAmount.val())) {
      $savingsAccount.append($message);
    } else {
      savingsWithdrawAmount = +$savingsAmount.val();
      currentCheckingBalance = +($checkingBalance.text().slice(1));
      currentSavingsBalance = +($savingsBalance.text().slice(1));
      // Compare withdraw amount & current checking balance
      if (savingsWithdrawAmount <= currentSavingsBalance) {
        finalSavingsBalance = currentSavingsBalance - savingsWithdrawAmount;
        $savingsBalance.text('$' + finalSavingsBalance);
        // Keep Checking balance as is.
      } else {
        // Make Savings balance = 0
        finalSavingsBalance = 0;
        $savingsBalance.text('$0');
        finalCheckingBalance = currentCheckingBalance + currentSavingsBalance - savingsWithdrawAmount;
        $checkingBalance.text('$' + finalCheckingBalance);        
      }
    }
    checkingBackground(); // Change background color
    savingsBackground(); // Change background color
    $checkingAmount.val(''); // Clear Checking input area
    $savingsAmount.val(''); // Clear Savings input area
  };




  /* ------------------------------- Clear Input ------------------------------ */

  $checkingAmount.on('focus', clearMessage);

  $savingsAmount.on('focus', clearMessage);

  /* -------------------------------- Checking -------------------------------- */

  $checkingDeposit.on('click', checkingDeposit);

  $checkingWithdraw.on('click', checkingWithdraw);
  
/* --------------------------------- Saving --------------------------------- */

  $savingsDeposit.on('click', savingsDeposit);

  $savingsWithdraw.on('click', savingsWithdraw);

});
