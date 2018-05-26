import * as actionsTypes from './actionsTypes';
import axios from '../../axios';

export const setCuisines = (cuisines) => {
  return {
    type: actionsTypes.SET_CUISINES,
    cuisines: cuisines,
  };
};

export const fetchCuisinesFailed = (error) => {
  return {
    type: actionsTypes.FETCH_CUISINES_FAILED,
    error: error,
  };
};

export const initCuisines = () => {
  return dispatch => {
    axios.get('/cuisines.json')
      .then(response => {
        dispatch(setCuisines(response.data));
      })
      .catch(error => {
        dispatch(fetchCuisinesFailed(error));
      });
  };
};
