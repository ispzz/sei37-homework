    $("#checkingDeposit").click(function () {

		$('#balance1').html($('#checkingAmount').val());

    });

	// $("button:#Reset").click(function () {
  //
	// 	$('#msg').html("");
	// 	$('input:textbox').val("");
  //
  //   });
  //
	// $("button:#Set").click(function () {
  //
	// 	$('input:textbox').val("ABC");
	// 	$('#msg').html($('input:textbox').val());
  //
  //   });




  // $( document ).ready(function() {
  //     console.log( "ready!" );
  // });
  //
  // const checkAccount = 0;
  //
  // $('#checkingAmount').on('keyup', function(event){
  //   // console.log('event object:', event);
  //
  //   const inputContents = $(this).val();
  //   console.log('input value:', inputContents);
  //
  //   $(this).val(inputContents);
  //
  // });
  //
  // const depositAmount = function() {
  //   checkAccount += inputContents;
  // }
  //

  if(checkingBalance === 0){
    $('#balance1').css({"background-color": "red",});
  } else {
    $('#balance1').css({"background-color": "grey",});
  }
