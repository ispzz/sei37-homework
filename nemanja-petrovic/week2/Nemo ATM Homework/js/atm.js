let checkingBalance = 0;
let savingsBalance = 0;

//when deposit button is clicked process the amount on GUI
$('#checkingDeposit').on('click', function(){
  //1st test input for validity, and deposits zero if not.
  depositFromChecking(isValid('#checkingAmount'));
  updateGUI();
});

//when withdraw button is clicked withdraw amount entered on GUI
$('#checkingWithdraw').on('click', function(){
  //1st test input for validity, and deposits zero if not.
  withdrawFromChecking(isValid('#checkingAmount'));
  updateGUI();
});

//as above but for savings
$('#savingsDeposit').on('click', function(){
  depositFromSavings(isValid('#savingsAmount'));
  updateGUI();
});

//as above but for savings
$('#savingsWithdraw').on('click', function(){
  withdrawFromSavings(isValid('#savingsAmount'));
  updateGUI();
});

//checking function

const depositFromChecking = function( depositAmount ){
  checkingBalance = checkingBalance + depositAmount;
};

const withdrawFromChecking = function( withdrawAmount ){
  const remainder = checkingBalance - withdrawAmount

  if (remainder >= 0){
      checkingBalance = checkingBalance - withdrawAmount;

  } else if ( (remainder + savingsBalance) >= 0){
      checkingBalance = 0;
      savingsBalance = remainder + savingsBalance
  }
};

//savings function
const depositFromSavings = function( depositAmount ){
  savingsBalance = savingsBalance + depositAmount
};

const withdrawFromSavings = function( withdrawAmount ) {
  const remainder = savingsBalance - withdrawAmount

  if (remainder >= 0){
      savingsBalance = savingsBalance - withdrawAmount;

  } else if ((remainder + checkingBalance) >= 0){
      savingsBalance = 0;
      checkingBalance = remainder + checkingBalance

  }
};

//coloring GUI
const updateGUI = function() {

    $('#checkingAmount').val(''); //clears GUI input box
    $('#balance1').html('$' + checkingBalance);
    if ( checkingBalance === 0) {
        $('#balance1').css('background-color','red');
      }else{
        $('#balance1').css('background-color','grey');
  };

    $('#savingsAmount').val('');
    $('#balance2').html('$' + savingsBalance);
    if ( savingsBalance === 0) {
        $('#balance2').css('background-color','red');
      }else{
        $('#balance2').css('background-color','grey');
  };
};

const isValid = function(htmlTag) { //returns the value as an integer, if input is valid
  const inputVal = Number($(htmlTag).val());
  if ((Math.floor(inputVal) === inputVal) && (inputVal > 0)) {

    return inputVal;
  }else {
    return 0;
  };

};
