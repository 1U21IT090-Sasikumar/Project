import React, { useState } from 'react'
import Content from './Content'
import Product from './Product'
// import Cart from './Cart'
// import { useEffect } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import {useApi,useHome} from './Product'


export default function Home() {

  const api =useApi()
  const data= useHome(api)
  console.log(data)
  // const nav =useNavigate();
  const [cart, setCart] = useState([]);
   
  

 const addcart=(value)=>{
  const id = value

const product=data.find(item=>item.id === id)
if(product){
  setCart(prevcart =>{
    const updatecart= [...prevcart,product];
  localStorage.setItem('cart', JSON.stringify(updatecart));
  return updatecart;
});
window.alert("Item add to cart")
// nav(`/Cart`)
}}
//  <Cart/> 
  return (
    <div>
      <Content/>
    <div className='All'style={{display:'flex',flexWrap:'wrap', backgroundColor:'lightcyan'}} >
        {data.map((list)=>(
     <div className="fill" key={list.id} style={{margin:'10px',marginLeft:'40px',marginTop:'50px'}}>
        <img src={list.Picture} style={{width:300}} alt="picture" />
  <div className="detail">
    <h3 style={{fontFamily:'serif',color:'gray'}}>{list.Name}</h3>
    <h3 style={{fontFamily:'cursive'}}>${list.Amount}</h3>
    <button onClick={()=>{addcart(list.id)}}  style={{color:'red'}}>ADD TO CART</button>
  </div>
</div>
  ))}
  </div>
    </div>
  )
}
