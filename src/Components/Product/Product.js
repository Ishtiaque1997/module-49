import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
 // console.log(props)
 const{img,name,price,seller,stock}=props.product;
 const element = <FontAwesomeIcon icon={faShoppingCart} />
 return (
  <div className='product'>
   <div >
    <img src={img} alt="" />
   </div>
   <div className='product-details'>
    <h5>{name}</h5>
   
     <p>By:{seller}</p>
    <p>Price:${price}</p>
    <p>Only {stock} available. Order soon</p>
    <button onClick={()=>props.handleAddToCart(props.product)}>{element}Add to cart</button>
    </div>
   
      
  </div>
 );
};

export default Product;<h1>This is product</h1>