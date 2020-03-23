import {ActionTypes } from "./Types.js";
export const AddToCart = (product,quantity)=>{
  const obj={
  type:ActionTypes.CART_ADD,
  payload:{
         product,
         quantity:1
  }
}
console.log("hello from cart action creator" + JSON.stringify(obj) + quantity);

return obj;
};

export const UpdateCartQuantity = (product,quantity) =>({
  type:ActionTypes.CART_UPDATE,
  payload:{
    product,quantity
  }
});

export const RemoveFromCart=(product)=>({
   type:ActionTypes.CART_CLEAR
})
