import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
        <div className="header__banner">
            <p className="header__banner-text">Save 15% on orders over $75 ♡ Use code EVORA15 at checkout.</p>
        </div>
        <div className="header__container">
            <h1 className="header__title"> <a href="/" className="header__title-link"> 🌿 evora.</a></h1>
        </div>
    </header>
  )
}
