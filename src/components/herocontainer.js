import React from 'react'
import Slidesshow from './slidesshowdemo'
import '../App.css'
import { CartState } from '../utils/context'

// import Context from "./utils/context";


function Herocontainer() {
  
  //  const {state}= CartState();
  //  console.log(state)
  //  console.log(productData)
  return (
    <>
    {
      <header className='background-img'>
      <div className="heroSection">
      <div className="slideshow-container">
      <Slidesshow/>
      </div>
      </div>
    
      </header>
    }
    </>
    
  )

}
export default Herocontainer