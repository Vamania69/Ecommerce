import React from 'react'
// import { useState,useEffect } from 'react'
import Navbar from './navbar'
// import axios from 'axios'
// import '../img/ffd20ed3e153540fca6b8f400e2d61e1.jpg'
function HeroSection() {
// const [loading ,setLoading]=useState(true)
// const [error, setError]= useState('')
// const [post, setPost]=  useState({})
// useEffect(()=>{
//    axios.get('https://jsonplaceholder.typicode.com/photos/1')
//    .then(response=>{
//       setLoading(false)
//       setPost(response.data)
//       setError('')
//    })
//    .catch(error=>{
//        setLoading(false)
//        setPost({})
//        setError('somting went wrong')
//    })
// },[])
  return (
    <div >
    <header className='background-img'>
    <div className="heroSection">
    <Navbar/>
    <div className="left-hero">
    <h1>Grab your deals  
     </h1>
    </div>
    </div>
    </header>
    <input></input>
    </div>
  )
}

export default HeroSection()