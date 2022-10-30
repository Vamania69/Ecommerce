import React from 'react'
import Card from './Card'
import { products } from '../utils/productData'

function Category({ category }) {
  return (
    <div className="category-container">
      <div className="category-1">
        <div className="category-name">
        </div>
        {
          products.slice(0, 4).map((product, i) => {
            return (
              <Card
                id={product.id}
                key={i}
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

export default Category