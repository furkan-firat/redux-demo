import { configureStore } from '@reduxjs/toolkit';
import pkg from 'redux-logger';
import { cakeReducer } from './features/cake/cakeSlice.js';
import { iceCreamReducer } from './features/icecream/iceCreamSlice.js';
import { userReducer } from './features/user/userSlice.js';

const { createLogger } = pkg;

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
