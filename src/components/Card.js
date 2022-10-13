// import React from "react";
// // import ReactDOM from "react-dom";
// // import App from "./App";

// function Card() {
//   return (
//     <div className="cards">
//       <div className="card">
//         <img src="" alt="mypic" className="card_img" />
//         <div className="card__info">
//           <span className="card__category">Mobile</span>
//           <h3 className="card__title">Mobile</h3>
//           <a href="" target="_blank">
//             <button> Add to cart </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
import React from "react";
import "./Card.css";

export default function Card(props) {
  let newClassName = `color_bg ${props.alt}`;
  let bg_img = `url(${props.images})`;
  let { title, old_price, newPrice, rupess, exp_date } = props;
  return (
    <div className="card">
      <div className="warpper">
        <div className={newClassName}></div>
        <div className="card_img" style={{ backgroundImage: bg_img }}></div>
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
            <div className="cart">
              <svg
                className="outCart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M2 6h10l10 40h32l8-24H16"></path>
                <circle cx="23" cy="54" r="4"></circle>
                <circle cx="49" cy="54" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
