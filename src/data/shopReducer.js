import {ActionTypes} from "./Types.js"
import Data from "./placeholderData.js";

var initialState = Data();
export const ShopReducer =(storeData=initialState,action)=>{
  //console.log(Data);
  let newStore={cart:[],cartItems:0,cartPrice:0,...storeData}

  switch(action.type){
    case "ActionTypes.LOAD_DATA" :return {
                                          ...storeData,
                                          [action.payload.dataType]:action.payload.data};
                                         
    default:return storeData || {};
  }
}
