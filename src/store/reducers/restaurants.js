import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  restaurants: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionsTypes.SET_RESTAURANTS:
    return {
      ...state,
      restaurants: action.restaurants,
      error: '',
    };
  case actionsTypes.FETCH_RESTAURANTS_FAILED:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default reducer;
