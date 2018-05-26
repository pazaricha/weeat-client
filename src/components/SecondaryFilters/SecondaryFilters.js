import React from 'react';
import PropTypes from 'prop-types';
import './SecondaryFilters.css';

const SecondaryFilters = (props) => {
  this.handleCuisineFilterChange = (e) => {
    props.onRestaurantCuisineFilterChange(parseInt(e.target.value, 10));
  };

  this.handleRatingFilterChange = (e) => {
    props.onRestaurantRatingFilterChange(parseInt(e.target.value, 10));
  };

  this.handleDeliveryFilterChange = (e) => {
    props.onRestaurantDeliveryFilterChange(parseInt(e.target.value, 10));
  };

  let cuisineOptions = null;

  if (props.cuisinesError !== '') {
    cuisineOptions = (
      <option value="-1">{"Cuisines can't be loaded. " + props.cuisinesError.toString()}</option>
    );
  } else {
    cuisineOptions = props.cuisines.map(cuisine => (
      <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>
    ));
  }

  const ratingOptions = [3, 4, 5].map(number => (
    <option key={number + 'stars'} value={number}>{'★'.repeat(number)}</option>
  ));

  const deliveryOptions = [15, 30, 45, 60, 75, 90, 105, 120].map(deliveryMinutes => (
    <option key={deliveryMinutes + 'minutes'} value={deliveryMinutes}>{deliveryMinutes}</option>
  ));

  return (
    <div className="secondary-filters">
      <div className="container">
        <div className="weeat-filter-wrapper">
          <label htmlFor="cuisine">Cuisine</label>
          <select name="cuisine" className="weeat-filter" onChange={this.handleCuisineFilterChange}>
            <option value="0">Choose a cuisine...</option>
            {cuisineOptions}
          </select>
        </div>
        <div className="weeat-filter-wrapper">
          <label htmlFor="rating">Minimal Rating</label>
          <select name="rating" className="weeat-filter" onChange={this.handleRatingFilterChange}>
            <option value="0">How many stars...</option>
            {ratingOptions}
          </select>
        </div>
        <div className="weeat-filter-wrapper">
          <label htmlFor="delivery">Maximum Delivery Time</label>
          <select name="delivery" className="weeat-filter" onChange={this.handleDeliveryFilterChange}>
            <option value="0">How long will it be...</option>
            {deliveryOptions}
          </select>
        </div>
      </div>
    </div>
  );
};

SecondaryFilters.propTypes = {
  cuisines: PropTypes.array.isRequired,
  cuisinesError: PropTypes.string,
  onRestaurantCuisineFilterChange: PropTypes.func.isRequired,
  onRestaurantRatingFilterChange: PropTypes.func.isRequired,
  onRestaurantDeliveryFilterChange: PropTypes.func.isRequired,
};

export default SecondaryFilters;
