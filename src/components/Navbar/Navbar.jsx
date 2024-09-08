import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
        <NavLink to='/1' className="navbar__link">Skin Care</NavLink>
        <NavLink to='/2' className="navbar__link">Body Care</NavLink>
        <NavLink to='/3' className="navbar__link">Hair Care</NavLink>
        <NavLink to='/4' className="navbar__link">Contact</NavLink>
        <NavLink to='/5' className="navbar__link">About Us</NavLink>
    </div>
  )
}
