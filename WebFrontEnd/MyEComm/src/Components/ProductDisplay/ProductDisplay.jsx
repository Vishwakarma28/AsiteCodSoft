import React, { useContext } from 'react'
import star_icon from '../Navbar/Assets/Frontend_Assets/star_dull_icon.png'
import star_dull_icon from '../Navbar/Assets/Frontend_Assets/star_icon.png'
import { ShopContexts } from '../../Contexts/ShopContexts';


const ProductDisplay = (props) => {
    const {product} =props;
    const {addcart} = useContext(ShopContexts)
  return (
    <div className='productDisplay flex mt-0 mr-44 '>
        <div className="productDisplayleft flex gap-4  ">
            <div className="imglisl flex gap-7 mt-3 ml-44 flex-col ">
                <img className='h-28' src={product.image} alt="" />
                <img className='h-28'src={product.image} alt="" />
                <img className='h-28'src={product.image} alt="" />
                <img className='h-28'src={product.image} alt="" />
            </div>
            <div className="mainImg ">
                <img style={{width:"650px",height:"530px","margin-top":"12px"}} src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplayright mr-0 ml-3 mt-3 flex flex-col">
            <h1 className='text-slate-900 text-4xl font-bold'>{product.name}</h1>
            <div className="right-star flex mt-2 gap-2 items-center mt-3 text-slate-950 text-sm">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="PDprice flex mr-5 ml-0 gap-7 text-2xl  font-bold mt-2">
                <div className="oldPrice mt-2 text-slate-500 line-through ">${product.old_price}</div>
                <div className="NewPrice mt-2 text-red-600">${product.new_price}</div>
            </div>
            <div className="PDdiscription mt-2">
                thats amazing
            </div>
            <div className="PDsize mt-2 ">
                <h1 className='mt-12 text-slate-900 text-lg font-semibold'>Select Size</h1>
                <div className="sizes flex mt-7 ml-0 gap-5 ">
                    <div className='p-2 pr-4 items-center justify-center bg-slate-200 border-solid border border-slate-300 cursor-pointer'>S</div>
                    <div className='p-2 pr-4 items-center justify-center bg-slate-200 border-solid border border-slate-300 cursor-pointer'>M</div>
                    <div className='p-2 pr-4 items-center justify-center bg-slate-200 border-solid border border-slate-300 cursor-pointer'>L</div>
                    <div className='p-2 pr-4 items-center justify-center bg-slate-200 border-solid border border-slate-300 cursor-pointer'>XL</div>
                    <div className='PDLast p-2 pr-4 items-center justify-center bg-slate-200 border-solid border border-slate-300 cursor-pointer'>XXl</div>
                </div>
                <button className='pt-3 pb-3 w-52 text-lg font-semibold text-white bg-red-700 rounded-xl mt-10 mb-10 border-none outline-none cursor-pointer hover:font-medium  hover:focus:ring focus:ring-black focus:ring-opacity-75"'
                onClick={()=>{addcart(product.id)}}
                 >ADD TO CART</button>
                <p className='PDRcategory mt-3'>
                    <span className='font-semibold'>Category:</span> Woman,T-shart,Crop-Top</p>
                <p className='category'><span className='font-semibold'>Tags:</span> Modren,Latest</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
