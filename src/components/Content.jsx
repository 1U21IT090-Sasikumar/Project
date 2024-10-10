import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../Content.css";
import { useEffect } from 'react';
export default function Content() {
  // const [Home,setHome]=useState('')
  // const [Cart,setCart]=useState('')
  // useEffect =(()=>{
  // if(props.page == 'Home'){
  //   setHome('text-primary')
  // }
  // if(props.page =='Cart'){
  //   setCart('text-danger')
  // }
  
  // })
  return (
    <div>
   <nav className="navbar bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:'blue',fontFamily:'cursive'}}>Food Cart</a>
    <a className="navbar-brand" style={{color:'rgba(236,73,48)',fontFamily:'fantasy'}} href='/'>Home</a>
    <a className="navbar-brand" style={{color:'rgba(236,73,48)',fontFamily:'fantasy'}}  href='/Cart'>Cart</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" style={{color:'skyblue'}} type="submit">Search</button>
    </form>
  </div>
</nav>
{/* <div className='back'style={{backgroundColor:'black'}}> */}
{/* <h2 style={{color:'white'}}>You Can Select Any Item</h2> */}
{/* </div> */}

</div>
  )
}
