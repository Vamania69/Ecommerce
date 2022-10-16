import React from 'react'
import Button from '../components/button'
import Herocontainer from '../components/herocontainer'
import LatestIteams from '../components/latestIteam'
import Category from '../components/category'
import ShoppingCart from '../components/shoppingCart'
import Navbar from '../components/navbar'
function index() {
  return (
    <div>
      <Navbar/>
      <Herocontainer/>
      <LatestIteams/>
      <section className='category'>
      <h3>Category</h3>
      <Category/>
      </section>
      <Button/>
      {<ShoppingCart/>
  }
    </div>
  );
}
export default index;
