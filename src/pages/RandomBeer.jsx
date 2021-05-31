import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        this.setState({
          beer: res.data,
        });
        console.log(this.state.beer)
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.beer) {
      return "BRB we're getting you your random beer";
    }
    
    return (
      <div>
        <h1>Random beer</h1>
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.contributed_by}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.first_brewed}</p>
      </div>
    );
  }
}

export default RandomBeer;