import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCashRegister } from '@fortawesome/free-solid-svg-icons'
const element1 = <FontAwesomeIcon icon={faCashRegister} />
const Cart = (props) => {
 const{cart}=props;
 let totalQuantity=0;
 let total=0;
 for (const product of cart){
  if(!product.quantity){
   product.quantity=1;
  }
  total=total+product.price*product.quantity;
  totalQuantity=totalQuantity+product.quantity;
 }
 const shipping=total>100?15:0;
 const tax=(total+shipping)*0.1;
 const grandtotal=shipping+tax+total;
 return (
  <div className='cart'>
   <h1>Order Summary</h1>
   <h4>Number of items Ordered: {totalQuantity}</h4>
   <h4>Total:$ {total.toFixed(2)}</h4>
   <h4>Shipping:$ {shipping} </h4>
   <h4>Net total:$ {(total+shipping).toFixed(2)}</h4>
   <h4>Tax:$ {tax.toFixed(2)}</h4>
   <hr />
   <h3>{element1}Grandtotal:$ {grandtotal.toFixed(2)}</h3>
  </div>
 );
};

export default Cart;