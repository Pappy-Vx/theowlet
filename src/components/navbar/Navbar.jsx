import React from 'react'
import './navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [activeNav, setActiveNav] = useState('/')
  return (
    <nav className='navbar'>
        <a href="/" className='nav-logo'><img src={logo} alt="" /></a> 
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick= {() => setIsMobile(false)}>
        <Link to="/"   onClick={() =>setActiveNav('/') } className={activeNav === "/" ? 'home active' : 'home '}>
        <li>Home</li>
        </Link>
        <Link to="/product" onClick={() =>setActiveNav('/product') } className={activeNav === "/product" ? 'product active' : 'product '}>
        <li>Product</li>
        </Link>
        <Link to="/what's new" onClick={() =>setActiveNav("/what's new") } className={activeNav === "/what's new" ? 'what-new active' : 'what-new '}>
        <li>What's New <span></span></li>
        </Link>
        <Link to="/about" onClick={() =>setActiveNav('/about') } className={activeNav === "/about" ? 'about active' : 'about '}>
        <li>About Us</li>
        </Link>
        </ul>
        <button className='mobile-menu-icons' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
             <FaTimes/> 
            
        ): (
             <FaBars />
            
        )
        }
        </button> 
    </nav>
  )
}

export default Navbar