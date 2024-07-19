const store = require("./app/store.js");
const {cakeActions} = require("./features/cake/cakeSlice.js");
const {iceCreamActions} = require("./features/iceCream/iceCreamSlice.js");
const {fetchUsers} = require("./features/users/usersSlice.js");

console.log("initial state ===>",store.getState());

const unSubscribe = store.subscribe(
    ()=>{
    console.log("updated state ==>",store.getState());
}
);

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStock(3));


store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.reStock(3));

store.dispatch(fetchUsers());

unSubscribe();