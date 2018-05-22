import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../components/MapMarker/MapMarker';
import './RestaurantsMap.css';
import { DEFAULT_MAP_PROPS } from '../../constants';

const RestaurantsMap = (props) => {
  const { activeRestaurantLat, activeRestaurantLong, activeRestaurantId } = props;
  let mapProps = {};

  if (activeRestaurantId) {
    mapProps = {
      center: {
        lat: activeRestaurantLat,
        lng: activeRestaurantLong,
      },
      zoom: 16,
    };
  } else {
    mapProps = { ...DEFAULT_MAP_PROPS };
  }

  const mapMarkers = props.restaurants.map(restaurant => (
    <MapMarker key={restaurant.id} lat={restaurant.latitude} lng={restaurant.longitude} id={restaurant.id} icon={restaurant.cuisine.name} active={restaurant.id === activeRestaurantId} />
  ));

  return (
    <div className="map-wrapper" style={{ height: '100vh', width: '60%', display: 'inline-block', verticalAlign: 'top' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCMYVdjkRobvAvklIp0_GHqUNwUA_Zkxc0'
        }}
        defaultCenter={DEFAULT_MAP_PROPS.center}
        defaultZoom={DEFAULT_MAP_PROPS.zoom}
        center={mapProps.center}
        zoom={mapProps.zoom}
      >
        {mapMarkers}
      </GoogleMapReact>
    </div>
  );
};

RestaurantsMap.propTypes = {
  restaurants: PropTypes.array.isRequired,
  activeRestaurantLat: PropTypes.number,
  activeRestaurantLong: PropTypes.number,
  activeRestaurantId: PropTypes.number,
};

export default RestaurantsMap;
