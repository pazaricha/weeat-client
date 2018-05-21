import React from 'react';
import PropTypes from 'prop-types';
import RestaurantIcon from '../RestaurantIcon/RestaurantIcon';
import classNames from 'classnames';
import './MapMarker.css';

const MapMarker = (props) => {
  const markerClasses = classNames({
    'map-marker': true,
    active: props.active,
  });

  return (
    <div className={markerClasses}>
      <RestaurantIcon icon={props.icon}/>
    </div>
  );
};

MapMarker.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.bool,
};

export default MapMarker;
