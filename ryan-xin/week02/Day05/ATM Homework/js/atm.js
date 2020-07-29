
/* ---------------------------- Checking Account ---------------------------- */

const $checkingAccount = $('#checkingAccount');
const $checkingBalance = $('#balance1');
const $checkingAmount = $('#checkingAmount');
const $checkingDeposit = $('#checkingDeposit');
const $checkingWithdraw = $('#checkingWithdraw');


/* ---------------------------- Savings Account ---------------------------- */

const $savingsAccount = $('#savingsAccount');
const $savingsBalance = $('#balance2');
const $savingsAmount = $('#savingsAmount');
const $savingsDeposit = $('#savingsDeposit');
const $savingsWithdraw = $('#savingsWithdraw');



/* -------------------------- Checking input valid -------------------------- */
const validChecking = function(value){
  if (value === '' || value === '0' || isNaN(value) || parseInt(value) <= 0) {
    return false;
  } else {
    return true;
  }
};


/* ------------------------------ Clear message ----------------------------- */
const $message = $('<p></p>');

$checkingAmount.on('focus', function () {
  $message.text('');
  $message.remove();
});

$savingsAmount.on('focus', function () {
  $message.text('');
  $message.remove();
});



/* ---------------------------- Checking Deposit ---------------------------- */
$checkingDeposit.on('click', function(){
  if (!validChecking($checkingAmount.val())) {
    $message.text(`Please enter a valid amount.`);
    $checkingAccount.append($message);
    $checkingAmount.val('');
  } else {
    const depositAmount = + $checkingAmount.val();
    const currentBalance = +($checkingBalance.text().slice(1));
    const finalBalance = depositAmount + currentBalance;
    $checkingBalance.text('$' + finalBalance);
    $checkingAmount.val('');
  }
});



/* ---------------------------- Savings Deposit ---------------------------- */
$savingsDeposit.on('click', function () {
  if (!validChecking($savingsAmount.val())) {
    $message.text(`Please enter a valid amount.`);
    $savingsAccount.append($message);
    $savingsAmount.val('');
  } else {
    const depositAmount = +$savingsAmount.val();
    const currentBalance = +($savingsBalance.text().slice(1));
    const finalBalance = depositAmount + currentBalance
    $savingsBalance.text('$' + finalBalance);
    $savingsAmount.val('');
  }
});


/* ---------------------------- Checking Balance ---------------------------- */

const checkingBalance = function(value){
  const currentCheckingBalance = +($checkingBalance.text().slice(1));
  const currentSavingsBalance = +($savingsBalance.text().slice(1));  
  if (parseInt(value) > (currentCheckingBalance + currentSavingsBalance)) {
    return false;
  } else {
    return true;
  }
}

/* ---------------------------- Checking Withdraw --------------------------- */

$checkingWithdraw.on('click', function(){
  if (!validChecking($checkingAmount.val())) {
    $message.text(`Please enter a valid amount.`);
    $checkingAccount.append($message);
    $checkingAmount.val('');
  } else if (!checkingBalance($checkingAmount.val())) {
    $message.text(`Sorry you don't have enough balance.`);
    $checkingAccount.append($message);
    $checkingAmount.val('');
  } else {
    const withdrawAmount = +$checkingAmount.val();
    const currentCheckingBalance = +($checkingBalance.text().slice(1));
    const currentSavingsBalance = +($savingsBalance.text().slice(1));
    let finalCheckingBalance;
    let finalSavingsBalance;
    if (withdrawAmount <= currentCheckingBalance) {
      finalCheckingBalance = currentCheckingBalance - withdrawAmount;
      $checkingBalance.text('$' + finalCheckingBalance);
    } else {
      $checkingBalance.text('$0');
      finalSavingsBalance = currentCheckingBalance + currentSavingsBalance - withdrawAmount;
      $savingsBalance.text('$' + finalSavingsBalance);
    }
    $checkingAmount.val('');
    $savingsAmount.val('');
  }
});

/* ---------------------------- Savings Withdraw --------------------------- */

$savingsWithdraw.on('click', function () {
  if (!validChecking($savingsAmount.val())) {
    $message.text(`Please enter a valid amount.`);
    $savingsAccount.append($message);
    $savingsAmount.val('');
  } else if (!checkingBalance($savingsAmount.val())) {
    $message.text(`Sorry you don't have enough balance.`);
    $savingsAccount.append($message);
    $savingsAmount.val('');
  } else {
    const withdrawAmount = +$savingsAmount.val();
    const currentCheckingBalance = +($checkingBalance.text().slice(1));
    const currentSavingsBalance = +($savingsBalance.text().slice(1));
    let finalCheckingBalance;
    let finalSavingsBalance;
    if (withdrawAmount <= currentSavingsBalance) {
      finalSavingsBalance = currentSavingsBalance - withdrawAmount;
      $savingsBalance.text('$' + finalSavingsBalance);
    } else {
      $savingsBalance.text('$0');
      finalCheckingBalance = currentCheckingBalance + currentSavingsBalance - withdrawAmount;
      $checkingBalance.text('$' + finalCheckingBalance);
    }
    $checkingAmount.val('');
    $savingsAmount.val('');
  }
});