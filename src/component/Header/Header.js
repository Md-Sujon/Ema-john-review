import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
          <div>
          <img src={logo} alt="" />
          </div>
          <div>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/inventory">Inventory</a>
            <a href="/contact">Contact</a>
          </div>
           
        </div>
    );
};

export default Header;