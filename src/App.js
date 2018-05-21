import React, { Component } from 'react';
import Header from './containers/Header/Header';
import RestaurantsAndMap from './containers/RestaurantsAndMap/RestaurantsAndMap';
import axios from './axios';
import { connect } from 'react-redux';
import * as filtersActions from './store/actions/index';

class App extends Component {
  state = {
    restaurants: [],
    cuisines: [],
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

  render() {
    return (
      <div className="App">
        <Header
          onRestaurantNameFilterChange={this.props.onRestaurantNameFilterChange}
          onRestaurantCuisineFilterChange={this.props.onRestaurantCuisineFilterChange}
          onRestaurantRatingFilterChange={this.props.onRestaurantRatingFilterChange}
          onRestaurantDeliveryFilterChange={this.props.onRestaurantDeliveryFilterChange}
          cuisines={this.state.cuisines}
        />
        <RestaurantsAndMap
          restaurants={this.state.restaurants}
          restaurantNameFilterValue={this.props.restaurantNameFilterValue}
          restaurantCuisineFilterValue={this.props.restaurantCuisineFilterValue}
          restaurantRatingFilterValue={this.props.restaurantRatingFilterValue}
          restaurantDeliveryFilterValue={this.props.restaurantDeliveryFilterValue}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    cuisines: state.cuisines,
    restaurantNameFilterValue: state.restaurantNameFilterValue,
    restaurantCuisineFilterValue: state.restaurantCuisineFilterValue,
    restaurantRatingFilterValue: state.restaurantRatingFilterValue,
    restaurantDeliveryFilterValue: state.restaurantDeliveryFilterValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRestaurantNameFilterChange: (restaurantName) => dispatch(filtersActions.nameFilterChange(restaurantName)),
    onRestaurantCuisineFilterChange: (cuisineId) => dispatch(filtersActions.cuisineFilterChange(cuisineId)),
    onRestaurantRatingFilterChange: (numOfStars) => dispatch(filtersActions.ratingFilterChange(numOfStars)),
    onRestaurantDeliveryFilterChange: (deliveryMinutes) => dispatch(filtersActions.deliveryFilterChange(deliveryMinutes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
