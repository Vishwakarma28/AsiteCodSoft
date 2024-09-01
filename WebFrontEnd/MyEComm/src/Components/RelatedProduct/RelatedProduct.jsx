import React,{useEffect,useState} from 'react'
// import Data_Product from '../Navbar/Assets/Frontend_Assets/data'
import Item from '../Items/Item'

const RelatedProduct = () => {
  const [populerproduct,setpopulerproduct]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwoman')
    .then((response)=>response.json())
    .then((data)=>setpopulerproduct(data))
  },[])
  return (
    <div className='populer flex flex-col items-center gap-3 mb-16 h-full mt-11'>
      <h1 className='text-slate-900 text-5xl font-semibold'>Related Product</h1>
      <hr className='w-48 h-2 rounded-xl bg-slate-700' />
      <div className="related_Product populerItem mt-12 flex gap-7">
        {populerproduct.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
            old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
