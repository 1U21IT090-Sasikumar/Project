import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Content from './Content'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'
import { useState } from 'react'
export default function Routerpage() {
  return (
    <div>
        {/* <h1>ds</h1> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
