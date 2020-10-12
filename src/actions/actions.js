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

export const getNews = () => {
  const url = `https://api.canillitapp.com/latest/${today}`;
  return doFetch(url);
};

export const getNewsByCategory = (categoryId) => {
  const url = `https://api.canillitapp.com/news/category/${categoryId}`;
  return doFetch(url);
};

export const searchByWord = (pathname) => {
  const url = `https://api.canillitapp.com/${pathname}`;
  return doFetch(url);
};

export const doFetch = (url) => {
  return (dispatch) => {
    dispatch(clearProducts());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => {
        const newsFiltered = news.slice(0, 30);
        dispatch(loadingSuccess(newsFiltered));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const loadingSuccess = (news) => ({
  type: LOADING_SUCCESS,
  news
});
