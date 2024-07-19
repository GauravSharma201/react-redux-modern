const { createSlice } = require("@reduxjs/toolkit");

const { cakeActions } = require("../cake/cakeSlice.js");

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    reStock: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers:builder=>{builder.addCase(cakeActions.ordered,(state)=>{ // use extra reducers to make your state slice to listen to actions of other state slices
      state.numOfIceCreams--
  })}

//   extraReducers: { // removed form redux tool kit
//     ["cake/ordered"]: (state) => {
//       state.numOfIceCreams--;
//     },
//   },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
