import React, { useContext } from 'react'
import {ShopContexts} from '../Contexts/ShopContexts'
// import dropdown_icon from '../Components/Navbar/Assets/Frontend_Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContexts);
  return (
    <div className='ShopCategory p-20 w-auto  items-center justify-center '>
      <img className='banner block mt-8 ' 
      src={props.banner} alt="" srcset=""
       />
      <div className="shopcategory-indexsort flex  justify-between items-center">
        <p className='font-semibold'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 Product
        </p>
        {/* <div className="Sort bg-violet-500 mr-20 mb-12 h-19 w-24 text-black font-semibold rounded-full shadow-md hover:bg-slate-300  focus:ring bg-slate-300 focus:ring-opacity-75">
          Sort by <img src={dropdown_icon} alt=''/>
        </div> */}
      </div>
      <div className="shopCategory-product mt-5  grid grid-cols-4 gap-y-20 ">
      {all_product.map((item,i) => {
        if(props.category===item.category){
              return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
              old_price={item.old_price}/>
        }else{
          return null
        }
            })}
      </div>
      <div className="loadmore  justify-center  mt-36 mb-20 flex items-center gap-5 w-56 h-14 rounded-lg bg-slate-200 text-slate-700 text-xl font-medium" >
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
