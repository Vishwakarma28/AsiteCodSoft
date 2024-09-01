import React, { useEffect, useState } from 'react'
import Item from '../Items/Item'

const Populer = () => {
   
  const [populerproduct,setpopulerproduct]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwoman')
    .then((response)=>response.json())
    .then((data)=>setpopulerproduct(data))
  },[])

  return (
    <div className='populer flex flex-col items-center gap-3 h-screen'>
      <h1 className='text-slate-900 text-5xl font-semibold'>POPULER IN WOMEN</h1>
      <hr className='w-52 h-2 rounded-xl bg-slate-900'/>
      <div className="populerItem  mt-14  flex gap-8">
        {populerproduct.map((item,i)=>{
            return <Item key={i} id={item.id}
              name={item.name} image={item.image}
               new_price={item.new_price}
               old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Populer
