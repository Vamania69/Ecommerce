import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import axios from '../utils/axiosInstance'

function Category() {
  //state passing in usereducer function 
  const [array, setArray] = useState([])

  useEffect(() => {
    // console.log(localStorage)
    //  const strStorage = (JSON.stringify(localStorage))
    //  const objStorage = JSON.parse(strStorage)
    //  const Token = objStorage.Token
    //  console.log(Token)
    //
    async function fetchData() {
      const request = await axios
        .get('/products'
          //  headers: {
          //    Authorization: Token,
          //    'Accept': '*/*',
          //    'Content-Type': 'application/json; charset=utf-8'
          //  }
        )
      setArray(request.data.data)
      console.log(request)
      console.log(array)
      return request;
    }
    try {
      fetchData()
    } catch (e) {
      console.log(e.code)
    }
  }  //async function for fetching data
    , ['/products']
  )

  const [Category, setCategory] = useState([])
  useEffect(() => {
    setCategory(array.filter((item) => item.categoryId === 'e3b70fe0-0ad9-4e90-ad80-9b545be7762d'))
  }, [array])


  return (<div>
    {console.log(Category)}
    <div className="category-container">
      <div className="category-1">
        <div className="category-name">
        </div>
        {
          Category.slice(0, 4).map((product, i) => {
            return (
              <Card
                id={product.productId}
                key={product.productId}
                title={product.productName}
                old_price={product.originalPrice}
                newPrice={product.discountedPrice}
                rupess={product.rupess}
                description={product.description}
                exp_date={product.exp_date}
                img={product.productImages[1].productImageUrl}

              />
            )
          })
        }
      </div>
    </div>
  </div>
  )
}

export default Category