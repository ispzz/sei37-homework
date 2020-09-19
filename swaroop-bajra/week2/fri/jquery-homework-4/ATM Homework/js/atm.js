let checkingBalance = 0; // global variable for keeping track of the checking balance

if(checkingBalance === 0){
  $('#balance1').css('background-color', 'red');
}

$('#checkingDeposit').on('click',function() { // When Deposit button is clicked
  const amount = parseInt($('#checkingAmount').val());
  $('#checkingAmount').val('');
  if ($.isNumeric(amount) && amount > 0){

    checkingBalance += amount;

    console.log(`Amount added: ${amount} Checking Balance : ${checkingBalance}`);

    $('#balance1').html(checkingBalance).css('background-color', 'grey');

  } else {

    alert('Please Enter positive numeric amount only!');

  }

});
