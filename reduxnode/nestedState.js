const produce = require("immer").produce;
const redux = require("redux");

const createStore = redux.createStore;
const combineRducer = redux.combineReducers;

const initialState = {
  name: "niraj",
  address: {
    street: "aunty ka ghar",
    city: "jaipur",
    state: "rajasthan",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (streetName) => {
  return { type: UPDATE_STREET, payload: streetName };
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const root_reducer = combineRducer({person:reducer});

const store = createStore(root_reducer);
console.log("Initial state ==>",store.getState());
const unSubscribe = store.subscribe(()=>{console.log("updated state ==>",store.getState())})

store.dispatch(updateStreet("my_street"));
store.dispatch(updateStreet("my_new_street"));

unSubscribe();

store.dispatch(updateStreet("my_new_street1")); // after unSubscribe we dont want to listen to the state update anymore, although we can get the updated state value through "store.getState()"

console.log("updated state by getState==>",store.getState());