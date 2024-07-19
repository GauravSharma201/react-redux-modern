import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    numOfIceCream: 10
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{state.numOfIceCream--},
        reStock:(state,actions)=>{state.numOfIceCream+=actions.payload}
    }
})

export default iceCreamSlice.reducer

export const {ordered,reStock} = iceCreamSlice.actions;