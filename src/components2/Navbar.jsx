import React from 'react'
import './Spare.css'
import { IoMdCart } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'



export default function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg mt-4 " style={{height:10}}>
  <div className="container-fluid ">
    <a className="navbar-brand" style={{marginLeft:70}} href="#">MY ACOUNT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">CHECKOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Cart</a>
        </li>
      </ul>
      </div>
      <span className="navbar-text">
        <img src='https://cdn-icons-png.flaticon.com/128/38/38442.png' style={{width:20, height:15}}/>
        <img src='https://cdn-icons-png.flaticon.com/128/60/60580.png 'style={{width:20,height:15}}/>
        <img src='https://t3.ftcdn.net/jpg/05/78/76/16/240_F_578761679_u4t7MJtdS6kGe20z5yR1OjyrRI3ZyyHL.jpg 'style={{width:20, height:15}}/>
      </span>
    </div>
</nav>

<hr style={{opacity:0.1}}/>

<nav className="navbar" style={{height:160, marginTop:-50 }}>
  <div className="container-fluid p-3"style={{width:1280}} >
    <a className="navbar-brand" href="/">
      <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2017/08/logo-1-1.png" alt="Logo" style={{width:200  ,height:100}} />
    </a>
    <form className="d-flex " role="search" >
      <input className="form-control rounded-pill" style={{width:600,height:45 ,marginRight:50, outlineColor:'red'}} type="search" placeholder="Search The Product" aria-label="Search"/>
    </form>
    <div className='side'>
    <h6>MY ACCOUNT</h6>
    <h6 style={{marginTop:20}}>GARAGE</h6>
    <button class="bt btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{backgroundColor:'red  '}}>Button</button>
<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRight">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRight">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
    </div>
    </div>
  </div>
</nav>

<nav className='nava' style={{marginTop:-25,height:80}}>
<div className="container-fluid ">
 <ul className="nav  p-1">
  <h3 className="nav-item border border-danger" style={{backgroundColor:'green'}}>
    <a className="nav-link " aria-current="page" >Categories<HiOutlineMenu/></a>
  </h3>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-expanded="false">Home</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Service</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true">Company</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true">Shop</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true">Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true">Contact</a>
  </li>
    <ul className='d-flex ' style={{marginLeft:200,listStyle:'none'}}>
          <li className="nav-item">
         <a className="nav-link " aria-disabled="true">SpecialOffer</a>
           </li>
           <li className="nav-item ">
            <a className="nav-link " aria-disabled="true">Purchese Theme</a>
           </li>
    </ul>
</ul>
</div> 
</nav> 
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{marginTop:-24, position:'relative'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2018/01/banner-3.jpg" className="d-block w-100" alt="..."style={{height:500}} />
    </div>
    <div className="carousel-item">
      <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2019/01/auto-part-theme-2.jpg" className="d-block w-100" alt="..." style={{height:500}}/>
      <div class="carousel-caption d-none d-md-block" style={{marginRight:250}}>
        <h2>GET HIGH QUALITY SPARE AND NORMAL ITEMS LOW COST</h2>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2019/01/auto-part-theme.jpg" className="d-block w-100" alt="..." style={{height:500}}/>
      <div class="carousel-caption d-none d-md-block" style={{marginRight:700}}>
        <h2>GET NEW LED LIGHTS AND SPARE</h2>
        <p>WELCOME SPARE SHOP</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className='border border-danger container-fluid ' style={{height:230 ,width:1200,position:'absolute', marginTop:-90 ,marginLeft:100 ,backgroundColor:'red'}}><br/>
  <h2>SEARCH FOR PARTS</h2><br/>
  <form className="j">
     <input type="text"placeholder='    select brand'  className='rounded-start-pill ' list="datalistOptions" id="exampleDataList" style={{height:50}}/>
     <datalist id="datalistOptions">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
  <input type="text" placeholder='   Model' list="datalistOptions2" id="exampleDataList"style={{height:50}}/>
  <datalist id="datalistOptions2">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="London"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
     <input type="number" placeholder='   Year' list="datalistOptions3" id="exampleDataList"style={{height:50}}/>
     <datalist id="datalistOptions3">
  <option value= '2002'/>
  <option value="2005"/>
  <option value="2007"/>
  <option value="2009"/>
  <option value="2011"/>
  <option value="2013"/>
  <option value="2015"/>
  <option  value="2017"/>
</datalist>
     <button className='rounded-end-pill'style={{height:50,width:120}}>SEARCH</button>
</form><br/>
<p>Or Search By Brand</p>
</div>


<div className='container overerflow-hidden' style={{marginTop:200,height:200}}>
  <div className='row'>
    <div className='col-3'> 
    <img src='https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2018/01/banner-x-1.jpg' style={{height:450,width:300}}/>
    <h3>Tools & Equipment</h3>
    </div>
    <div className='col-3'> 
    <img src='https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2018/01/banner-x-1.jpg'style={{height:450,width:300}}/>
    <h3>Tools & Equipment</h3>
    </div>
   <div className='col-6 ' style={{marginTop:-30}}>
    <img src='https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2018/01/engine-600-670.jpg' style={{height:1000 ,width:550}}/>
    <h3>Tools & Equipment</h3>
   </div>
   <div className='row' style={{marginTop:-500}}>
    <div className='col-3'> 
    <img src='https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2018/01/banner-7-300x335.jpg'style={{height:400,width:250}}/>
    <h4>Tools & Equipment</h4>
    </div>
    <div className='col-3'> 
    <img src='https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2018/01/dash-mount-300x335.jpg'style={{height:400,width:250}}/>
    <h4>Tools & Equipment</h4>
    </div>
    </div>
  </div>

<div className='a d-flex ' style={{gap:20,marginTop:100}}>
<div class="card text-bg-dark rounded-0">
  <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2019/01/auto-part-theme.jpg" class="card-img" alt="..." style={{height:250}}/>
  <div class="card-img-overlay">
    <h3 className="card-title">GETFUTURIST<br/>LED LIGHTS <br/>TODAY</h3>
    <a href="#" class="btn ">SHOP NOW</a>
  </div>
</div>
<div class="card text-bg-dark rounded-0">
  <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2019/01/auto-part-theme-2.jpg" class="card-img" alt="..." style={{height:250}}/>
  <div class="card-img-overlay">
    <h3 className="card-title">IT'S SALES<br/>FESTIVAL OF<br/>BODY PARTS</h3>
    <a href="#" class="btn ">SHOP NOW</a>
  </div>
</div>
<div class="card text-bg-dark rounded-0">
  <img src="https://themes.webdevia.com/car-parts-auto-parts-store-wordpress-theme/wp-content/uploads/2019/01/auto-part-theme-3.jpg" class="card-img" alt="..."style={{height:250}}/>
  <div class="card-img-overlay">
    <h3 className="card-title">GET PERFECT<br/>ENGINES<br/>PARTS</h3>
    <a href="#" class="btn ">SHOP NOW</a>
  </div>
</div>
</div>

<div className='next d-flex' style={{marginTop:100}}>
  <h5>FEATURED COLLECTION </h5>
  <div className='d-flex' style={{marginLeft:0}}>
  <h6>ACCESSORIES</h6>
  <h6>Car Care</h6>
  <h6>Replacement Parts</h6>
  </div>
</div>
</div>
</div>
  )
}
