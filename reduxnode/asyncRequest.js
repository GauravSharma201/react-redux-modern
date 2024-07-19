const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; // Corrected from combineReducer

const FETCH_REQUESTED = "FETCH_REQUESTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
  loading: false,
  user: [],
  error: null,
};

const requestFetch = () => {
  return {
    type: FETCH_REQUESTED,
    payload: null,
  };
};

const successFetch = (user) => {
  return {
    type: FETCH_SUCCESS,
    payload: user,
  };
};

const errorFetch = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(requestFetch());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        let data = resp.data.map(user => user.id);
        dispatch(successFetch(data));
      })
      .catch((error) => {
        dispatch(errorFetch(error.message));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return { ...state, loading: true };

    case FETCH_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };

    case FETCH_ERROR:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };

    default:
      return state; // Add a default case to return the current state
  }
};

// If you have multiple reducers, combine them here
// const rootReducer = combineReducers({ user: reducer });

const store = createStore(reducer, [],applyMiddleware(thunkMiddleware)); // Use rootReducer if combined

const unsubscribe = store.subscribe(() => {
  console.log("Updated state ==> ", store.getState());
});

store.dispatch(fetchUsers());

unsubscribe();
