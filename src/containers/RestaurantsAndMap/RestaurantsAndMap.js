import React from 'react';
import './RestaurantsAndMap.css';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';

const RestaurantsAndMap = (props) => (
  <section className="restaurants-and-map">
    <div className="container">
      <RestaurantsList restaurants={props.restaurants} />
    </div>
  </section>
);

export default RestaurantsAndMap;