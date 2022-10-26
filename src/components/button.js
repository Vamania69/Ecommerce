import React from 'react'
import '../App.css'
function Button(props) {
  // console.log(props)
  // console.log(props.value)
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>{props.value}</button>
    </div>
  )
}
export default Button