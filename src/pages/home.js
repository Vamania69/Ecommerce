import React, { useContext } from 'react'
import { CartState } from '../utils/context'
import Button from '../components/button'
import Herocontainer from '../components/herocontainer'
import LatestIteams from '../components/latestIteam'
import Category from '../components/category'
import Context from '../utils/context'
import { CountContext } from '../App'

// import Navbar from '../components/navbar'
const Home = () => {
  const countContext = useContext(CountContext)
  // console.log(countContext.countState)
  // const productData = countContext.countState.productData
  // //  const {state}= CartState();
  // //  console.log(state)
  // console.log(productData)
  return (
    <div>
      <Herocontainer />
      <LatestIteams />
      <section className='category'>
        <h3>Category</h3>
        <Category />
      </section>
      <Button />
    </div>
  )
}
export default Home