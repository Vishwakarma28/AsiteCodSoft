import React from 'react'
import exclusive_image from '../Navbar/Assets/Frontend_Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers w-11/12 h-auto flex m-auto pl-24 mb-36  bg-gradient-to-b from-pink-200'>
        <div className="offers-left flex-1 flex flex-col justify-center">
            <h1 className=' text-black text-7xl font-semibold p-1'>Exclusive</h1>
            <h1 className=' text-black text-7xl font-semibold p-1'>Offers for you</h1>
            <p className='text-black text-2xl font-semibold p-3'>ONLY THE BEST SELLERS FOR YOU</p>
            <button className='py-2 px-5 w-36 h-12 bg-violet-500 text-black font-semibold rounded-full shadow-md hover:bg-violet-700  focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Click Now</button>
        </div>
        <div className="Offers-right flex-1 flex items-center justify-end p-11">
            <img src={exclusive_image} alt=""  />
        </div>
    </div>
  )
}

export default Offer
