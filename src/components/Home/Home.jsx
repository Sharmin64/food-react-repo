import React, { useEffect } from 'react';
import logo from "../../../public/1600w-2LPev1tJbrg.webp"
import "./Home.css"
const Home = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="" />
      <div>
      <a href="/home">Home</a>
      <a href="/food">Food</a>
      <a href="/order">Order</a>
      <a href="/about us">About Us</a>
    </div>
   </nav>
  );
};




export default Home;