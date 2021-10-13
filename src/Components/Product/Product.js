import React from 'react';
import './Product.css';
const Product = (props) => {
 // console.log(props)
 const{img,name,price,seller,stock}=props.product;
 return (
  <div className='product'>
   <div >
    <img src={img} alt="" />
   </div>
   <div className='product-details'>
    <h5>{name}</h5>
    <div className='info'>
     <p>By:{seller}</p>
    <p>Price:${price}</p>
    <p>Only {stock} available. Order soon</p>
    <button>Add to cart</button>
    </div>
   </div>
      
  </div>
 );
};

export default Product;<h1>This is product</h1>