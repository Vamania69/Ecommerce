import React, { useEffect, useReducer, useState } from 'react'
import Card from './Card'
// import { products } from '../utils/productData'
import axios from 'axios'

function LatestIteams() {
  //fetching data from api and passing to the card.js 
  //state passing in usereducer function 

  const [array, setArray] = useState([])
  useEffect(() => {
    //async function for fetching data
    async function fetchData() {
      const request = await axios
        .get('https://dp-backend-e-comm.herokuapp.com/api/products')
      setArray(request.data.data)
      return request;
    }; fetchData()
  }, ['https://dp-backend-e-comm.herokuapp.com/api/products']
  )

  const [Category, setCategory] = useState([])
  useEffect(() => {
    setCategory(array?.filter((e) => e.categoryId === "e3b70fe0-0ad9-4e90-ad80-9b545be7762d"))
  }, [array])


  return (
    //desecturing data from api 
    <section className='latest-container' >
      <h3>Latest Products</h3>
      <div className="item-container">
        {
          Category?.map((item, i) => {
            // console.log(item.img[0])
            return (
              <Card
                id={item.productId}
                key={item.productId}
                title={item.productName}
                old_price={item.originalPrice}
                newPrice={item.discountedPrice}
                rupess={item.rupess}
                alt={item.alt}
                categoryId={item.categoryId}
                img={item.productImages[1].productImageUrl}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default LatestIteams