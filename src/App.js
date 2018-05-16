import React, { Component } from 'react';
import Header from './containers/Header/Header';
import RestaurantsAndMap from './containers/RestaurantsAndMap/RestaurantsAndMap';
import axios from './axios';

class App extends Component {
  state = {
    restaurants: [],
    cuisines: [],
    restaurantNameFilterValue: '',
    restaurantCuisineFilterValue: 0,
    restaurantRatingFilterValue: 0,
    restaurantDeliveryFilterValue: 0,
  }

  componentDidMount() {
    axios.get('/restaurants.json')
      .then(response => {
        this.setState({ restaurants: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('/cuisines.json')
      .then(response => {
        this.setState({ cuisines: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleResturantNameFilterChange = (restaurantName) => {
    this.setState({ restaurantNameFilterValue: restaurantName });
  }

  handleResturantCuisineFilterChange = (cuisineId) => {
    this.setState({ restaurantCuisineFilterValue: cuisineId });
  }

  handleResturantRatingFilterChange = (numOfStars) => {
    this.setState({ restaurantRatingFilterValue: numOfStars });
  }

  handleResturantDeliveryFilterChange = (deliveryMinutes) => {
    this.setState({ restaurantDeliveryFilterValue: deliveryMinutes });
  }

  render() {
    return (
      <div className="App">
        <Header
          onRestaurantNameFilterChange={this.handleResturantNameFilterChange}
          onRestaurantCuisineFilterChange={this.handleResturantCuisineFilterChange}
          onRestaurantRatingFilterChange={this.handleResturantRatingFilterChange}
          onRestaurantDeliveryFilterChange={this.handleResturantDeliveryFilterChange}
          cuisines={this.state.cuisines}
        />
        <RestaurantsAndMap
          restaurants={this.state.restaurants}
          restaurantNameFilterValue={this.state.restaurantNameFilterValue}
          restaurantCuisineFilterValue={this.state.restaurantCuisineFilterValue}
          restaurantRatingFilterValue={this.state.restaurantRatingFilterValue}
          restaurantDeliveryFilterValue={this.state.restaurantDeliveryFilterValue}
        />
      </div>
    );
  }
}

export default App;
