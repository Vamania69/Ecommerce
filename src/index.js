import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext, useContext, useReducer } from "react";
import reportWebVitals from "./reportWebVitals";
import {Context} from "./utils/context";
import { products } from "./utils/productData";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Cart = createContext();
const ContextPro=()=>{
const [state, dispatch]= useReducer(cartReducer, 
  {productData:products,
  Cart:[]})
  // useReducer(reducer(), initialstate = in this case it is an object)
  console.log(state)
  return(
     <Cart.Provider value={{state, dispatch}}></Cart.Provider>
  )
}
export default ContextPro
  
root.render(
  <React.StrictMode>
  <Context>
  <App/>
  </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
