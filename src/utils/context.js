import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { products } from "./productData";

const Cart = createContext();

var Context= ()=>{
  const productData = products.map((product)=>({
    title:product.title,
    old_price:product.old_price
    ,newPrice:product.newPrice
    ,rupess:product.rupess
    ,alt:product.alt
    ,exp_date:product.exp_date
    ,img:product.img
    }))
    // console.log(productData)

    const [state, dispatch]= useReducer(cartReducer, 
        {productData:productData,
        Cart:[]})
        // useReducer(reducer(), initialstate = in this case it is an object)
       console.log(state)
    return <Cart.Provider value={{state, dispatch}}></Cart.Provider>
}
export default Context;

export const CartState=()=>{
    return useContext(Cart)
}