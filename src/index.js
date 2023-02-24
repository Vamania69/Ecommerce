import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReportWebVitals from "./reportWebVitals";
import { CountContext } from "./utils/context";
import Context from "./utils/context";
import { products } from "./utils/productData";
import Wishlist from "./pages/Wishlist";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

// axios.interceptors.request.use(
//   config => {
//     console.log(config)
//     return config
//   },
//   error => {
//     console.log(error)
//     Promise.reject(error)
//   }
// )
root.render(

  <React.StrictMode>
    <Context>
      <App />
    </Context>

  </React.StrictMode>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
