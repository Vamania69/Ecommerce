import React from 'react'
import Card from './Card'
import {products} from '../utils/productData'
function latestIteams(countHandler) {
  return (
    <section className='latest-container' >
    <h3>Latest Products</h3>
     <div className="item-container">
     {
      products?.map((product)=>
      {
        return(
          <Card
          title={product.title}
          old_price={product.old_price}
          newPrice={product.newPrice}
          rupess={product.rupess}
          alt={product.alt}
          exp_date={product.exp_date}
          img={product.img}
          countHandler={countHandler}
        />
        )
      })
     }
     </div>
    </section>
  )
}

export default latestIteams