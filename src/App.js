import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from 'react'
import './App.css';
// import { products } from "./utils/productData";
import Home from './pages/home';
import Checkout from './pages/checkout'
import Shop from './pages/shopping-cart'
// import Wishlist from './pages/Wishlist'
import Wishlist from './pages/Wishlist'
import User from './pages/User'
import Order from './pages/Order'
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
// import {CartState} from './utils/context'
// import { useReducer } from "react";
import { CountContext } from "./utils/context";
import WishlistContext1 from "./utils/wishlistContext";
//toasters
import { ToastContainer } from "react-toastify";

function App() {

  const countContext = useContext(CountContext)
  console.log(countContext)
  return (
    < div className="App" >
      <ToastContainer />
      <WishlistContext1>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exect element=
              {
                <Home />
              }
            />
            <Route path='/' exect element={<Home />} />
            <Route path='/ShoppingCart' element={<Shop />} />
            <Route path="/Order" element={<Order />} />
            <Route path='/checkout' element=
              {
                <Checkout />
              }
            />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/User" element={<User />} />
          </Routes>
          <Footer />
        </Router>
      </WishlistContext1>

    </div >
  );
}

export default App;

