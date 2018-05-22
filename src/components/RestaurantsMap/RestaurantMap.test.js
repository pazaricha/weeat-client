import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RestaurantsMap from './RestaurantsMap';
import GoogleMapReact from 'google-map-react';
import { DEFAULT_MAP_PROPS } from '../../constants';

configure({ adapter: new Adapter() });

describe('<RestaurantsMap />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RestaurantsMap restaurants={[]}  />);
  });

  it('should contain a GoogleMapReact component', () => {
    expect(wrapper.find(GoogleMapReact)).toHaveLength(1);
  });

  describe('GoogleMapReact props', () => {
    let googleMapProps;

    beforeEach(() => {
      googleMapProps = wrapper.find(GoogleMapReact).props()
    });

    describe('when activeRestaurantId is null', () => {
      it('should set the GoogleMapReact center and zoom props to the value of DEFAULT_MAP_PROPS.center and DEFAULT_MAP_PROPS.zoom', () => {
        expect(googleMapProps.zoom).toEqual(DEFAULT_MAP_PROPS.zoom);
        expect(googleMapProps.center).toEqual(DEFAULT_MAP_PROPS.center);
      });
    });

    describe('when activeRestaurantId is present', () => {
      const restaurantProps = {
        activeRestaurantId: 1,
        activeRestaurantLat: 10,
        activeRestaurantLong: 20
      }

      beforeEach(() => {
        wrapper.setProps(restaurantProps);
        googleMapProps = wrapper.find(GoogleMapReact).props()
      });

      it('should set the GoogleMapReact center prop to {lat: activeRestaurantLat lng: activeRestaurantLong}', () => {
        expect(googleMapProps.center).toEqual({ lat: restaurantProps.activeRestaurantLat, lng: restaurantProps.activeRestaurantLong });
      });

      it('should set the GoogleMapReact zoom prop to 16', () => {
        expect(googleMapProps.zoom).toEqual(16);
      });
    });
  });

});
