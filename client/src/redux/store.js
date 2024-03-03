import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from './productSlice'

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
