import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/navbar'
function Buy() {
  return (
    <div>
    <Navbar/>
     <div className="products">
     <FontAwesomeIcon icon="user" />
     <h2>BUY</h2>
     <div className="products-container">
     </div>
     </div>
     <a href="" className="cart-btn">
     <div className="float-cart-btn">
     <span><i className="far fa-shopping-cart"></i></span>
     <i className="fas fa-cart-arrow-down"></i>
     </div>
     </a>
    </div>
  )
}

export default Buy