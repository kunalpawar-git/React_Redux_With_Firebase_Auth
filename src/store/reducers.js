import { combineReducers } from "redux";
import userReducer from "../Modules/Auth/Reducer/Authreducer";
import {productReducer,selectedProductReducer} from "../Modules/products/reducer/productReducer"
const rootReducer = combineReducers({
  user: userReducer,
  allProducts: productReducer,
  product: selectedProductReducer,
})

export default rootReducer;
