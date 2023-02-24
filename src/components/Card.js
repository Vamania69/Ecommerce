// import React, { useState } from "react";
import { useContext, useState } from "react";
import "./Card.css";
import Button from "./button";
import { CountContext } from "../utils/context";
import { WishlistContext } from "../utils/wishlistContext";
export default function Card(props) {
  let newClassName = `color_bg ${props.alt}`;
  // let bg_img = `url(${props.img})`;
  let { title, old_price, newPrice, rupess, exp_date, description, img, id } = props;
  //reducer dispatch using cntext
  const countContext = useContext(CountContext)
  const cart = countContext.countState.cart
  const wishlistContext = useContext(WishlistContext)
  const wishlist = wishlistContext.WishlistCount.cart
  return (
    <div className="card">
      <div className="warpper">
        {
          //adding background image to the product card set height and width here 
        }
        <div className="product-card-img">
          <img
            src={img}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="heart">
          {
            wishlist.some(w => w.props.id === id) ?
              (
                <i onClick={() => {
                  wishlistContext.WishlistDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { props }
                  })
                }} className="far fa-heart heart-filled"
                />
              ) :
              (<i onClick={() => {
                wishlistContext.WishlistDispatch({
                  type: "ADD_TO_CART",
                  payload: { props }
                })
              }} className="far fa-heart" />
              )
          }
        </div>
        <div className="cardInfo">
          <h1>{title}...</h1>
          <p className="date_">product description</p>
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
                  className="btn primary-btn"

                  onClick={() => countContext.countDispatch({
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
