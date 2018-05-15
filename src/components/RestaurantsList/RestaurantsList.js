import React from 'react';
import './RestaurantsList.css';
import RestaurantBox from '../RestaurantBox/RestaurantBox';

const restaurantsList = (props) => {
  const restaurants = props.restaurants.map(restaurant => (
    <RestaurantBox restaurant={restaurant}/>
  ));
  return (
    <section className="restaurant-list">
      {restaurants}
    </section>
  );
}

export default restaurantsList;
