import React, { Component } from 'react';
import Header from './containers/Header/Header';
import RestaurantsAndMap from './containers/RestaurantsAndMap/RestaurantsAndMap';
import axios from './axios';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    this.props.onInitRestaurants();
    this.props.onInitCuisines();
  }

  render() {
    return (
      <div className="App">
        <Header
          onRestaurantNameFilterChange={this.props.onRestaurantNameFilterChange}
          onRestaurantCuisineFilterChange={this.props.onRestaurantCuisineFilterChange}
          onRestaurantRatingFilterChange={this.props.onRestaurantRatingFilterChange}
          onRestaurantDeliveryFilterChange={this.props.onRestaurantDeliveryFilterChange}
          cuisines={this.props.cuisines}
          cuisinesError={this.props.cuisinesError}
        />
        <RestaurantsAndMap
          restaurants={this.props.restaurants}
          restaurantsError={this.props.restaurantsError}
          restaurantNameFilterValue={this.props.restaurantNameFilterValue}
          restaurantCuisineFilterValue={this.props.restaurantCuisineFilterValue}
          restaurantRatingFilterValue={this.props.restaurantRatingFilterValue}
          restaurantDeliveryFilterValue={this.props.restaurantDeliveryFilterValue}
        />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantsError: PropTypes.string,
  cuisines: PropTypes.array.isRequired,
  cuisinesError: PropTypes.string,
  onInitRestaurants: PropTypes.func.isRequired,
  onInitCuisines: PropTypes.func.isRequired,
  onRestaurantNameFilterChange: PropTypes.func.isRequired,
  onRestaurantCuisineFilterChange: PropTypes.func.isRequired,
  onRestaurantRatingFilterChange: PropTypes.func.isRequired,
  onRestaurantDeliveryFilterChange: PropTypes.func.isRequired,
  restaurantNameFilterValue: PropTypes.string,
  restaurantCuisineFilterValue: PropTypes.number,
  restaurantRatingFilterValue: PropTypes.number,
  restaurantDeliveryFilterValue: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants,
    restaurantsError: state.restaurants.error,
    cuisines: state.cuisines.cuisines,
    cuisinesError: state.cuisines.error,
    restaurantNameFilterValue: state.filters.restaurantNameFilterValue,
    restaurantCuisineFilterValue: state.filters.restaurantCuisineFilterValue,
    restaurantRatingFilterValue: state.filters.restaurantRatingFilterValue,
    restaurantDeliveryFilterValue: state.filters.restaurantDeliveryFilterValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitRestaurants: () => dispatch(actions.initRestaurants()),
    onInitCuisines: () => dispatch(actions.initCuisines()),
    onRestaurantNameFilterChange: (restaurantName) => dispatch(actions.nameFilterChange(restaurantName)),
    onRestaurantCuisineFilterChange: (cuisineId) => dispatch(actions.cuisineFilterChange(cuisineId)),
    onRestaurantRatingFilterChange: (numOfStars) => dispatch(actions.ratingFilterChange(numOfStars)),
    onRestaurantDeliveryFilterChange: (deliveryMinutes) => dispatch(actions.deliveryFilterChange(deliveryMinutes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
