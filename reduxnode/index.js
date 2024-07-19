const redux = require("redux");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// ----- initial states -----

const initial_cake_state = {
  numOfCakes: 10,
};

// ----- action names -----

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCK = "CAKE_RESTOCK";

// ----- action creators -----

const orderCake = () => {
  return { type: CAKE_ORDER, payload: 1 };
};

const restockCakes = (qnty = 1) => {
  return { type: CAKE_RESTOCK, payload: qnty };
};

// ------ reducers ------

const cake_reducer = (state = { ...initial_cake_state }, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };

    case CAKE_RESTOCK:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };

    default:
      return state;
  }
};

const root_reducer = combineReducer({
    cake: cake_reducer
});

const store = createStore(root_reducer);

const unsubcribeStore = store.subscribe(()=>{
    console.log("updated store ==>",store.getState());
})

// ----- action calls ------

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCakes(3));

unsubcribeStore();
