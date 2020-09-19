import React from 'react';
import axios from 'axios';


class PokemonSearch extends React.Component {

  state = {
    pokemons: []
  }

  componentDidMount(){

    console.log('PokemonSearch Mounted.');

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((res) => {
      console.log('Server response:', res.data.results);
      this.setState({pokemons: res.data.results });
    })
    .catch( err => console.log(err));

    axios.get('https://pokeres.bastionbot.org/images/pokemon/')
    .then((res) => {
      console.log('Server response:', res.data.results);
      this.setState({pokemons: res.data.results });
    })
    .catch( err => console.log(err));


  }

  render(){

    console.log('pokemons:', this.state.pokemons);

    return(
      <div className="App">
        <h1>Pokemons</h1>
        <h3>All Pokemons</h3>
        <ul>
          {
            this.state.pokemons.map(pokemon => {
              return <li key={pokemon.name}>{pokemon.name}</li>
            }) // map
          }
        </ul>
      </div>
    );
  } // render()

} // class PokemonSearch

export default PokemonSearch;
