import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReportWebVitals from "./reportWebVitals";
import { CountContext } from "./utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountContext.Provider>
      <App />
    </CountContext.Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
