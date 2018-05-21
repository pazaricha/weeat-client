import React from 'react';
import PropTypes from 'prop-types';
import RestaurantIcon from '../RestaurantIcon/RestaurantIcon';
import './MapMarker.css';

const MapMarker = (props) => {
  const activeClass = props.active ? 'active' : '';

  return (
    <div className={'map-marker ' + activeClass}>
      <RestaurantIcon icon={props.icon}/>
    </div>
  );
};

MapMarker.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.bool,
};

export default MapMarker;
