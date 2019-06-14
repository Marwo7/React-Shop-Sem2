import { combineReducers } from "redux";
import { productsReducer, cartReducer } from "./Reducer";
export default combineReducers({
  productsInfo: productsReducer,
  productsInCart: cartReducer
});
