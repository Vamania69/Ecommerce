import React, { useContext } from 'react'
import { CartState, CountContext } from '../utils/context'
import Button from '../components/button'
import Herocontainer from '../components/herocontainer'
import LatestIteams from '../components/latestIteam'
import Category from '../components/category'
import Context from '../utils/context'
// import { WishlistContext } from '../utils/wishlistContext'
const Home = () => {

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