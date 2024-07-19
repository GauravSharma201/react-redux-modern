import {configureStore} from "@reduxjs/toolkit"

import { cakeReducer } from "../feature/cake/cakeSlice.js";
import { iceCreamReducer } from "../feature/iceCream/iceCreamSlice.js";
import { userReducer } from "../feature/user/userSlice.js";


const store = configureStore({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})

export default store

