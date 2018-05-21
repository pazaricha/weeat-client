import React, { Component } from 'react';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import PropTypes from 'prop-types';
import RestaurantsMap from '../../components/RestaurantsMap/RestaurantsMap';
import './RestaurantsAndMap.css';

class RestaurantsAndMap extends Component {
  state = {
    activeRestaurantLat: null,
    activeRestaurantLong: null,
    activeRestaurantId: 0,
  }

  handleRestaurantBoxClick = (lat, long, restaurantId) => {
    this.setState({
      activeRestaurantLat: lat,
      activeRestaurantLong: long,
      activeRestaurantId: restaurantId,
    });
  };

  render() {
    return (
      <section className="restaurants-and-map">
        <div className="container">
          <RestaurantsList
            restaurants={this.props.restaurants}
            restaurantsError={this.props.restaurantsError}
            restaurantNameFilterValue={this.props.restaurantNameFilterValue}
            restaurantCuisineFilterValue={this.props.restaurantCuisineFilterValue}
            restaurantRatingFilterValue={this.props.restaurantRatingFilterValue}
            restaurantDeliveryFilterValue={this.props.restaurantDeliveryFilterValue}
            onRestaurantBoxClick={this.handleRestaurantBoxClick}
          />
          <RestaurantsMap
            restaurants={this.props.restaurants}
            activeRestaurantLat={this.state.activeRestaurantLat}
            activeRestaurantLong={this.state.activeRestaurantLong}
            activeRestaurantId={this.state.activeRestaurantId}
          />
        </div>
      </section>
    );
  }
}

RestaurantsAndMap.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantsError: PropTypes.string,
  restaurantNameFilterValue: PropTypes.string,
  restaurantCuisineFilterValue: PropTypes.number,
  restaurantRatingFilterValue: PropTypes.number,
  restaurantDeliveryFilterValue: PropTypes.number,
};

export default RestaurantsAndMap;
