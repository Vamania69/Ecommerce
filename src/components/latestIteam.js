import React, { useEffect, useReducer, useState } from "react";
import Card from "./Card";
// import { products } from '../utils/productData'
import axios from "../utils/axiosInstance";

function LatestIteams() {
  //fetching data from api and passing to the card.js
  //state passing in usereducer function
  const [array, setArray] = useState([]);

  useEffect(
    () => {
      // console.log(localStorage)
      const strStorage = JSON.stringify(localStorage);
      const objStorage = JSON.parse(strStorage);
      const Token = objStorage.Token;
      console.log(Token);
      //
      async function fetchData() {
        const request = await axios.get("/products", {
          headers: {
            Authorization: Token,
            Accept: "*/*",
            "Content-Type": "application/json; charset=utf-8",
          },
        });

        setArray(request.data.data);
        console.log(request);
        // console.log(array)
        return request;
      }
      try {
        fetchData();
      } catch (e) {
        console.log(e.code);
      }
    }, //async function for fetching data
    ["/products"]
  );

  const [Category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(
      array?.filter(
        (e) => e.categoryId === "129a0d17-5246-4df0-bc00-893023c60b37"
      )
    );
  }, [array]);

  console.log(array);
  return (
    //desecturing data from api
    <section className="latest-container p-0 p-sm-1">
      <h3>Latest Products</h3>
      <div className="item-container">
        {array?.map((item, i) => {
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
              description={item.description}
              img={item.productImages[1].productImageUrl}
            />
          );
        })}
      </div>
    </section>
  );
}

export default LatestIteams;
