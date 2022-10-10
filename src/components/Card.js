import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src="" alt="mypic" className="card_img" />
        <div className="card__info">
          <span className="card__category">Mobile</span>
          <h3 className="card__title">Mobile</h3>
          <a href="" target="_blank">
            <button> Add to cart </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
