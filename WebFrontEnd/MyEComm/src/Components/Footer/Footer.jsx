import React from 'react'
import Footer_logo from '../Navbar/Assets/Frontend_Assets/logo.png'
import Instagram from '../Navbar/Assets/Frontend_Assets/instagram_icon.png'
import Pintester from '../Navbar/Assets/Frontend_Assets/pintester_icon.png'
import Whatsapp from '../Navbar/Assets/Frontend_Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='Footer flex flex-col justify-center items-center gap-12'>
        <div className="Footer_logo flex items-center gap-5">
            <img className='object-cover h-20' src={Footer_logo} alt=""  />
            <p className='text-slate-600 text-lg font-bold'>SHOPPER</p>
        </div>
        <ul className=' footer_link flex list-none gap-12 text-slate-700 text-lg '>
            <li className='cursor-pointer hover:text-red-600'>Compny</li>
            <li className='cursor-pointer hover:text-red-600'>Product</li>
            <li className='cursor-pointer hover:text-red-600'>Offices</li>
            <li className='cursor-pointer hover:text-red-600'>About</li>
            <li className='cursor-pointer hover:text-red-600'>Contect</li>
        </ul>
        <div className="footer_social_icon flex gap-5">
            <div className="footer_icon_container p-3 pb-2 bg-slate-100 border-solid border-white border-2">
                <img src={Instagram} alt="" srcset="" />
            </div>
            <div className="footer_icon_container  p-3 pb-2 bg-slate-100 border-solid border-white border-2">
                <img src={Pintester} alt="" srcset="" />
            </div>
            <div className="footer_icon_container  p-3 pb-2 bg-slate-100 border-solid border-white border-2">
                <img src={Whatsapp} alt="" srcset="" />
            </div>
        </div>
        <div className="footer_copy_right flex flex-col items-center gap-7 size-full mb-8 text-slate-900">
            <hr className='w-9/12 border-none rounded-xl h-1 bg-slate-600'/>
            <p>Copyright @ 2023 - All Right Reserved..</p> 
        </div>
    </div>
  )
}

export default Footer
