
let checkingBalance = 0;
let savingsBalance = 0;

/////////////////////////////     GUI     ///////////////////////////////////////
////// first lets focus on the GUI using jQuery to get the functionality for the input money amount, withdraw and deposit buttons and the dollar value being displayed etc.

//// Checking account   /////////////////////////////////////////////

// when Deposit button is clicked, process the value entered on the GUI
$( '#checkingDeposit' ).on( 'click', function() {
        //first test input for validity, and deposits zero if not.
        depositFromChecking(isValid('#checkingAmount'));
        updateGUI();
}); // end deposit button press

// when Withdraw button is clicked, process the value entered on the GUI
$( '#checkingWithdraw' ).on( 'click', function() {
        //first test input for validity, and withdraws zero if not.
        withdrawFromChecking(isValid('#checkingAmount'));
        updateGUI();
}); // end withdrawal button press


/// Savings account   //////////////////////////////////////////

// when Deposit button is clicked, process the value entered on the GUI
$( '#savingsDeposit' ).on( 'click', function() {
        //first test input for validity, and deposits zero if not.
        depositFromSavings(isValid('#savingsAmount'));
        updateGUI();
}); // end deposit button press

// when Withdraw button is clicked, process the value entered on the GUI
$( '#savingsWithdraw' ).on( 'click', function() {
        //first test input for validity, and withdraws zero if not.
        withdrawFromSavings(isValid('#savingsAmount'));
        updateGUI();
}); // end withdrawal button press


///                                                                           ///
////////////////////////////  Banking Code   ////////////////////////////////////
///                                                                           ///

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


////////////////////   Shared Function   ///////////////////

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

const isValid = function(htmlTag) {  // Returns the value as an integer if the input is valid.
    //Only positive integers are valid inputs. Returns zero otherwise.
    const inputVal = Number($(htmlTag).val());  //convert string to number.
    if ((Math.floor(inputVal) === inputVal) && (inputVal > 0)) {
      // Inputted value is a whole number and is > zero.
      return inputVal;
    }else {
      return 0;
    }; // end if.
}; // end isValid
