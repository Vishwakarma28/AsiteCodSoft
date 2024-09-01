import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='item hover:scale-y-105 hover:drop-shadow-2xl  rounded-xl  object-contain '>
       <Link className='h-3 object-contain' to={`/product/${props.id}`}> <img className='h-96'  onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p className='m-2 hover:text-purple-700'>{props.name}</p>
        <div className='flex gap-5 '>
            <div className='object-contain text-slate-700 text-lg font-semibold '>
                ${props.new_price}
            </div>
            <div className='object-contain old_price text-red-600 text-sm font-medium line-through'>
                ${props.old_price}
            </div>
        </div>
    </div> 
  )
}

export default Item
