
let checkingBalance = 0;
let savingsBalance = 0;

/////////////////////////////     GUI     ///////////////////////////////////////
////// first lets focus on the GUI using jQuery to get the functionality for the input money amount, withdraw and deposit buttons and the dollar value being displayed etc.

//// Checking account   /////////////////////////////////////////////

// when Deposit button is clicked, get the value at input amount and place it in a variable.
$( '#checkingDeposit' ).on( 'click', function() {
    const checkingInputVal = parseInt($('#checkingAmount').val());  //convert string to integer and asign variable.

    if (checkingInputVal > 0 ) {  // this checks that the value > zero and would also be false if the parseInt from above parsed characters other than numbers.
        depositFromChecking(checkingInputVal);  // run the input function
        $('#checkingAmount').val(''); // clears the input box on the GUI
        $('#balance1').html(`$` + checkingBalance); // updates the balance on the GUI
        if ( checkingBalance > 0) {  // the balance > zero make the background colour white.
            $('#balance1').css('background-color','#E3E3E3');
        }; // end check balance > zero.
    }; // end if input > zero
}); // end deposit button press

// when Withdraw button is clicked, get the value at input amount and place it in a variable.
$( '#checkingWithdraw' ).on( 'click', function() {
    const checkingInputVal = parseInt($('#checkingAmount').val());  // convert string to integer and asign variable.

    if (checkingInputVal > 0 ) {  //checks that "checkingInputVal" is a number and it's > zero.. Would be false if it was letters etc.
        withdrawFromChecking(checkingInputVal);  // run the input function
        $('#checkingAmount').val(''); // clears the GUI input box
        $('#balance1').html(`$` + checkingBalance);  // updates the balance on the GUI
        if ( checkingBalance === 0) {  // the balance is zero make the background colour red.
            $('#balance1').css('background-color','red');
        }; // end check for zero balance.
    }; // end if input > zero.
}); // end withdrawal button press


/// Savings account   //////////////////////////////////////////

// when Deposit button is pressed, get the value at input amount and place it in a variable.
$( '#savingsDeposit' ).on( 'click', function() {
    const savingsInputVal = parseInt($('#savingsAmount').val());  // convert string to integer and asign variable.

    if (savingsInputVal > 0 ) {  // this checks that the value > zero and would also be false if the parseInt from above parsed characters other than numbers.
        depositFromSavings( savingsInputVal );  // run input function
        $('#savingsAmount').val(''); // clears GUI input box
        $('#balance2').html(`$` + savingsBalance);  // updates the balance on the GUI
        if ( savingsBalance > 0) {  // the balance > zero make the background colour white.
            $('#balance2').css('background-color','#E3E3E3');
        }; // end check balance > zero.
    }; // end if input > 0
}); // end deposit button press

// when Withdraw button is pressed, get the value at input amount and place it in a variable.
$( '#savingsWithdraw' ).on( 'click', function() {
    const savingsInputVal = parseInt($('#savingsAmount').val());  // convert string to an integer and asign variable.

    if (savingsInputVal > 0 ) {  //checks that "checkingInputVal" is a number and it's > zero.. Would be false if it was letters etc.
        withdrawFromSavings( savingsInputVal );  // run input function
        $('#savingsAmount').val(''); // clears GUI input box.
        $('#balance2').html(`$` + savingsBalance);  // updates the balance on the GUI
        if ( savingsBalance === 0) {  // the balance is zero make the background colour red.
            $('#balance2').css('background-color','red');
        }; // end check for zero balance.
      }; // end if input > zero.
}); // end withdrawal button press



////////////////////////////  Banking Code   ////////////////////////////////////


////// Requests from CHECKING Account    //////

const depositFromChecking = function( depositAmount ) {  // calculate and ammend the new balance.
    console.log( 'deposit request from Checking Account ' + depositAmount);
    checkingBalance = checkingBalance + depositAmount;
};

const withdrawFromChecking = function( withdrawAmount ) { // calculate and ammend the new balance.
    console.log( 'withdrawal request from Checking Account ' + withdrawAmount );
        if ( checkingBalance + savingsBalance - withdrawAmount >= 0) {  // only process transactions that are >= both balances combined.
            checkingBalance = checkingBalance - withdrawAmount;
        }; // end if
};



////// Requests from SAVINGS Account    //////

const depositFromSavings = function( depositAmount ) {
    console.log( 'deposit request from Savings Account ' + depositAmount);
    savingsBalance = savingsBalance + depositAmount;
};

const withdrawFromSavings = function( withdrawAmount ) {
    console.log( 'withdrawal request from Savings Account ' + withdrawAmount );
    if ( savingsBalance - withdrawAmount >= 0) {     // only process transactions that keep savingsBalance >= zero.
        savingsBalance = savingsBalance - withdrawAmount;
    }; // end if
};



/////////////////////////// note!!! need to fix input to only take an int not 342thfk or lsdfkasj34234..
// At the moment it will strip the intiger from the letters.. But I need the whole input to only be numbers.
// at present will accept 475fjdls and use it as 475..
/// won't do anything if jfkd456 is written. Won't even clear the screen.
// needs to clear screen when an invalid input is put in.


// logic for over draft checker..
//
// remainder = checkingBalance - withdrawAmount
//
// if ( remainder >= zero ) {  // if the remainder isn't negative, then process as normal.
//     checkingBalance = checkingBalance - withdrawAmount;
// } else if ( (remainder + savings) >= 0 ) {  // if the  negative remainder + savingsBalance isn't negative, then process withdrawing from both accounts.
//     checkingBalance = 0;        // checking account overdrawn.
//     savingsBalance = remainder + savingsBalance // remainder is a negative number.
// }
