import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCashRegister } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
 // console.log(props)
 const{img,name,price,seller,stock,star}=props.product;
 const element = <FontAwesomeIcon icon={faShoppingCart} />
 const element1 = <FontAwesomeIcon icon={faCashRegister} />
 return (
  <div className='product'>
   <div >
    <img src={img} alt="" />
   </div>
   <div className='product-details'>
    <h3>{name}</h3>
   
     <p>By:{seller}</p>
    <p>Price:${price}</p>
    <p>Only {stock} available. Order soon</p>
    <Rating 
    initialRating={star}
    readonly
    emptySymbol="far fa-star icon-color"
    fullSymbol="fas fa-star icon-color "
    ></Rating>
    <br />
    <button onClick={()=>props.handleAddToCart(props.product)}>{element}Add to cart</button>
    </div>
   
      
  </div>
 );
};

export default Product;<h1>This is product</h1>