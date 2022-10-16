
import React, { useEffect, useState } from 'react'
import '../App.css'
import img1 from "../img/hero section/demo_img_1-1056x450.jpg"
import img2 from "../img/hero section/demo_img_2-1056x450.jpg"
import img3 from "../img/hero section/demo_img_3-1056x450.jpg"
import img4 from "../img/hero section/demo_img_4-1056x450.jpg"

function Slidesshowdemo() {
    const collection = [
        img1, img2, img3,img4
    ]
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setIndex(0)
    }, [])

  const changeNext = () => {
    if (index === collection.length - 1) {
      setIndex(0);
      console.log(index);
    } else {
      setIndex(index + 1);
      console.log(index);
    }
  };
  const changePrev = () => {
    if (index === 0) {
      setIndex(collection.length - 1);
      console.log(index);
    } else {
      setIndex(index - 1);
      console.log(index);
    }
  };
  return (
    <>
      <div className="slide-img">
        <a href="">
          <img src={collection[index]} alt="" />
        </a>
        <div className="slide-btn">
          <button onClick={changePrev} className="primary-btn slide-right">
            &#10094;
          </button>
          <button onClick={changeNext} className="primary-btn slide-left">
            &#10094;
          </button>
        </div>
      </div>
    </>
  );
}

export default Slidesshowdemo;
