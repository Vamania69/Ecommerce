import React from 'react'
import Button from '../components/button'
// import { CardData } from '../components/CardData'
import Herocontainer from '../components/herocontainer'
import LatestIteams from '../components/latestIteam'
import Category from '../components/category'
function index() {
  return (
    <div>
      <Herocontainer/>
      <LatestIteams/>
      <section className='category'>
      <h3>Categoy</h3>
      <Category/>
      <Category/>
      <Category/>
      </section>
      <Button/>
      <Button/>
    </div>
  )
}
export default index