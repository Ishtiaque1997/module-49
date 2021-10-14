import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
 //set state for products 
 const[products,setProducts]=useState([]);
 //set state for cart
 const [cart,setCart]=useState([]);
 //set state for displaying the searched product
 const [displayProducts,setDisplayProducts]=useState([]);
 
 //segment for handling the add to cart button
 const handleAddToCart=(product)=>{
  // console.log('btn clicked',product)
  const newCart=[...cart,product];
  setCart(newCart);
  addToDb(product.key);
 }

 //segment for loading the products from fake data and setting in state
 useEffect(()=>{
  fetch('./products.json')
  .then(res=>res.json())
  .then(data=>{
    setProducts(data)
    setDisplayProducts(data)
  })
},[])

//segment for displaying cart from database in UI
 useEffect(()=>{
  const savedCart=getStoredCart();
  const storedCart=[];
  if(products.length){
    for (const key in savedCart ){
    //console.log(key,savedCart[key]);
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

 //segment to handle the search 
 const handleSearch=event=>{
   const searchText=event.target.value;
   const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
   setDisplayProducts(matchedProducts)
   //console.log(matchedProducts.length)
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