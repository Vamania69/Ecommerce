import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from 'react'
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
import { CartReducer } from "./utils/cartReducer";
import Context, { CountContext } from "./utils/context";
// export const CountContext = React.createContext()
function App() {
  // const CartReducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD_TO_CART":
  //       return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
  //     case "REMOVE_FROM_CART":
  //       return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
  //     default:
  //       console.log('add to cart')
  //       return state;
  //   }
  // }

  // const productData = products.map((product) => ({
  //   title: product.title
  //   , old_price: product.old_price
  //   , newPrice: product.newPrice
  //   , rupess: product.rupess
  //   , alt: product.alt
  //   , exp_date: product.exp_date
  //   , img: product.img
  // }))
  // const [state, dispatch] = useReducer(CartReducer,
  //   { productData: products, cart: [] })
  // console.log(state)
  const countContext = useContext(CountContext)
  console.log(countContext)
  return (
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

  );
}

export default App;

