import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantsList.css';
import RestaurantBox from '../RestaurantBox/RestaurantBox';

const RestaurantsList = (props) => {
  const restaurants = props.restaurants.map(restaurant => (
    <RestaurantBox key={restaurant.id} restaurant={restaurant}/>
  ));

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
