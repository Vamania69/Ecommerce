import React, { useContext } from 'react'
import Button from '../components/button'
import Herocontainer from '../components/herocontainer'
import LatestIteams from '../components/latestIteam'
import Category from '../components/category'
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