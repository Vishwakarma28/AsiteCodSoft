import React, { useState } from 'react'

const Login = () => {

  const [state,setState] = useState("login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async ()=>{
    console.log("login",formData);

    let responceData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responceData=data)

  if(responceData.success){
    localStorage.setItem('auth-token',responceData.token);
    window.location.replace("/");
  }else{
    alert(responceData.errors)
  }
  }
  const SignUp =async ()=>{
    console.log("SignUp",formData)
    let responceData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responceData=data)

  if(responceData.success){
    localStorage.setItem('auth-token',responceData.token);
    window.location.replace("/");
  }else{
    alert(responceData.errors)
  }
  }

  return (
    <div className='LoginPage w-full pt-5 pb-8 bg-pink-200' style={{height:"86vh"}}>
      <div className='Logincontainer shadow-gray-500 rounded-3xl bg-white m-auto mb-0 pt-10 pl-20 pr-20 pb-10' style={{width:"580px",height:"80vh"}}>
        <h1 className='m-5 font-semibold text-3xl'>{state}</h1>
        <div className="c flex flex-col gap-7 mt-8">
         {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} className='h-10 rounded-lg w-full pl-5 border-solid border-slate-500 border outline-none text-slate-300 text-lg' type="text" placeholder='Enter your name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} className='h-10 rounded-lg w-full pl-5 border-solid border-slate-500 border outline-none text-slate-300 text-lg' type="email" placeholder='Enter your email'/>
          <input name='password' value={formData.password} onChange={changeHandler} className='h-10 rounded-lg w-full pl-5 border-solid border-slate-500 border outline-none text-slate-300 text-lg' type="password" placeholder='password'/>
        </div>
        <div className='px-5'>
        <button onClick={()=>{state==="login"?login():SignUp()}}
        className='w-96 h-10 rounded-3xl
          text-white bg-red-600 mt-8
           border-none text-2xl font-medium cursor-pointer'>
            Continue</button>
        </div>

        {state==="Sign Up"?

        <p className='login mt-5 text-slate-600 text-lg font-medium'>Already have an account? 
          <span onClick={()=>{setState("login")}} className='text-red-500 font-medium cursor-pointer'>Login here</span></p>
          :
        <p className='login mt-5 text-slate-600 text-lg font-medium'>Create an Account?
          <span onClick={()=>{setState("Sign Up")}} className='text-red-500 font-medium cursor-pointer'>Click here</span></p>}
        <div className="login-agree flex gap-2">
          <input type="checkbox" name='' id='' />
          <p className='mt-6'>By continuing, i agree to the terms of use & privacy police</p>
        </div>
      </div>
    </div>
  )
}

export default Login
