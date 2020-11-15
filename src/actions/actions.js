export const LOADING_ERROR = "LOADING_ERROR";
export const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const LOADING_SUCCESS = "LOADING_SUCCESS";

export const USER_LOADING_SUCCESS = "USER_LOADING_SUCCESS"
export const HISTORY_LOADING_SUCCESS = "HISTORY_LOADING_SUCCESS";
export const ADD_POINTS_SUCCESS = "ADD_POINTS_SUCCESS";
export const EXCHANGE_SUCCESS = "EXCHANGE_SUCCESS";


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
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdmNjZhZjJiNjU3MDAwMWZjZTZjNDciLCJpYXQiOjE2MDIxODQ4Nzl9.d9Fo9paYF9kCpospKG7pglidFsMAXy5BUl6odcuB78o"
}

/********************************************************** Products *********************************************************/

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
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const loadingSuccess = (products) => ({
  type: LOADING_SUCCESS,
  products
});

/********************************************************** User *************************************************************/

export const getUser = () => {
  const url = "https://coding-challenge-api.aerolab.co/user/me";
  return fetchUser(url);
}

export const fetchUser = (url) => {
  return (dispatch) => {

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
      .then((user) => {
        dispatch(userLoadingSuccess(user));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const userLoadingSuccess = (user) => ({
  type: USER_LOADING_SUCCESS,
  user
});


/******************************************************** Points *************************************************************/

export const addPoints = (points) => {
  const url = "https://coding-challenge-api.aerolab.co/user/points";
  const data = { amount: points }
  return postPoints(url, data);
}

// export const headers = {
//   "Content-Type": "application/json",
//   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdmNjZhZjJiNjU3MDAwMWZjZTZjNDciLCJpYXQiOjE2MDIxODQ4Nzl9.d9Fo9paYF9kCpospKG7pglidFsMAXy5BUl6odcuB78o"
// }

export const postPoints = (url, data) => {
  console.log("Entro en postPoints con: ", data)
  return (dispatch) => {
    console.log("Entro en (dispatch) => {}")
    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(url, {
      // mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
      .then((response) => {
        if (!response.ok) {
          console.log("response: ",response)
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((newPoints) => {
        console.log("points resultado: ", newPoints);
        dispatch(addPointsSuccess(newPoints));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

// {
//   "message": "Points Updated",
//   "new Points": 2000
// }

export const addPointsSuccess = (points) => ({
  type: ADD_POINTS_SUCCESS,
  points
});


/******************************************************** History *************************************************************/

export const getHistory = () => {
  const url = "https://coding-challenge-api.aerolab.co/user/history";
  return fetchHistory(url);
};

export const fetchHistory = (url) => {
  return (dispatch) => {

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
        const historyFiltered = history.slice(0, 32);
        dispatch(loadingHistorySuccess(historyFiltered));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const loadingHistorySuccess = (history) => ({
  type: HISTORY_LOADING_SUCCESS,
  history
});


/******************************************************** Redeem *************************************************************/

export const exchange = (product) => {
  const url = "https://coding-challenge-api.aerolab.co/redeem";
  const data = {productId: product._id}
  return postExchange(url, data);
}

export const postExchange = (url, data) => {
  return (dispatch) => {

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...headers
      }})
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((result) => {
        dispatch(exchangeSuccess(result));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

// {
//   "message": "You've redeem the product successfully"
// }

export const exchangeSuccess = (result) => ({
  type: EXCHANGE_SUCCESS,
  result
});


