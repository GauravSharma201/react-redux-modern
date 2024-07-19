const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    numOfCakes:10
}

const cakeSlice = createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCakes = state.numOfCakes - 1;
        },
        reStock:(state,action)=>{
            state.numOfCakes = state.numOfCakes + action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions