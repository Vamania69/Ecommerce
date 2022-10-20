import React from 'react'
  import Card from './Card'
import {products} from '../utils/productData'

function category({category}) {
  return (
    <div className="category-container">
    <div className="category-1">
    <div className="category-name">
    </div>
    {
      products.slice(0,4).map((product)=>
      {
        return(
          <Card
          title={product.title}
          old_price={product.old_price}
          newPrice={product.newPrice}
          rupess={product.rupess}
          alt={product.alt}
          exp_date={product.exp_date}
        />
        )
      })
     }
    </div>
   </div>
  )
}

export default category