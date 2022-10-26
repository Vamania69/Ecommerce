// import React, { useState } from "react";
import { useContext, useState } from "react";
import "./Card.css";
import Button from "./button";
import { CountContext } from "../utils/context";
export default function Card(props) {
  let newClassName = `color_bg ${props.alt}`;
  // let bg_img = `url(${props.img})`;
  let { title, old_price, newPrice, rupess, exp_date, img, id } = props;
  console.log(id)

  //reducer dispatch using cntext

  const countContext = useContext(CountContext)
  const cart = countContext.countState.cart
  return (
    <div className="card">
      <div className="warpper">
        <div className={newClassName} >
          <img src={img} alt="" />
        </div>
        <div className="card_img" style={{ backgroundImage: img }} >

        </div>
        <div className="heart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
          </svg>
        </div>
        <div className="cardInfo">
          <h1>{title}</h1>
          <p className="date_">{exp_date}</p>
          <div className="action">
            <div className="priceGroup">
              <p className="price old_price">
                {rupess}
                {old_price}
              </p>
              <p className="price newPrice">
                {rupess}
                {newPrice}
              </p>
            </div>
            {
              //for checking if the item is present in cart or not and render add-to-card-btn/remove-btn
              cart.some(item => item.props.id === id) ?
                (<Button
                  value="Remove From Cart"
                  className="btn secondary-btn remove-btn"
                  onClick={() => countContext.countDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { props },
                  })} >
                </Button >)
                : (<Button
                  value={<i className='fas fa-shopping-cart'></i>}
                  className="btn primary-btn" onClick={() => countContext.countDispatch({
                    type: "ADD_TO_CART",
                    payload: { props },
                  })}
                >
                  <i className="fas fa-shopping-cart"></i>
                </Button >)
            }
          </div>
        </div>
      </div>
    </div >
  )
}
