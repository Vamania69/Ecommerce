import React from 'react'
import '../App.css'
function Button() {
  const change = () => {
    <h1>hello</h1>
    console.log('hello')
  }
  return (
    <div>
      <button type='click' className='primary-btn btn small large'>Sign Up</button>
      <i className="fas fa-arrow-right"></i>
    </div>
  )
}
export default Button