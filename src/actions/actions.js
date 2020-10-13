import { today } from "../scripts/data";
export const LOADING_ERROR = "LOADING_ERROR";
export const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const LOADING_SUCCESS = "LOADING_SUCCESS";

export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const GET_HISTORY = "GET_HISTORY";
export const ADD_POINTS = "ADD_POINTS";
export const EXCHANGE = "EXCHANGE";
export const GET_PRODUCTS = "GET_PRODUCTS";


export const loadingError = (bool) => ({
  type: LOADING_ERROR,
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: LOADING_IN_PROGRESS,
  isLoading: bool
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});

export const headers = {
  "Content-Type": "application/json",
   Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdmNjZhZjJiNjU3MDAwMWZjZTZjNDciLCJpYXQiOjE2MDIxODQ4Nzl9.d9Fo9paYF9kCpospKG7pglidFsMAXy5BUl6odcuB78o"
}

export const getProducts = () => {
  const url = "https://coding-challenge-api.aerolab.co/products";
  return fetchProducts(url);
};

// export const addPoints = () => {
//   const url = "https://coding-challenge-api.aerolab.co/user/points";
//   return postPoints(url);
// }

// export const getUser = () => {
//   const url = "https://coding-challenge-api.aerolab.co/user/me";
//   return fetchUser(url);
// }


export const fetchProducts = (url) => {
  return (dispatch) => {
    dispatch(clearProducts());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(url, headers)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((products) => {
        const productsFiltered = products.slice(0, 30);
        dispatch(loadingSuccess(productsFiltered));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const loadingSuccess = (products) => ({
  type: LOADING_SUCCESS,
  products
});
