import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
 const[products,setProducts]=useState([]);

 const [cart,setCart]=useState([]);
 const [displayProducts,setDisplayProducts]=useState([]);
 
 const handleAddToCart=(product)=>{
  // console.log('btn clicked',product)
  const newCart=[...cart,product];
  setCart(newCart);
  addToDb(product.key);
 }
 useEffect(()=>{
  fetch('./products.json')
  .then(res=>res.json())
  .then(data=>{
    setProducts(data)
    setDisplayProducts(data)
  })
  
 },[])

 useEffect(()=>{
  const savedCart=getStoredCart();
  const storedCart=[];
  if(products.length){
    for (const key in savedCart ){
      console.log(key,savedCart[key]);

    // console.log(key);
    const addedProduct=products.find(product=>product.key===key);
    if(addedProduct){
      const quantity=savedCart[key];
      addedProduct.quantity=quantity;
      storedCart.push(addedProduct);
    }
   
  }
  setCart(storedCart)
  }
 },[products])
 const handleSearch=event=>{
   const searchText=event.target.value;
   const matchedProducts=products
.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
setDisplayProducts(matchedProducts)
console.log(matchedProducts.length)
 }

 return (
   <>
   <div className="search-container">
     <input 
     onChange={handleSearch}
     type="text"
     placeholder='Search Product' />
   </div>
  <div className='shop-container'>
   <div className='product-container'>
    {
    displayProducts.map(product=>
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
  </>
 );
};

export default Shop;