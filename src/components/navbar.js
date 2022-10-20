import React, {useState ,useEffect } from 'react'
import '../App.css'
import '../pages/buy'
import { Link } from 'react-router-dom'
// import { UseContext } from '../App'
// import { useContext } from 'react'
// import { Count } from '../App'

const Navbar =({cartCount})=> {
    // const usercount = useContext(Count)
    // console.log(usercount)
    const [navbar, setNavbar] = useState(false)
    const Sticknavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
            console.log(window.scrollY)
            console.log(cartCount)
    } else {
      setNavbar(false)
    }
  }
    useEffect(()=>{
        Sticknavbar()
        window.addEventListener('scroll', Sticknavbar)
    },)
    return (
        <nav className= {navbar? "nav-container sticky ": "nav-container"}  id='nav'>
            <div className="left-nav">
                <img src="" alt="" />
                {
                navbar?<div className="search" >
                <input type="text" placeholder='Search Product'/>
                <button className="primary-btn"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button></div>: <></> 
             }
            </div>
            <div className="right-nav">
                <ul className='nav-pages'>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/Shop"> Shop </Link></li>
                    <li><Link to="/Order"> Orders </Link></li>
                    <li><Link to=""> Checkout </Link></li>
                    <li><Link to="/checkout"><i className="fas fa-shopping-cart"><span className='cart-count'>0</span></i></Link ></li>
                    <li><Link to="/Wishlist"><i className="far fa-heart wishlist"></i></Link></li>
                    <li><Link to="User"><i class="far fa-user"></i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar