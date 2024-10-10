import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
  

const nav =useNavigate()
const handlesubmit =async (e)=>{
// e.preventdefault()
  const ob={
    email:email,
    pass:pass
  }
  try{
  await axios.Login(ob)
  await nav('/Home')
  }
  catch(err){
    console.log(err)
  }
    }
  return (
    <div>
    <input type='Email' onChange={(e)=>{setemail(e.target.value)}}></input>
    <input type='Password' onChange={(e)=>{setpass(e.target.value)}}></input>
    <button className='btn btn-danger' onClick={handlesubmit}>submit</button>
    </div>
  )
}
