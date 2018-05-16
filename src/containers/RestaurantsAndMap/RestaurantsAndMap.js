import React from 'react';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import PropTypes from 'prop-types';
import './RestaurantsAndMap.css';

const RestaurantsAndMap = (props) => (
  <section className="restaurants-and-map">
    <div className="container">
      <RestaurantsList
        restaurants={props.restaurants}
        restaurantNameFilterValue={props.restaurantNameFilterValue}
        restaurantCuisineFilterValue={props.restaurantCuisineFilterValue}
        restaurantRatingFilterValue={props.restaurantRatingFilterValue}
        restaurantDeliveryFilterValue={props.restaurantDeliveryFilterValue}
      />
    </div>
  </section>
);

RestaurantsAndMap.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurantNameFilterValue: PropTypes.string,
  restaurantCuisineFilterValue: PropTypes.number,
  restaurantRatingFilterValue: PropTypes.number,
  restaurantDeliveryFilterValue: PropTypes.number,
};

export default RestaurantsAndMap;
