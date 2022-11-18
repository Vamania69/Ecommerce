import React, { useState, useEffect } from 'react'
import '../App.css'
import '../pages/buy'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CountContext } from '../utils/context'

const Navbar = () => {
    //cart state 
    const countContext = useContext(CountContext)

    const [navbar, setNavbar] = useState(false)
    const Sticknavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        Sticknavbar()
        window.addEventListener('scroll', Sticknavbar)
    })
    return (
        <nav className={navbar ? "nav-container sticky " : "nav-container"} id='nav'>
            <div className="left-nav">
                <img src="" alt="" />
                {
                    navbar ? <div className="search" >
                        <input type="text" placeholder='Search Product' />
                        <button className="primary-btn"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button></div> : <></>
                }
            </div>
            <div className="right-nav">
                <ul className='nav-pages'>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/Shop"> Shop </Link></li>
                    <li><Link to="/Order"> Orders </Link></li>
                    <li><Link to="/Checkout"> Checkout </Link></li>
                    <li><Link to="/ShoppingCart"><i className="fas fa-shopping-cart"><span className='cart-count'>{countContext.countState.cart.length}</span></i></Link ></li>
                    <li><Link to="/Wishlist"><i className="far fa-heart wishlist"></i></Link></li>
                    <li><Link title='signed in' to="User"><i className="far fa-user"></i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar