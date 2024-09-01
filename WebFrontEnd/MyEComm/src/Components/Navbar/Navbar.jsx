import React, {  useState ,useContext, useRef} from 'react'
import logo from './Assets/Frontend_Assets/logo.png'
import cart_icon from './Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContexts } from '../../Contexts/ShopContexts';
import navDrop_down from '../Navbar/Assets/Admin_Assets/dropDown.png'


function Navbar(){
    const [manu,setManu] = useState("Shop");
    const {getTotalcartItem} = useContext(ShopContexts);
    const menuRaf = useRef();
    const dropdown_toggle =(e)=>{
        menuRaf.current.classList.toggle('nav-manu-visible');
        e.target.classList.toggle('open');
    }
    return(
        <div className='navbar items-center flex justify-around p-2.5 shadow-slate-600 bg-slate-100'>
            <div className=' nevLogo flex items-center gap-0' >
                <img className='object-cover h-12' src={logo} alt='' />
                <p className='text-black-600 text-3xl '>SHOPPER</p>
            </div>
            <img className='nav_dropDown hidden' onClick={dropdown_toggle} src={navDrop_down} alt="" />
            <ul ref={menuRaf} className=' nevbar_ul    flex items-center style-none gap-12 text-xl text-black-500'>
                
                    <li className='flex cursor-pointer gap-3 flex-col items-center justify-center' 
                    onClick={()=>{setManu("Shop")}}
                    >
                        <Link to='/'>
                        Shop
                        </Link> 
                        
                        {manu==="Shop"?<hr className='hr11'/>:<></>}
                        
                     </li>

                    <li className='flex cursor-pointer gap-3 flex-col items-center justify-center'
                    onClick={()=>{setManu("man")}}
                    >
                       <Link to='/man'>
                        MEN
                       </Link>  
                       {manu==="man"?<hr className='hr11'/>:<></>} 
                    </li>

                    <li className='flex cursor-pointer gap-3 flex-col items-center justify-center'
                    onClick={()=>{setManu("woman")}}
                    >
                        <Link to='/woman'>
                        Women
                        </Link>
                         {manu==="woman"?<hr className='hr11'/>:<></>} 
                    </li>

                    <li className='flex cursor-pointer gap-3 flex-col items-center justify-center'
                    onClick={()=>{setManu("Kids")}}
                    >
                        <Link to='/Kids'>
                        Kids
                        </Link>
                         {manu==="Kids"?<hr className='hr11'/>:<></>} 
                    </li>
                   
                </ul>
                <div className='nav-logo-cart flex items-center gap-11'>
                    {localStorage.getItem('auth-token')
                    ?<button  className="nav-logo-cart-btn py-2 px-5 bg-violet-500 text-black font-semibold rounded-full shadow-md hover:bg-violet-700  focus:ring focus:ring-violet-400 focus:ring-opacity-75"
                     onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>logout</button>
                    :
                    <Link to='/login'> <button className="nav-logo-cart-btn py-2 px-5 bg-violet-500 text-black font-semibold rounded-full shadow-md hover:bg-violet-700  focus:ring focus:ring-violet-400 focus:ring-opacity-75">login</button>
                    </Link>
                    }
                   <Link to='/Cart'> <img src={cart_icon} alt="" /> </Link>
                    <div className='nav-logo-count w-4 h-4 flex justify-center items-center text-xs -mt-8 -ml-12 rounded-xl  bg-red-600 text-white'>
                        {getTotalcartItem()}
                        </div>
                    
                </div>
        </div>
    )
}

export default Navbar
