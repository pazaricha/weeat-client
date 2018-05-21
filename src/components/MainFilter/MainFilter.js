import React from 'react';
import PropTypes from 'prop-types';
import './MainFilter.css';

const MainFilter = (props) => {
  this.handleFilterTextChange = (e) => {
    props.onRestaurantNameFilterChange(e.target.value);
  };

  return (
    <input
      className="weeat-filter main-filter"
      type="text"
      placeholder="🔍 Find a restaurant"
      onChange={this.handleFilterTextChange}
    />
  );
};

MainFilter.propTypes = {
  onRestaurantNameFilterChange: PropTypes.func.isRequired,
};

export default MainFilter;
