import React, { useContext } from 'react'

import { ShopContexts } from '../../Contexts/ShopContexts'

import remove_icon from '../Navbar/Assets/Frontend_Assets/cart_cross_icon.png'

const CartItem = () => {
  const { getTotalcartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContexts);
  
  return (
   
    <div className='cartitem my-28 mx-44  '>
      <div className="format-main grid items-center  py-5 px-0 text-slate-700 text-lg font-semibold " style={{"grid-template-columns":"0.5fr 2fr 1fr 1fr 1fr 1fr",gap:"75px"}}>
        <p>Products</p>
        <p >Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p>Remove</p>
      </div>
      <hr className='hh-1 bg-slate-400 border-0' />
      {all_product.map((e) => {
        if(cartItems[e.id]>0){
          return<div>
              <div className="item_format grid items-center gap-32 py-5 px-0 text-slate-700 text-lg font-medium" style={{"grid-template-columns":"0.5fr 2fr 1fr 1fr 1fr 1fr"}}>
              <img src={e.image} alt="" className='cart-p-icon h-16'/>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='item-Quantity w-16 h-12 border-solid border-2 border-slate-400 bg-slate-50'>{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <img className='cartPIconremove w-4 my-0 mx-10 cursor-pointer' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
              </div>
          <hr className='hh-1 bg-slate-400 border-0 '/>
          </div>
        }else{
          return null
        }
      })}
      <div className="cartItem-down flex my-24 mx-0 ">
        <div className="cartItem-total flex-1 flex flex-col mr-48 gap-10">
          <h1>Cart Total</h1>
          <div>
            <div className="item-total flex justify-between py-4 px-0">
              <p>SubTotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr/>
            <div className="item-total item-total flex justify-between py-4 px-0">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="item-total item-total flex justify-between py-4 px-0">
              <h3>Total</h3>
              <h3>${getTotalcartAmount()}</h3>
            </div>
          </div>
          <button className='w-64 h-14 outline-none border-none bg-red-500 text-white text-base font-semibold cursor-pointer'>PROCEED TO CHEKOUT</button>
        </div>
        <div className="promocode-item flex-1 text-lg font-medium">
          <p className='text-slate-400 '>If you have a promo code Enter here</p>
          <div className="promobox w-10/12 mt-4 pl-5 h-16 text-slate-300">
            <input className=' outline-none bg-transparent text-base w-80 h-12 border-none' type="text" placeholder='code'/>
            <button className='w-40 h-12  text-base bg-black text-white cursor-pointer'>Submit</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default CartItem
