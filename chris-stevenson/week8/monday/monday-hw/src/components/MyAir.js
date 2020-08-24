import React from 'react';
import axios from 'axios';

class MyAir extends React.Component{

  state = {
    result: {
      date: '',
      coordinates: '',
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      axios.get(`https://api.openaq.org/v1/measurements?coordinates=${lat},${long}&radius=10000`)
      .then(data => {
        console.log(data.data.results[0]);
        this.setState({result: data.data.results[0]})
      })
      .catch(err => console.log(err));
    });
  }

  render(){
    return(
      <div>
        <h1>City: {this.state.result.city}</h1>
        <h3>Measurements Taken</h3>
        <p>Date: {this.state.result.date.local}</p>
        <h4>{this.state.result.parameter}: {this.state.result.value}{this.state.result.unit}</h4>
        <h3>Coordinates</h3>
        <p>Latitude: {this.state.result.coordinates.latitude}</p>
        <p>Longitude: {this.state.result.coordinates.longitude}</p>

      </div>
    );
  }//render
}

export default MyAir
