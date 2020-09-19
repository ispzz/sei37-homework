// let globalData;
  // DOM
$(document).ready(function(){

  // this code runs only after DOM
  // has loaded

  $('#lookupNumber').on('click', function(){
  // This code runs when the button is clicked
  // console.log('Search clicked!');
  const query = $('#numberQuery').val();
  console.log('Search clicked!', query);

  // XMLHttpRequest
  // console.log('Hello Ajax!');

  // AJAX: Asynchronous Javascript and XML
  // XML: eXtensible Markup Language
  //      structured data exchange format
  //      for networking
  // JSON: JS Object Notation

  const xhr = new XMLHttpRequest();

  // This is the ancient way of defining a callback function in JS:
  // Set some '.on__' property of a library object to be a function,
  // which it will run for you in response to the relevant event triggering.
  // xhr.onreadystatechange = function(){
  //   // console.log('ready state changed: ', xhr.readyState);
  //   if(xhr.readyState === 4) {
  //     console.log('Response: ', xhr.response );
  //
  //   }
  // };

  xhr.onload = function(){
    // turn the JSON string of the response into structured data:
    const data = JSON.parse(xhr.response);
    console.log('Response: ', data);
    // globalData = data;
    // $('#results').html(`<p>${data.text}</p>`)
    for(let i = 0; i < data.results.length; i++){

      $('#results').append(`<p>${data.results[i].title}</p>`)

      const $id = `https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=24d863d54c86392e6e1df55b9a328755`

      const $img = $(`<img src="https://image.tmdb.org/t/p/w200${data.results[i].poster_path}"></img>`);
      // $('#results').append(`<img src='https://image.tmdb.org/t/p/w200${data.results[i].poster_path}'></img>`)

      $('#results').append($img).on('click',function(){
        console.log('image clicked');

        $('#results').html($id)
        xhr.open('GET', $id);
        xhr.send();


      });
    }

  };

  // const url = `http://numbersapi.com/${query}/trivia?json`;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`;
  // const url = `https://image.tmdb.org/t/p/w500${query}`
  xhr.open('GET', url);
  xhr.send();
  });  // button handler



}); // $(document).ready()
