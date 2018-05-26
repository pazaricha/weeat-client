import * as actionsTypes from './actionsTypes';

export const nameFilterChange = (filterValue) => {
  return {
    type: actionsTypes.NAME_FILTER_CHANGE,
    filterValue: filterValue,
  };
};

export const cuisineFilterChange = (filterValue) => {
  return {
    type: actionsTypes.CUISINE_FILTER_CHANGE,
    filterValue: filterValue,
  };
};

export const ratingFilterChange = (filterValue) => {
  return {
    type: actionsTypes.RATING_FILTER_CHANGE,
    filterValue: filterValue,
  };
};

export const deliveryFilterChange = (filterValue) => {
  return {
    type: actionsTypes.DELIVERY_FILTER_CHANGE,
    filterValue: filterValue,
  };
};
