import React from 'react';
import './SecondaryFilters.css';

const secondaryFilters = (props) => (
  <div className="secondary-filters">
    <div className="container">
      <input type="text" placeholder="input 1" className="weeat-filter" />
      <input type="text" placeholder="input 2" className="weeat-filter"/>
      <input type="text" placeholder="input 3" className="weeat-filter"/>
    </div>
  </div>
);

export default secondaryFilters;
