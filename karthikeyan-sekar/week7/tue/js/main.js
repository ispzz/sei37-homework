// let globalData;

$(document).ready(function(){

  // This code runs only after DOM
  // has loaded.

  $('#lookupcity').on('click', function(e){

    const query = $('#searchText').val();
    console.log(query);
    // const url = ` https://api.openaq.org/v1/measurements?city=${query}`;
    const url = `https://api.openaq.org/v1/latest?city=${query}&parameter=pm25`
    console.log('query:', query);
    $('#lookupcity button').on('click', function(){
        // "Go back" to the last search results
        $('#movieDetails').hide();
        $('#searchResults').show();
      });
      $('#movieDetails button').on('click', function(){
          // "Go back" to the last search results
          $('#searchResults').hide();
        });
    $.getJSON(url)
    .done( function( d){
      // This code runs when we have our response; the response will be in the callback's
      // argument, which here we have called 'data'
          display(d);
          $('#movieDetails').show();
      console.log( 'server response:', data );
    })
    .fail( function( err ){
      console.warn('ERROR:', err);
    });
     e.preventDefault();
  }); // button click handler
}); // $(document).ready()


const display = function(data){
for (let i = 0; i < data.results.length; i++){

const $place = `<p>Location: ${data.results[i].location}</p>`;
const $value = `<p>value: ${data.results[i].measurements[0].parameter}</p>`;
const $para = `<p>Parameter: ${data.results[i].measurements[0].value}</p>`;
const $unit = `<p>Unit: ${data.results[i].measurements[0].unit}</p>`;
const $updateDate = `<p>updated on: ${data.results[i].measurements[0].lastUpdated}</p>`;

$('#searchResults').append($place);
$('#searchResults').append($value);
$('#searchResults').append($para);
$('#searchResults').append($unit);
$('#searchResults').append($updateDate);

$('#searchResults').append('----------------------');
$('#searchResults').show();
}
};
