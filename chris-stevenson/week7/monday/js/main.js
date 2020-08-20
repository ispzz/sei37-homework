$(document).ready(function() {
  $('#searchButton').on('click', function(){
    $('#contentContainer').html('');
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
      const data = JSON.parse(xhr.response);
      const results = JSON.parse(xhr.response).results;
      console.log(data);
      console.log(results);
      results.forEach(function(result){
        $('#contentContainer').append(`<img id='${result.id}' class='poster' src='https://image.tmdb.org/t/p/w92${result.poster_path}'> `);
      });
      loadPosterClickHandler();
    }
    const query = $('#searchString').val();


    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`);
    xhr.send();


  }); // button handler

  const loadPosterClickHandler = function(){
    $('.poster').on('click', function(){
      const xhr = new XMLHttpRequest();
      xhr.onload = function(){
        const movie = JSON.parse(xhr.response);
        console.log(movie);
        $('#contentContainer').css('display', 'none');
        $('#movieDetails').append('<button id="backToResults">Back</button></br>');
        $('#backToResults').on('click', function(){
          $('#movieDetails').html('');
          $('#contentContainer').css('display', 'block');
        });
        $('#movieDetails').append(`<h1>${movie.title}</h1>`)
        $('#movieDetails').append(`<h2>Overview</h2>`)
        $('#movieDetails').append(`<p>${movie.overview}</p>`)
        $('#movieDetails').append(`<h2>Release Date</h2>`)
        $('#movieDetails').append(`<p>${movie.release_date}</p>`)
        $('#movieDetails').append(`<h2>Profitability</h2>`)
        $('#movieDetails').append(`<p>${((movie.revenue/movie.budget)*100).toFixed(2)}%</p>`)
        $('#movieDetails').append(`<img src='https://image.tmdb.org/t/p/w500${movie.poster_path}'> `);
      }

      xhr.open('GET', `https://api.themoviedb.org/3/movie/${this.id}?api_key=24d863d54c86392e6e1df55b9a328755`);
      xhr.send();

    });
  }



}); //Document ready
