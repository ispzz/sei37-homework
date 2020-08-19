$(document).ready(function () {
  
  $('#movie-search').on('click', function(){
    $('#results-list').empty();

    const query = $('#movie-query').val();
    const xhr = new XMLHttpRequest();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=dd8cc66a6d1087cd35c7346f5cc13ba1&query=${query}`;
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = function(){
      // Get search list
      const data = JSON.parse(xhr.response);
      for(let i = 0; i < data.results.length; i++){
        const title = data.results[i].original_title;
        const image = `https://image.tmdb.org/t/p/w94_and_h141_bestv2${data.results[i].poster_path}`;
        const overview = data.results[i].overview;
        const id = data.results[i].id;
        $('#results-list').append(
          `<li class="list-wrapper" id=${id}>
            <div class="list-left">
              <img src=${image} alt=${title} class="movie-image">
            </div>
            <div class="list-right">
              <span class="list-title">${title}</span>
              <span class="list-overview">${overview}</span>
            </div>
        </li>`);
      }
      
      // Get detail page
      $('.movie-image, .list-title').on('click', function () {
        $('#results-list').empty();
        // Get movie id from attr('id')
        const movieId = $(this).parent().parent().attr('id')
        const xhr = new XMLHttpRequest();
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=dd8cc66a6d1087cd35c7346f5cc13ba1`;
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = function () {
          const data = JSON.parse(xhr.response);
          const title = data.original_title;
          const overview = data.overview;
          const image = `https://image.tmdb.org/t/p/w188_and_h282_bestv2${data.poster_path}`
          $('#results-list').append(
            `<h2>${title}</h2>
            <p>${overview}</p>
            <img src=${image} alt=${title}>`
          );
        }; // movie-detail xhr onload
      }); // movie-detail handler
    }; // movie-search xhr onload

    $('#movie-query').val('');
  }); // search movie handler

});