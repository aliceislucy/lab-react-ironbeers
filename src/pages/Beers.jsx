import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {

      this.setState({
          beers : res.data,
      })
    });
  }

  render() {

    return (
    <div>
      <h1>Our beers</h1>
      {this.state.beers.map((beer) => {
        return ( <div>
          <img src={beer.image_url} alt={beer.name} />
          <Link to={`/beer/${beer._id}`}><h2>{beer.name}</h2></Link>
        <p>{beer.tagline}</p>
        <p>by {beer.contributed_by}</p>
       </div>
        )
    })}
    </div>
    )
  }
}
