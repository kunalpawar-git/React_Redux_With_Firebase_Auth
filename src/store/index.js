import thunk from "redux-thunk";
import rootReducer from "./reducers";
 import logger from "redux-logger";
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:rootReducer,
   middleware: [thunk, logger],
  })