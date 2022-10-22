import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReportWebVitals from "./reportWebVitals";
// import { Cart } from "./utils/context";
// import  {useReducer } from "react";
// import  {products}  from "./utils/productData";
// import  {cartReducer}  from "./utils/cartReducer";
// export const CountContext = React.createContext()

// const productData = products.map((product)=>({
//       title:product.title,
//       old_price:product.old_price
//       ,newPrice:product.newPrice
//       ,rupess:product.rupess
//       ,alt:product.alt
//       ,exp_date:product.exp_date
//       ,img:product.img
//       }))
      
// const [state, dispatch] =
//   useReducer(cartReducer,
//     {
//       productData: productData,
//       Cart: []
//     })
// console.log(state)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
