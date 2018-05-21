import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  restaurants: [],
  cuisines: [],
  restaurantNameFilterValue: '',
  restaurantCuisineFilterValue: 0,
  restaurantRatingFilterValue: 0,
  restaurantDeliveryFilterValue: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionsTypes.NAME_FILTER_CHANGE:
    return {
      ...state,
      restaurantNameFilterValue: action.filterValue,
    };
  case actionsTypes.CUISINE_FILTER_CHANGE:
    return {
      ...state,
      restaurantCuisineFilterValue: action.filterValue,
    };
  case actionsTypes.RATING_FILTER_CHANGE:
    return {
      ...state,
      restaurantRatingFilterValue: action.filterValue,
    };
  case actionsTypes.DELIVERY_FILTER_CHANGE:
    return {
      ...state,
      restaurantDeliveryFilterValue: action.filterValue,
    };
  default:
    return state;
  }
};

export default reducer;
