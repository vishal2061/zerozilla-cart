import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  products: productReducer,
  cartProducts: cartReducer,
});
