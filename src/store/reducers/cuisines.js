import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
  cuisines: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionsTypes.SET_CUISINES:
    return {
      ...state,
      cuisines: action.cuisines,
      error: '',
    };
  case actionsTypes.FETCH_CUISINES_FAILED:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default reducer;
