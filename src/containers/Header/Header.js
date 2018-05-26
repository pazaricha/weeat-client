import React from 'react';
import './Header.css';
import MainFilter from '../../components/MainFilter/MainFilter';
import SecondaryFilters from '../../components/SecondaryFilters/SecondaryFilters';
import AddRestaurantButton from '../../components/AddRestaurantButton/AddRestaurantButton';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className="header">
    <div className="container">
      <h1 className="logo">WeEat 🥙</h1>
      <h2>It's 12:00 and you're hungry 😛</h2>
      <MainFilter onRestaurantNameFilterChange={props.onRestaurantNameFilterChange} />
      <AddRestaurantButton />
    </div>
    <SecondaryFilters
      cuisines={props.cuisines}
      cuisinesError={props.cuisinesError}
      onRestaurantCuisineFilterChange={props.onRestaurantCuisineFilterChange}
      onRestaurantRatingFilterChange={props.onRestaurantRatingFilterChange}
      onRestaurantDeliveryFilterChange={props.onRestaurantDeliveryFilterChange}
    />
  </header>
);

Header.propTypes = {
  cuisines: PropTypes.array.isRequired,
  cuisinesError: PropTypes.string,
  onRestaurantNameFilterChange: PropTypes.func.isRequired,
  onRestaurantCuisineFilterChange: PropTypes.func.isRequired,
  onRestaurantRatingFilterChange: PropTypes.func.isRequired,
  onRestaurantDeliveryFilterChange: PropTypes.func.isRequired,
};

export default Header;
