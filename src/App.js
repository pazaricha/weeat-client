import React, { Component } from 'react';
import Header from './containers/Header/Header';
import RestaurantsAndMap from './containers/RestaurantsAndMap/RestaurantsAndMap';
import axios from './axios';

class App extends Component {
  state = {
    restaurants: [],
    restaurantNameFilterValue: '',
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

  handleResturantNameFilterChange = (restaurantName) => {
    this.setState({ restaurantNameFilterValue: restaurantName });
  }

  render() {
    return (
      <div className="App">
        <Header onRestaurantNameFilterChange={this.handleResturantNameFilterChange}/>
        <RestaurantsAndMap restaurants={this.state.restaurants} restaurantNameFilterValue={this.state.restaurantNameFilterValue} />
      </div>
    );
  }
}

export default App;
