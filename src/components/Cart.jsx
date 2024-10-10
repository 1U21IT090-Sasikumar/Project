import React from 'react'
import Content from './Content'
import { useState } from 'react';
import { useCart } from './Product';
import { useEffect } from 'react';
import Product from './Product'
import { useParams } from 'react-router-dom';

export default function Cart() {
 
  const [cartItems, setCartItems] = useState([]);    

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);


  const calculateTotal =()=>{
    return cartItems.reduce((total, item) => {
      const itemAmount = item.Amount || 0;
      return total + item.Amount;
    },0).toFixed(2);
  }

  
  const updateItemQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          // Ensure we don't go below zero
          return { ...item, quantity: Math.max(quantity, 0) };
        }
        return item;
      });
    });
    
    // Update localStorage
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
  );
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};
  const  removeItem =(id)=>{
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}
  
  return (
    <div>
      <Content />
<h2>VIEW ALL LIST</h2>
<div className="card">
<h5 className="card-header">Featured</h5>
<div className="card-body">
{cartItems.length === 0 ? (
 <p>No items in the cart</p>
 ) : (
cartItems.map((item, index) => (
<div key={index} className="cart-item">
<h5 className="card-title">{item.Name}</h5>
<img src={item.Picture} style={{ width: 300 }} alt={item.Name} />
<p className="card-text">Amount:${item.Amount}</p>
<button
onClick={() => updateItemQuantity(item.id, (item.quantity || 0) - 1)}>-</button>
<button
onClick={() => updateItemQuantity(item.id, (item.quantity || 0) + 1)}>+</button>
{/* <button onClick={() => removeItem(item.id)}>0</button> */}
</div>
))
)}
 {cartItems.length > 0 && (
          <div className="total">
            <h5>Total Amount: ${calculateTotal()}</h5>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

























