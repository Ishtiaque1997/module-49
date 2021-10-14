import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
 return (
  <div className='header'>
   {/* display the logo */}
   <img src={logo} alt="" />

   {/* display the navbar */}
   <nav>
    <a href="/home">Shop</a>
    <a href="/orders">Order Review</a>
    <a href="/inventory">Manage Inventory</a>
   </nav>
   
  </div>
 );
};

export default Header;