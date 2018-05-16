import React from 'react';
import './MainFilter.css'

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


export default MainFilter;
