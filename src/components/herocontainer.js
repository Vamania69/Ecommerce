import React from 'react'
import Slidesshow from './slidesshowdemo'
import '../App.css'

function Herocontainer() {
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