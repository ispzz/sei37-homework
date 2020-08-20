$(document).ready(function(){
  // this code runs only after DOM has loaded
$('#lookupMovie').on('click', function(){
    const query = $('#numberQuery').val();
      // AJAX: Asynchronous Javascript and XML
    // XML: eXtensible Markup Language
    // JSON: JS Object Notation
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
      // turn the JSON string of the response into structured data:
      const data = JSON.parse(xhr.response)
      // debugger;
      console.log('Response: ', data);
    for (let i = 0; i < data.results.length; i++){
      const movie = data.results[i];
        const $img = $(`<img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}", id="${movie.id}">`)
      $('#results').append($img)
      $(`#${movie.id}`).on('click', function(){
        const xhr = new XMLHttpRequest();
          const id = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=24d863d54c86392e6e1df55b9a328755`
          xhr.open('GET', url);
          xhr.send();
          debugger;
          $('#results').html(`${id.popularity}`)
        });
      };
    };
    const url = `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`
    xhr.open('GET', url);
    xhr.send();

  }); // button handler
});
