import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
 const[products,setProducts]=useState([]);

 const [cart,setCart]=useState([]);
 const handleAddToCart=(product)=>{
  // console.log('btn clicked',product)
  const newCart=[...cart,product];
  setCart(newCart);

 }
 useEffect(()=>{
  fetch('./products.json')
  .then(res=>res.json())
  .then(data=>setProducts(data))
 },[])
 return (
  <div className='shop-container'>
   <div className='product-container'>
    {
    products.map(product=>
    <Product
     key={product.key} 
     product={product}
     handleAddToCart={handleAddToCart}
     ></Product>)
   }
   </div>
   <div className='cart-container'>
    <Cart cart={cart}></Cart>
   </div>
   
  </div>
 );
};

export default Shop;