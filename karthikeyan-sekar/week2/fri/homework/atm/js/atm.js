
var checking_balance = 0;
var savings_balance = 0;

const ClearFields = () => {

     $("#checking-amount").val("");
     $("#savings-amount").val("");

}

     $(document).ready(function() {
   $("#checking-deposit").click(function () {
       checking_balance = Number(checking_balance) + Number($("#checking-amount").val());
          $("#checking-balance").text(`$${checking_balance}`);
          $('#checking-balance').css('background-color','grey'); //.addClass("balance")
          ClearFields();

    });

     $("#checking-withdraw").click(function () {
        var current_checking_withdraw_amount = Number($("#checking-amount").val());
        var total_balance = Number(checking_balance) + Number(savings_balance);

        if(current_checking_withdraw_amount <= Number(checking_balance))
       {
      checking_balance = Number(checking_balance) - Number($("#checking-amount").val());
       $("#checking-balance").text(`$${checking_balance}`);
       ClearFields();
     }else if (current_checking_withdraw_amount <= Number(total_balance)) {
        savings_balance = Number(savings_balance) - (current_checking_withdraw_amount-checking_balance);
    checking_balance = 0;

        $("#checking-balance").text(`$${checking_balance}`);
       $("#savings-balance").text(`$${savings_balance}`);
ClearFields();
     }
     else {

       $(`<p> **you have insufficient money to do withdrawals with balance ${total_balance} </p>`).appendTo(".clear");
       ClearFields();
       //$('<p>').removeClass("clear");
     }
     if (Number(checking_balance) == 0)
      {
      $('#checking-balance').css('background-color','red');
      }
      if (Number(savings_balance) == 0)
       {
       $('#savings-balance').css('background-color','red');
       }
      });

    $("#savings-deposit").click(function () {
      savings_balance = Number(savings_balance) + Number($("#savings-amount").val());
         $("#savings-balance").text(`$${savings_balance}`);
         $('#savings-balance').css('background-color','grey');
         ClearFields();
     });

     $("#savings-withdraw").click(function () {
       var current_savings_withdraw_amount = Number($("#savings-amount").val());
       var total_balance = Number(checking_balance) + Number(savings_balance);
       if(current_savings_withdraw_amount <= Number(savings_balance))
      {
     savings_balance = Number(savings_balance) - current_savings_withdraw_amount;
      $("#savings-balance").text(`$${savings_balance}`);
      ClearFields();
    }else if (current_savings_withdraw_amount <= Number(total_balance)) {
       checking_balance = Number(checking_balance) - (current_savings_withdraw_amount-savings_balance);
   savings_balance = 0;

       $("#checking-balance").text(`$${checking_balance}`);
      $("#savings-balance").text(`$${savings_balance}`);
      ClearFields();
    }
    else {

      $(`<p> **you have insufficient money to do withdrawals with balance ${total_balance} </p>`).appendTo(".clear");
      ClearFields();
    }
    if (Number(savings_balance) == 0)
     {
     $('#savings-balance').css('background-color','red');
     }
     if (Number(checking_balance) == 0)
      {
      $('#checking-balance').css('background-color','red');
      }
      });

});
