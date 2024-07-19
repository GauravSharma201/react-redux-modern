const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice.js");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice.js");

const userReducer = require('../features/users/usersSlice.js');

// const reduxLogger = require("redux-logger"); // introducing logger 

// const logger = reduxLogger.createLogger(); // introducing logger

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer
  },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger), // introducing logger
});

module.exports = store;
