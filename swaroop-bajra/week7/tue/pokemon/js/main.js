  // DOM
$(document).ready(function(){

  // this code runs only after DOM
  // has loaded

  $('#lookupPokemon').on('click', function(){

    const query = $('#pokemonQuery').val();
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

    $.getJSON(url)
    .done(function(data){
      // This code runs when we have our response; the response will be in the callback's
      // argument, which here we have called 'data'
      console.log('server response:', data);
      $('#results').empty();
      const pokemonName = data.name
      const pokemonID = data.id
      $('#results').append(`${pokemonName}`);
      const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png`;
      $('#results').append(`<img pokemonID="${pokemonID}" class="result" src="${ imgURL }">`);

    })
    .fail(function(err){
      console.log('Error:', err);
    })
    // .always(function(data){
    //   console.log('clean up after request success or fail', data);
    // })

  }); // button click handler


  $('#showAllPokemon').on('click', function(){

    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

    $.getJSON(url)
    .done(function(data){
      // This code runs when we have our response; the response will be in the callback's
      // argument, which here we have called 'data'
      console.log('server response:', data);
      $('#results').empty();
      for (let i = 0; i < data.results.length; i++){
        const pokemons = data.results[i];
        const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`;
        $('#results').append(`<img pokemonID="${pokemons.id}" class="result" src="${ imgURL }">`);
        $('#results').append(`${ pokemons.name }`);
      }


    })
    .fail(function(err){
      console.log('Error:', err);
    })
    // .always(function(data){
    //   console.log('clean up after request success or fail', data);
    // })

  }); // button click handler


}); // $(document).ready()
