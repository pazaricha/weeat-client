import * as actionsTypes from './actionsTypes';
import axios from '../../axios';

export const setRestaurants = (restaurants) => {
  return {
    type: actionsTypes.SET_RESTAURANTS,
    restaurants: restaurants,
  };
};

export const fetchRestaurantsFailed = (error) => {
  return {
    type: actionsTypes.FETCH_RESTAURANTS_FAILED,
    error: error,
  };
};

export const initRestaurants = () => {
  return dispatch => {
    axios.get('/restaurants.json')
      .then(response => {
        dispatch(setRestaurants(response.data));
      })
      .catch(error => {
        dispatch(fetchRestaurantsFailed(error));
      });
  };
};
