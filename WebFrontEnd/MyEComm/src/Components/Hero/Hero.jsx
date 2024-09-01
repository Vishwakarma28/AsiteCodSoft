import React from 'react'

import hand_icon from '../Navbar/Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Navbar/Assets/Frontend_Assets/arrow.png'
import hero_img from '../Navbar/Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero h-screen flex bg-gradient-to-b from-pink-200' >
        {/* heroleft */}
       <div className="heroleft flex-1 flex flex-col justify-center gap-7 pl-3.5 leading-4  ">
        <h2 className='text-black-300 text-lg font-semibold ml-24'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon flex items-center gap-">
                <p className='text-black text-5xl font-bold ml-24'>New</p>
                <img className='w-14' src={hand_icon} alt="" />
            </div>
            <p className='text-black text-5xl font-bold ml-24'>collections</p>
            <p className='text-black text-5xl font-bold ml-24 '>for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-2 w-44 h-11 rounded-3xl mt-6 ml-24 bg-red-700 text-white text-xs font-medium mt-28">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
            
       </div>
       {/* heroright */}
       <div className="heroright h-12">
        <img className='h-screen' src={hero_img} alt=''/>
       </div>
    </div>
  )
}

export default Hero
