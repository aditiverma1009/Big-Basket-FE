import React from 'react';
import './header.css';


const Header = () => (
  <div className="Header">
    <i className="material-icons logo">shopping_cart</i>
    <button className="AllOrdersBtn" type="submit" value="submit">All Orders</button>
    <div className="basketBox">
      <i className="material-icons shopping_cart">shopping_basket</i>
      <div className="basketBoxDesc">
        <span>MyBasket</span>
        <span>3 items</span>
      </div>
    </div>
    <p className="HeaderText">The <span className="bookCap">Book</span> Shelf</p>
    <div className="App-Sidebar" />
  </div>
);

export default Header;

