import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantBox.css';
import RestaurantIcon from '../RestaurantIcon/RestaurantIcon';
import tenbisImage from '../../images/tenbis.jpg';
import ReactStars from 'react-stars';

const RestaurantBox = (props) => {
  const restaurant = props.restaurant;

  this.handleRestaurantBoxClick = () => {
    props.onRestaurantBoxClick(restaurant.latitude, restaurant.longitude, restaurant.id);
  };


  return (
    <div className="restaurant-box" onClick={this.handleRestaurantBoxClick}>
      <RestaurantIcon icon={restaurant.cuisine.name}/>
      <div className="details">
        <div className="restaurant-title">
          <h4 title={restaurant.name}>{restaurant.name}</h4>
          <span>{restaurant.tenbis ? <img className="tenbis" src={tenbisImage} title="Tenbis" alt="Tenbis" /> : ''}</span>
        </div>
        <p className="address">{restaurant.address}</p>
        <ReactStars
          count={5}
          value={Math.round(restaurant.rating)}
          size={16}
          edit={false}
          className={'stars-rating'}
        />
      </div>
    </div>
  );
};

RestaurantBox.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onRestaurantBoxClick: PropTypes.func,
};

export default RestaurantBox;
