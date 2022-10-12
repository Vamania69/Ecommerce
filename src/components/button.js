import React from 'react'
import '../App.css'
function Button() {
  const change=()=>{
    <h1>hello</h1>
    console.log('hello')}
  return (
    <div>
    <button type='click' onClick={change()} className='primary-btn btn small large'>Sign Up</button>
    <button className='secondary-btn btn small large'>Add to cart</button>
    <i class="fas fa-arrow-right"></i>
    </div>
  )
}
export default Button