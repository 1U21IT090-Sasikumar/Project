import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'

export default function Routerpage() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}   />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
