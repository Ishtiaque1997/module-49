import React from 'react';
import './Cart.css'
const Cart = (props) => {
 const{cart}=props;
 let total=0;
 for (const product of cart){
  total=total+product.price;
 }
 const shipping=total>100?15:0;
 const tax=(total+shipping)*0.1;
 const grandtotal=shipping+tax+total;
 return (
  <div className='cart'>
   <h1>Order Summary</h1>
   <h4>Number of items Ordered: {cart.length}</h4>
   <h4>Total:$ {total.toFixed(2)}</h4>
   <h4>Shipping:$ {shipping} </h4>
   <h4>Net total:$ {(total+shipping).toFixed(2)}</h4>
   <h4>Tax:$ {tax.toFixed(2)}</h4>
   <hr />
   <h3>Grandtotal:$ {grandtotal.toFixed(2)}</h3>
  </div>
 );
};

export default Cart;