import { combineReducers } from "redux";
import {
  LOADING_ERROR,
  LOADING_SUCCESS,
  LOADING_IN_PROGRESS,
  LOADING_EXCHANGE_ERROR,
  LOADING_EXCHANGE_IN_PROGRESS,
  LOADING_USER_ERROR,
  LOADING_USER_IN_PROGRESS,
  CLEAR_PRODUCTS,
  USER_LOADING_SUCCESS,
  HISTORY_LOADING_SUCCESS,
  ADD_POINTS_SUCCESS,
  EXCHANGE_SUCCESS,
  ADD_POINTS_ERROR,
  // ADD_POINTS_IN_PROGRESS
} from "../actions/actions";


const loadingError = (state = false, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case LOADING_IN_PROGRESS:
      return action.isLoading;
    default:
      return state;
  }
};


const loadingExchangeError = (state = false, action) => {
  switch (action.type) {
    case LOADING_EXCHANGE_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingExchangeInProgress = (state = false, action) => {
  switch (action.type) {
    case LOADING_EXCHANGE_IN_PROGRESS:
      return action.isLoading;
    default:
      return state;
  }
};

const loadingUserError = (state = false, action) => {
  switch (action.type) {
    case LOADING_USER_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingUserInProgress = (state = false, action) => {
  switch (action.type) {
    case LOADING_USER_IN_PROGRESS:
      return action.isLoading;
    default:
      return state;
  }
};

const addPointsError = (state = false, action) => {
  switch (action.type) {
    case ADD_POINTS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

// const addPointsInProgress = (state = false, action) => {
//   switch (action.type) {
//     case ADD_POINTS_IN_PROGRESS:
//       return action.isLoading;
//     default:
//       return state;
//   }
// };

const products = (state = [], action) => {
  switch (action.type) {
    case LOADING_SUCCESS:
      return action.products;

    case CLEAR_PRODUCTS:
      return [];

    default:
      return state;
  }
};

const user = (state = [], action) => {
  switch (action.type) {
    case USER_LOADING_SUCCESS:
      return action.user;

    default:
      return state;
  }
};

const history = (state = [], action) => {
  switch (action.type) {
    case HISTORY_LOADING_SUCCESS:
      return action.history;

    default:
      return state;
  }
};

const points = (state = [], action) => {
  switch (action.type) {
    case ADD_POINTS_SUCCESS:
      return action.points;

    default:
      return state;
  }
};

const exchange = (state = [], action) => {
  switch (action.type) {
    case EXCHANGE_SUCCESS:
      return action.result;

    default:
      return state;
  }
};

export default combineReducers({
  products,
  loadingError,
  loadingInProgress,
  exchange,
  loadingExchangeError,
  loadingExchangeInProgress,
  user,
  loadingUserError,
  loadingUserInProgress,
  history,
  points,
  addPointsError
  // addPointsInProgress
});
