'use client';
import { useState } from "react";

export default function Home() {
const [count, setCount] = useState(0);
const [amount, setAmount] = useState(0);

let discountPrice; //Discounted price
let originalPrice = 250.00;  //Non-discounted price
let discount = 50; //Percentage discount
discountPrice = originalPrice - (originalPrice * discount / 100);

//Increments item count
  const handleClickAdd = () => {
    setCount(count + 1);
    setAmount(amount + discountPrice)
    // console.log(setAmount);
  }

  //Decrements item count
  const handleClickMinus = () => {
    ( count > 0 ) ? setCount(count - 1) : 0;
    ( count >= 1 ) ? setAmount(amount - discountPrice) : 0;
  }

  const addToCart = () => {
    // console.log(`count is ${count}`);
    return count;
  }

  return (
   <div className="hero--container flex align-center gap-32">

      <div className="shoe--wrap">
        <div className="main--slide w-96">
          <img src="/image-product-1.jpg" className="w-96" alt="white sneakers" />
        </div>
        <div className="mini--slide w-96 mt-6 flex gap-4">
          <li><img src="/image-product-1.jpg" className="w-24" alt="white sneakers" /></li>
          <li><img src="/image-product-2.jpg" className="w-24" alt="white sneakers" /></li>
          <li><img src="/image-product-3.jpg" className="w-24" alt="white sneakers" /></li>
          <li><img src="/image-product-4.jpg" className="w-24" alt="white sneakers" /></li>
        </div>
      </div>

      <div className="shoe--details w-96 mt-14">
        <h5 className="primary">Sneaker Company</h5>
        <h1 className="my-6 text-4xl">Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the weather 
          can offer.
        </p>
        <div className="price--wrap mt-6">
          <div className="discount flex align-center gap-6">
            <h4 className="text-2xl">${ discountPrice }</h4>
            <h6 className="primary">{ discount }%</h6>
          </div>
          <div className="original--price mt-2">
            <h4 className="text-sm">${ originalPrice }</h4>
            {
              amount > 0 && 
              <p className="text-sm my-2">Your discounted fee is ${amount}</p>
            }
          </div>
        </div>
        <div className="counter-wrapper flex align-center gap-20 mt-6">
          <div className="counter flex align-center gap-8">
            <button onClick={handleClickMinus} className="primary">
              <img src="/icon-minus.svg" alt="minus" />
            </button>
            <h5>{count}</h5>
            <button onClick={handleClickAdd} className="primary">
              <img src="/icon-plus.svg" alt="plus" />
            </button>
          </div>
          <div className="add--cart">
            <button onClick={addToCart} className="primary-btn">Add to cart</button>
            <img src="/icon-cart.svg" alt="cart" />
          </div>
        </div>
        
      </div>

   </div>
  )
}
