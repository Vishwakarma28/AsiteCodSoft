import React, { useEffect, useState } from 'react'
import Item from '../Items/Item'

const NewCollections = () => {
    
  const [new_collections ,setNew_collections] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollectiond')
    .then((response)=>response.json())
    .then((data)=>setNew_collections(data))
  },[])

  return (
    <div className='newCollections flex flex-col items-center gap-3 mb-24 '>
        <h1 className='text-slate-900 text-5xl font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-52 h-2 rounded-xl bg-slate-900'/>
        <div className="collectionsItem  grid   mt-12 grid-cols-4 gap-8" >
            {new_collections.map((item,i)=>{
              return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
              old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections
