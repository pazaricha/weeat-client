import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantBox.css';
import RestaurantIcon from '../RestaurantIcon/RestaurantIcon';

const RestaurantBox = (props) => {
  const restaurant = props.restaurant;

  return (
    <div className="restaurant-box">
      <RestaurantIcon icon={restaurant.cuisine.name}/>
      <div className="details">
        <h4 title={restaurant.name}>{restaurant.name} <span>{restaurant.tenbis ? 'TENBIS' : ''}</span></h4>
        <p className="rating">Rating: * * * *</p>
      </div>
    </div>
  );
};

RestaurantBox.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantBox;
