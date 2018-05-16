import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantsList.css';
import RestaurantBox from '../RestaurantBox/RestaurantBox';

const RestaurantsList = (props) => {
  const restaurantNameFilterValue = props.restaurantNameFilterValue;
  const restaurants = [];

  props.restaurants.forEach(restaurant => {
    if (restaurant.name.indexOf(restaurantNameFilterValue) === -1) {
      return;
    }

    restaurants.push(
      <RestaurantBox key={restaurant.id} restaurant={restaurant}/>
    );
  });

  return (
    <section className="restaurant-list">
      {restaurants}
    </section>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantsList;
