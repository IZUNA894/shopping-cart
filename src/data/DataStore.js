import {combineReducers,createStore} from "redux";
import Data from "./placeholderData.js";

import { ShopReducer} from "./shopReducer.js";
import {CartReducer} from "./cartReducer";
import {CommonReducer} from "./commonReducer"
var initialState = Data();

const reducer = combineReducers({
  ...initialState,
  shop:ShopReducer,
  trolley:CartReducer,

}
)
export const SportsStoreDataStore = createStore(reducer);
