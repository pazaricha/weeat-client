import React from 'react';
import './RestaurantBox.css';

const restaurantBox = (props) => {
  const restaurant = props.restaurant;

  return (
    <div className="restaurant-box">
      <span className="icon">A</span>
      <div className="details">
        <h4>{restaurant.name} <span>{restaurant.tenbis ? 'TENBIS' : ''}</span></h4>
        <p>Rating: * * * *</p>
      </div>
    </div>
  );
}

export default restaurantBox;
