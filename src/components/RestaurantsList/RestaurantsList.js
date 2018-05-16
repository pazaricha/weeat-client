import React from 'react';
import PropTypes from 'prop-types';
import RestaurantBox from '../RestaurantBox/RestaurantBox';
import './RestaurantsList.css';

const RestaurantsList = (props) => {
  const restaurantNameFilterValue = props.restaurantNameFilterValue.toLowerCase();
  const restaurantCuisineFilterValue = props.restaurantCuisineFilterValue;
  const restaurantRatingFilterValue = props.restaurantRatingFilterValue;
  const restaurantDeliveryFilterValue = props.restaurantDeliveryFilterValue;
  const restaurants = [];

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
      <RestaurantBox key={restaurant.id} restaurant={restaurant}/>
    );
  });

  return (
    <section className="restaurant-list">
      Showing {restaurants.length} restaurants
      {restaurants}
    </section>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantNameFilterValue: PropTypes.string,
  restaurantCuisineFilterValue: PropTypes.number,
  restaurantRatingFilterValue: PropTypes.number,
  restaurantDeliveryFilterValue: PropTypes.number,
};

export default RestaurantsList;
