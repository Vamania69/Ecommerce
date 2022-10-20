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
import Hello from "./pages/hello";
import {CartState} from './utils/context'
// import Context from "./utils/context";
// import { Button } from "bootstrap";

// export const Count = React.createContext()
 
//useReducer 
// const initialCount =0
// const reducer= (state, action)=>{
//   switch (action) {
//     case 'increment':
//       return state+1
//     default:
//       return initialState
//   }
// }

function App() {
//   const [value, dispatch]= useReducer(reducer,initialState)
//   const {productItem}= products
//   const [cartCount , SetCartCount] = useState(2);
//    const countHanler=()=>{
//      SetCartCount(cartCount+1)
//    }
// const provider ={cartCount, SetCartCount, countHanler}
// console.log(provider)
//  const {state} = CartState()
//  console.log(state)
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Hello/>
     <Routes>
      <Route path='/' exect element=
      {
        <Home />
      }
      />
      <Route  path='/' exect element={<Home/>} />
      <Route  path='/Shop' element={<Shop/>} />
      <Route path="/Order" element={<Order/>}/>
      <Route path='/checkout' element={
          <Checkout />
      }/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/User" element={<User/>}/>
     </Routes>
    </Router>
    </div>
    
  );
}

export default App;
