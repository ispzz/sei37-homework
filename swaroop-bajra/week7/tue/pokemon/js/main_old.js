// let globalData;
  // DOM
$(document).ready(function(){

  // this code runs only after DOM
  // has loaded

  $('#lookupNumber').on('click', function(){
    console.log('CLICKED!');
    const query = $('#numberQuery').val();
    const url = `http://numbersapi.com/${query}/trivia?json`;

    console.log('query',query);
    console.log('url', url);

    // jQuery AJAX!
    // $.ajax({
    //   url: url,
    //   datatype: 'json', // it can usually work this out for itself
    // })
    $.getJSON(url)
    .done(function(data){
      // This code runs when we have our response; the response will be in the callback's
      // argument, which here we have called 'data'
      console.log('server response:', data);
    // }); // $.ajax().done();
    })
    .fail(function(err){
      console.log('Error:', err);
    })
    .always(function(data){
      // this code will run whether .done() works (success) OR .fail() 
      console.log('clean up after request success or fail', data);
    })

  }); // button click handler

}); // $(document).ready()
