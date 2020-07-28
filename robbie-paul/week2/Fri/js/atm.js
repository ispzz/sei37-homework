// # Title: GA ATM App

// ### Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.

// ### Objectives:
// - DOM selection, appending, removal, updating
// - code organisation: separation of concerns, i.e. _display logic_ vs. _business logic_

// ### Specification:

    // PLANNING OUT HOW TO TACKLE H/W

        // 1. write deposit function
        // 2. 


        // 3. use Math.abs 


    // PLANNED SKELETON

        // 
        // button functions

    //PSEUDOCODE

    console.log('GA Bank')

    // 0. Start jQuery on page.

    $(document).ready( function() {

    // 1. 'check balance' 
    // Make variables that stores the amount of checking , savings someone has. It should start at 0. Make sure it's a global variable so that can be accessed by other functions.

    let checkingBalance = 0;
    let savingsBalance = 0;
        // Attach current checking balance to HTML with jQuery and assign a value.
       
    // 2A. Make a deposit to checking function. It should add money and return new value of currentBalance.

    const depositChecking = function() {
        
        //when deposit button is clicked, the amount in the text field is added to the checking balance
        $('#checkingDeposit').on('click') {
                $('#checkingAccount').val(''); 
           `${checkingAmount}`
        }
       
    }    

    // 2B. Update the HTML element by using jQuery to attach function to button & ... 




    // 3




    // 4



    // 5 overdraft. Needs to check whether will take bank balance into negative. Allow if it won't take it too much into neg.
        // 



    // 6

    


// * Keep track of the checking and savings balances somewhere



// * Add functionality so that a user can deposit money into one of the bank accounts.




// * Make sure you are updating the display and manipulating the HTML of the page// so a user can see the change.


// * Add functionality so that a user can withdraw money from one of the bank accounts.



// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.



// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.



// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.



// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

// ___



} //end jQuery.