import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantBox.css';
import RestaurantIcon from '../RestaurantIcon/RestaurantIcon';
import tenbis_image from '../../images/tenbis.jpg'

const RestaurantBox = (props) => {
  const restaurant = props.restaurant;

  return (
    <div className="restaurant-box">
      <RestaurantIcon icon={restaurant.cuisine.name}/>
      <div className="details">
        <div className="restaurant-title">
          <h4 title={restaurant.name}>{restaurant.name}</h4>
          <span>{restaurant.tenbis ? <img className="tenbis" src={tenbis_image} title="Tenbis" /> : ''}</span>
        </div>
        <p className="rating">Rating: * * * *</p>
      </div>
    </div>
  );
};

RestaurantBox.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantBox;
