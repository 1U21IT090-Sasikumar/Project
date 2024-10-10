import React from 'react'
import axios from 'axios'
import { createContext,useContext } from 'react'
import { useEffect ,useState} from 'react'
const Api =createContext()
export default function Product({children}) {
const api ="https://66c4261eb026f3cc6cee28d9.mockapi.io/Productcart"
    
  return (
 <Api.Provider value={api}>
  {children}
 </Api.Provider>

  )
}
export function useApi(){
  return useContext(Api)
}

export function useHome(api){
  const [data,setData]=useState([])
  useEffect(()=>{
      axios.get(api)
     .then(res=> res.data)
     .then(data =>{setData(data)});
  },[])
  return data
}


// export function useCart(api,id){
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     axios.get(`${api}/${id}`)
//     .then(res=> res.data)
//     .then(data=>{setData(data)})
//   },[])
//   return data;
// }













{/* <div className="row row-cols-1 row-cols-md-3 g-4  p-5 ms-5">
  <div classname="col">
    <div className="card " style={{width:380,height:480}}>
      <img src="https://bitemeup.com/wp-content/uploads/2020/08/Untitled-design-21-3.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">SPL DOSA</h3>
        <h5>$40</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className="btn btn-primary">ADD TO CART</a>
      </div>
    </div>
  </div>
  <div classname="col">
  <div className="card " style={{width:380,height:480}}>
    <img src="https://assets.gqindia.com/photos/5edf9ea70f82d6d3cee5f0b1/16:9/w_1280,c_limit/5-delicious-South-Indian-breakfast-recipes-that-you-can-easily-make-at-home.jpg" className="card-img-top" alt="..." style={{height:520}}/>
    <div className="card-body">
      <h3 className="card-title">IDELY VADA</h3>
      <h5>$200</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
    </div>
  </div>
  <div classname="col">
  <div className="card" style={{width:380,height:480}}>
    <img src="https://www.lekhafoods.com/media/1051178/hurulikaalu-dosa.jpg" className="card-img-top" alt="..." style={{height:300}}/>
    <div className="card-body">
      <h3 className="card-title">SPICY DOSA</h3>
      <h5>$60</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
    </div>
  </div>
  <div classname="col">
  <div className="card" style={{width:380,height:480}}>
    <img src="https://i.pinimg.com/originals/7a/52/0a/7a520ab79ccad56a17109a2a51312547.jpg" className="card-img-top" alt="..." style={{height:275}}/>
    <div className="card-body">
      <h3 className="card-title">MYSORE DOSA</h3>
      <h5>$100</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
  </div>
  </div>
  <div classname="col">
  <div className="card " style={{width:380,height:480}}>
    <img src="https://bitemeup.com/wp-content/uploads/2020/08/Untitled-design-21-3.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h3 className="card-title">SPL DOSA</h3>
      <h5>$40</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
    </div>
  </div>
  <div classname="col">
  <div className="card" style={{width:380,height:480}}>
    <img src="https://foodsguy.com/wp-content/uploads/2019/07/Best-Pan-For-Dosa-1170x780.jpg" className="card-img-top" alt="..." style={{height:310}}/>
    <div className="card-body">
      <h3 className="card-title">PLAIN DOSA</h3>
      <h5>$30</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
    </div>
  </div>
  <div classname="col">
  <div className="card " style={{width:380,height:480}}>
    <img src="https://thumbs.dreamstime.com/z/dosa-chutney-south-indian-breakfast-cone-shape-69295806.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h3 className="card-title">ROLL DOSA</h3>
      <h5>$80</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
  </div>
  </div>
  <div classname="col">
  <div className="card " style={{width:380,height:480}}>
    <img src="https://i.ytimg.com/vi/RA8vFyvhuGQ/maxresdefault.jpg" className="card-img-top" alt="..."  style={{height:320}}/>
    <div className="card-body">
      <h3 className="card-title">MULTIGRAIN DOSA</h3>
      <h5>$100</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
  </div>
  </div>
  <div classname="col">
  <div className="card " style={{width:380,height:480}}>
    <img src="http://2.bp.blogspot.com/-Kq6XdESG1bA/Um1AvwI0YSI/AAAAAAAANPM/RpKgn_cqMy0/s1600/Instant+Vegetable+Dosa.jpg" className="card-img-top" alt="..." style={{height:320}}/>
    <div className="card-body">
      <h3 className="card-title">VEGATABLE DOSA</h3>
      <h5>$50</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">ADD TO CART</a>
    </div>
  </div>
</div>
</div> */}
