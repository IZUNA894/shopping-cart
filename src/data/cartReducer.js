import {ActionTypes} from "./Types";
import Data from "./placeholderData.js";

var initialState = Data();
export const CartReducer = (storeData=initialState,action)=>{
  console.log(storeData);

  let newStore={cart:[],cartItems:0,cartPrice:0,...storeData}
  switch(action.type){
    case ActionTypes.CART_ADD:
                  console.log("heloo");
                  const p= action.payload.product;
                  const q=action.payload.quantity;


                  newStore.cart = [...newStore.cart,action.payload.product];

                  newStore.cartItems +=q;
                  newStore.cartPrice +=p.price * q;
                  return newStore;
      case ActionTypes.CART_UPDATE:
                  newStore.cart = newStore.cart.map(item =>{
                    if(item.product.id === action.payload.product.id){
                      const diff = action.payload.quantity  - item.quantity;
                      newStore.cartItems +=diff;
                      newStore.cartPrice +=(item.product.price * diff);
                      return action.payload;
                    }
                    else{
                      return item;
                    }
                  });
                  return newStore;
      case ActionTypes.CART_REMOVE:
                  let selection = newStore.cart.find(item=>
                   item.product.id === action.payload.id);

                   newStore.cartItems -=selection.qeantity;
                   newStore.cartPrice -=selection.quantity * selection.product.price;
                   newStore.cart = newStore.cart.filter(item=>item !== selection);
                   return newStore;
      case ActionTypes.CART_CLEAR:
                    return{...storeData,cart:[],cartItems:0,cartPrice:0}

      default: return storeData || {};

  }
}
