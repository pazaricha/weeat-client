import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import RestaurantsAndMap from './containers/RestaurantsAndMap/RestaurantsAndMap';
import axios from './axios';

class App extends Component {
  state = {
    restaurants: [],
  }

  componentDidMount() {
    axios.get('/restaurants.json')
      .then(response => {
        this.setState({ restaurants: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <RestaurantsAndMap restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
