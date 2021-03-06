export const LOADING_ERROR = "LOADING_ERROR";
export const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
export const LOADING_USER_ERROR = "LOADING_USER_ERROR"; 
export const LOADING_USER_IN_PROGRESS = "LOADING_USER_IN_PROGRESS";
export const LOADING_EXCHANGE_ERROR = "LOADING_EXCHANGE_ERROR";
export const LOADING_EXCHANGE_IN_PROGRESS = "LOADING_EXCHANGE_IN_PROGRESS";
export const ADD_POINTS_ERROR = "ADD_POINTS_ERROR";
export const ADD_POINTS_IN_PROGRESS = "ADD_POINTS_IN_PROGRESS";

export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";

export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const USER_LOADING_SUCCESS = "USER_LOADING_SUCCESS"
export const EXCHANGE_SUCCESS = "EXCHANGE_SUCCESS";
export const HISTORY_LOADING_SUCCESS = "HISTORY_LOADING_SUCCESS";
export const ADD_POINTS_SUCCESS = "ADD_POINTS_SUCCESS";


export const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdmNjZhZjJiNjU3MDAwMWZjZTZjNDciLCJpYXQiOjE2MDIxODQ4Nzl9.d9Fo9paYF9kCpospKG7pglidFsMAXy5BUl6odcuB78o"
}


/***************************************************** Products *********************************************************/

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

export const getProducts = () => {
  const url = "https://coding-challenge-api.aerolab.co/products";
  return fetchProducts(url);
};

export const fetchProducts = (url) => {
  return (dispatch) => {

    dispatch(clearProducts());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(url, {headers})
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((products) => {
        const productsObtained = products.slice(0, 32);
        dispatch(loadingSuccess(productsObtained));
        dispatch(getUser())
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const loadingSuccess = (products) => ({
  type: LOADING_SUCCESS,
  products
});


/****************************************************** User *************************************************************/

export const loadingUserError = (bool) => ({
  type: LOADING_USER_ERROR,
  hasErrored: bool
});

export const loadingUserInProgress = (bool) => ({
  type: LOADING_USER_IN_PROGRESS,
  isLoading: bool
});

export const getUser = () => {
  const url = "https://coding-challenge-api.aerolab.co/user/me";
  return fetchUser(url);
}

export const fetchUser = (url) => {
  return (dispatch) => {

    dispatch(loadingUserError(false));
    dispatch(loadingUserInProgress(true));

    fetch(url, {headers})
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingUserInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((user) => {
        dispatch(userLoadingSuccess(user));
      })
      .catch(() => dispatch(loadingUserError(true)));
  };
};

export const userLoadingSuccess = (user) => ({
  type: USER_LOADING_SUCCESS,
  user
});


/****************************************************** Points *************************************************************/

export const addPointsError = (bool) => ({
  type: ADD_POINTS_ERROR,
  hasErrored: bool
});

export const addPointsInProgress = (bool) => ({
  type: ADD_POINTS_IN_PROGRESS,
  isLoading: bool
});

export const addPoints = (points) => {
  const url = "https://coding-challenge-api.aerolab.co/user/points";
  const data = { amount: points }
  return postPoints(url, data);
}

export const postPoints = (url, data) => {
  return (dispatch) => {

    dispatch(addPointsError(false));
    dispatch(addPointsInProgress(true));

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
      .then((response) => {
        if (!response.ok) {
          console.log("response: ",response)
          throw Error(response.statusText);
        }

        dispatch(addPointsInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((newPoints) => {
        dispatch(addPointsSuccess(newPoints));
        dispatch(getUser());
      })
      .catch(() => dispatch(addPointsError(true)));
  };
};

export const addPointsSuccess = (points) => ({
  type: ADD_POINTS_SUCCESS,
  points
});


/******************************************************** Exchange *************************************************************/

export const loadingExchangeError = (bool) => ({
  type: LOADING_EXCHANGE_ERROR,
  hasErrored: bool
});

export const loadingExchangeInProgress = (bool) => ({
  type: LOADING_EXCHANGE_IN_PROGRESS,
  isLoading: bool
});

export const exchange = (productId) => {
  const url = "https://coding-challenge-api.aerolab.co/redeem";
  const data = {productId: productId}
  return postExchange(url, data);
}

export const postExchange = (url, data) => {
  return (dispatch) => {

    dispatch(loadingExchangeError(false));
    dispatch(loadingExchangeInProgress(true));

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingExchangeInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((result) => {
        dispatch(exchangeSuccess(result));
        dispatch(getUser());
      })
      .catch(() => dispatch(loadingExchangeError(true)));
  };
};

export const exchangeSuccess = (result) => ({
  type: EXCHANGE_SUCCESS,
  result
});


/******************************************************** History *************************************************************/

export const getHistory = () => {
  const url = "https://coding-challenge-api.aerolab.co/user/history";
  return fetchHistory(url);
};

export const fetchHistory = (url) => {
  return (dispatch) => {

    dispatch(clearProducts());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(url, {headers})
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((history) => {
        const historyFiltered = history.slice(-32); // últimos 32 productos canjeados
        dispatch(loadingHistorySuccess(historyFiltered));
        dispatch(getUser());
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const loadingHistorySuccess = (history) => ({
  type: HISTORY_LOADING_SUCCESS,
  history
});
