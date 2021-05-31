import axios from 'axios';
import React from 'react';


class SingleBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {

    let id = this.props.match.params.id;

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + id)
      .then((res) => {
        this.setState({
            beer: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.beer) {
        return(
            <p>Getting more infos about {this.state.beer.name}</p>
        )
    }
    return (      
      <div>
        <img src={this.state.beer.image_url} alt="" />
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.first_brewed}</p>
      </div>
    );
  }
}

export default SingleBeer;