
let checkingBalance = 0;
let savingsBalance = 0;

/////////////////////////////     GUI     ///////////////////////////////////////
////// first lets focus on the GUI using jQuery to get the functionality for the input money amount, withdraw and deposit buttons and the dollar value being displayed etc.

//// Checking account   /////////////////////////////////////////////

// when Deposit button is clicked, get the value at input amount and place it in a variable.
$( '#checkingDeposit' ).on( 'click', function() {
    const checkingInputVal = Number($('#checkingAmount').val());  //convert string to number and assings it to a variable.
    if ((Math.floor(checkingInputVal) === checkingInputVal) && (checkingInputVal > 0)) {  // Inputted value is a whole number and is > zero.
        depositFromChecking(checkingInputVal);  // run the input function
        updateGUI();
    }; // end if input > zero
}); // end deposit button press

// when Withdraw button is clicked, get the value at input amount and place it in a variable.
$( '#checkingWithdraw' ).on( 'click', function() {
  const checkingInputVal = Number($('#checkingAmount').val());  //convert string to number and assings it to a variable.
  if ((Math.floor(checkingInputVal) === checkingInputVal) && (checkingInputVal > 0)) {  // Inputted value is a whole number and is > zero.
        withdrawFromChecking(checkingInputVal);  // run the input function
        updateGUI();
    }; // end if input > zero.
}); // end withdrawal button press


/// Savings account   //////////////////////////////////////////

// when Deposit button is pressed, get the value at input amount and place it in a variable.
$( '#savingsDeposit' ).on( 'click', function() {
  const savingsInputVal = Number($('#savingsAmount').val());  //convert string to number and assings it to a variable.
  if ((Math.floor(savingsInputVal) === savingsInputVal) && (savingsInputVal > 0)) {  // Inputted value is a whole number and is > zero.
        depositFromSavings( savingsInputVal );  // run input function
        updateGUI();
    }; // end if input > 0
}); // end deposit button press

// when Withdraw button is pressed, get the value at input amount and place it in a variable.
$( '#savingsWithdraw' ).on( 'click', function() {
  const savingsInputVal = Number($('#savingsAmount').val());  //convert string to number and assings it to a variable.
  if ((Math.floor(savingsInputVal) === savingsInputVal) && (savingsInputVal > 0)) {  // Inputted value is a whole number and is > zero.
        withdrawFromSavings( savingsInputVal );  // run input function
        updateGUI();
      }; // end if input > zero.
}); // end withdrawal button press



////////////////////////////  Banking Code   ////////////////////////////////////


////// Requests from CHECKING Account    //////

const depositFromChecking = function( depositAmount ) { //calculate, ammend new balance.
    checkingBalance = checkingBalance + depositAmount;
};

const withdrawFromChecking = function( withdrawAmount ) {
                // calculate, ammend new balance. With overdraft logic
    const remainder = checkingBalance - withdrawAmount

    if ( remainder >= 0 ) {  // if the remainder isn't negative, then process as normal. ie. account still positive
        checkingBalance = checkingBalance - withdrawAmount;
    } else if ( (remainder + savingsBalance) >= 0 ) {  // If the remaining amount can be taken from the other account without sending it negative, then process withdrawing using both accounts. Note: remainder is a negative number here.
        checkingBalance = 0;        // checking account overdrawn, it will be zero.
        savingsBalance = remainder + savingsBalance // remainder is a negative number.
    } // end if.. do nothing otherwise.
};



////// Requests from SAVINGS Account    //////

const depositFromSavings = function( depositAmount ) { //calculate, ammend new balance.
    savingsBalance = savingsBalance + depositAmount;
};

const withdrawFromSavings = function( withdrawAmount ) {
              // calculate, ammend new balance. With overdraft logic
  const remainder = savingsBalance - withdrawAmount

  if ( remainder >= 0 ) {  // if the remainder isn't negative, then process as normal. ie. account still positive
      savingsBalance = savingsBalance - withdrawAmount;
  } else if ( (remainder + checkingBalance) >= 0 ) {  // If the remaining amount can be taken from the other account without sending it negative, then process withdrawing using both accounts. Note: remainder is a negative number here.
      savingsBalance = 0;        // savings account overdrawn, it will be zero.
      checkingBalance = remainder + checkingBalance // remainder is a negative number.
  } // end if.. do nothing otherwise.
};

const updateGUI = function() { // GUI balance update of both accounts

    $('#checkingAmount').val(''); // clears GUI input box. Ready for next transaction
    $('#balance1').html(`$` + checkingBalance); // update the value to GUI
    if ( checkingBalance === 0) {  // if checkingbalance is zero
        $('#balance1').css('background-color','red'); // make background red
    } else { // if balance > zero
        $('#balance1').css('background-color','#E3E3E3'); // background grey
    }; // end if

    $('#savingsAmount').val(''); // clears GUI input box. Ready for next transaction
    $('#balance2').html(`$` + savingsBalance); // update the value to GUI
    if ( savingsBalance === 0) {  // if savingsbalance is zero
        $('#balance2').css('background-color','red'); //  make background red.
    } else { // if balance is positive
        $('#balance2').css('background-color','#E3E3E3'); // background gery
    }; // end if.
};

/////////////////////////// note!!! need to fix input to only take an int not 342thfk or lsdfkasj34234..
// At the moment it will strip the intiger from the letters.. But I need the whole input to only be numbers.
// at present will accept 475fjdls and use it as 475..
/// won't do anything if jfkd456 is written. Won't even clear the screen.
// needs to clear screen when an invalid input is put in.

// another issue is that, upon withdrawal from an account, even if the other account has no money in it but has not been touched, the GUI turns red.


// (Math.floor(checkingInputVal) === checkingInputVal) &&
