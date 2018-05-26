import React from 'react';
import PropTypes from 'prop-types';
import RestaurantBox from '../RestaurantBox/RestaurantBox';
import './RestaurantsList.css';

const RestaurantsList = (props) => {
  const restaurantNameFilterValue = props.restaurantNameFilterValue.toLowerCase();
  const { restaurantsError, restaurantCuisineFilterValue, restaurantRatingFilterValue, restaurantDeliveryFilterValue } = props;

  let restaurants = null;
  let restaurantsTitle = null;

  if (restaurantsError !== '') {
    restaurants = 'Loading restaurants failed. Error: ' + restaurantsError;
  } else {
    restaurants = [];

    props.restaurants.forEach(restaurant => {
      if (restaurant.name.toLowerCase().indexOf(restaurantNameFilterValue) === -1) {
        return;
      }

      if (restaurantCuisineFilterValue > 0 && restaurant.cuisine.id !== restaurantCuisineFilterValue) {
        return;
      }

      if (restaurantRatingFilterValue > 0 && Math.round(restaurant.rating) < restaurantRatingFilterValue) {
        return;
      }

      if (restaurantDeliveryFilterValue > 0 && restaurant.maximum_delivery_time > restaurantDeliveryFilterValue) {
        return;
      }

      restaurants.push(
        <RestaurantBox
          key={restaurant.id}
          restaurant={restaurant}
          onRestaurantBoxClick={props.onRestaurantBoxClick}
        />
      );
    });

    restaurantsTitle = 'Showing ' + restaurants.length + ' restaurants';
  }

  return (
    <section className="restaurants-list">
      {restaurantsTitle}
      {restaurants}
    </section>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantsError: PropTypes.string,
  restaurantNameFilterValue: PropTypes.string,
  restaurantCuisineFilterValue: PropTypes.number,
  restaurantRatingFilterValue: PropTypes.number,
  restaurantDeliveryFilterValue: PropTypes.number,
  onRestaurantBoxClick: PropTypes.func,
};

export default RestaurantsList;
