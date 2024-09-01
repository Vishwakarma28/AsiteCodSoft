import React from 'react'




const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum flex items-center gap-2 text-slate-900 text-lg font-semibold mt-16 ml-40'>
        HOME <span style={{rotate:"-1deg"}}>></span > SHOP <span style={{rotate:"-1deg"}}>></span> {product.category} <span style={{rotate:"-1deg"}}>></span> {product.name}
    </div>
  )
}

export default Breadcrum
