import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCashRegister } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
 // console.log(props)

 //Extracting the properties
 const{img,name,price,seller,stock,star}=props.product;

 //font awesome icon
 const element = <FontAwesomeIcon icon={faShoppingCart} />

 return (
  <div className='product'>

    {/* display image */}
    <div >
      <img src={img} alt="" />
    </div>
    
    {/* display the product information */}
    <div className='product-details'>
      <h3>{name}</h3>
      <p>By:{seller}</p>
      <p>Price:${price}</p>
      <p>Only {stock} available. Order soon</p>

      {/* Rating segment */}
      <Rating 
         initialRating={star}
         readonly
         emptySymbol="far fa-star icon-color"
         fullSymbol="fas fa-star icon-color "
      ></Rating>
      <br />

      {/* Button functionality */}
      <button onClick={()=>props.handleAddToCart(props.product)}>{element}Add to cart</button>
      
    </div>
  </div>
 );
};

export default Product;<h1>This is product</h1>