import React from 'react'

const NewsLetter = () => {
  return (
    <div className='Newsletter w-11/12 h-screen flex flex-col items-center justify-center m-auto px-36 mb-40 bg-gradient-to-b from-slate-600 gap-7 '>
      <h1 className='text-slate-600 text-6xl' >Get Exclusive Offer On Your Email</h1>
      <p className='text-slate-600 text-lg'>Subscribe to our newletter and stay update</p>
      <div className='flex items-center  justify-between bg-white w-6/12 h-12 rounded-3xl border-solid border-white border-2  hover:bg-slate-200'>
        <input type="email" placeholder='Your Email id' className='w-80 ml-8 border-none outline-none text-slate-400 text-lg  hover:bg-slate-200'/>
        <button className='w-52 h-12 rounded-3xl bg-black text-white text-lg cursor-pointer hover:bg-red-900'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
