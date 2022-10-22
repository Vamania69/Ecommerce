import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css';
// import { products } from "./utils/productData";
import Home from './pages/home';
import Checkout from './pages/checkout'
import Shop from './pages/shop'
import Wishlist from './pages/Wishlist'
import User from './pages/User'
import Order from './pages/Order'
import Navbar from "./components/navbar";
// import {CartState} from './utils/context'
import { useReducer } from "react";
import { products } from "./utils/productData";
// import { CartReducer } from "./utils/cartReducer";
export const CountContext = React.createContext()
function App() {

  const CartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
      case "REMOVE_FROM_CART":
        return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
      default:
        console.log('add to cart')
        return state;
    }
  }
  const productData = products.map((product) => ({
    title: product.title,
    old_price: product.old_price
    , newPrice: product.newPrice
    , rupess: product.rupess
    , alt: product.alt
    , exp_date: product.exp_date
    , img: product.img
  }))
  const [state, dispatch] = useReducer(CartReducer,
    { productData: productData, cart: [] })




  console.log(state)
  return (
    <CountContext.Provider value={{ countState: state, countDispatch: dispatch }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exect element=
              {
                <Home />
              }
            />
            <Route path='/' exect element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path="/Order" element={<Order />} />
            <Route path='/checkout' element=
              {
                <Checkout />
              }
            />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/User" element={<User />} />
          </Routes>
        </Router>
      </div>
    </CountContext.Provider>

  );
}

export default App;

