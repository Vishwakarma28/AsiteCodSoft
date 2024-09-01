import React, { createContext, useEffect, useState } from "react";


export const ShopContexts = createContext(null);

const getDefaultCart = ()=>{
    let cart ={};
    for(let index = 0; index < 300+1; index++){
        cart[index] = 0;
    }
    return cart;

}

 const ShopContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [all_product,setAll_product] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'get',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:""
            }).then((response)=>response.json()).then((data)=>setCartItems(data));
        }
    },[])

    const addcart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((response)=>response.json()).then((data)=>console.log(data));
            
        }
       
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removeFromCart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((response)=>response.json()).then((data)=>console.log(data));
            
        }
    }

    const getTotalcartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const getTotalcartItem =()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = {getTotalcartItem,getTotalcartAmount,all_product,cartItems,addcart,removeFromCart};
    
    
    

    return(
        <ShopContexts.Provider value={contextValue}>
                {props.children}
        </ShopContexts.Provider>
    )
}
export default ShopContextProvider;