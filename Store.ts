import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Reducers/User';
import configReducer from './Reducers/Config';
// Configure store with userReducer
const store = configureStore({
  reducer: {
    user: userReducer, // Assign the reducer with the proper key
    config: configReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
