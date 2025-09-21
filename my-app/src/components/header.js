
import React from 'react'
import '../styles/components/header.css'
import logo from '../assets/logo/Hvit_Logo.png'

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        {/* Logo on the left */}
        <div className="site-header__logo">
          <img src={logo} alt="Site Logo" />
        </div>

        {/* Center nav links */}
        <nav className="site-header__nav">
          <ul className="nav-list">
            <li className="nav-list__item"><a href="#home">Hjem</a></li>
            <li className="nav-list__item"><a href="#about">Om Oss</a></li>
            <li className="nav-list__item"><a href="#services">Kontakt Oss</a></li>
            <li className="nav-list__item"><a href="#projects">Nyheter</a></li>
            <li className="nav-list__item"><a href="#blog">Støtt Oss</a></li>
            <li className="nav-list__item"><a href="#contact">For Frivillige</a></li>
          </ul>
        </nav>

        {/* Buttons on the right */}
        <div className="site-header__actions">
          <button className="btn btn--primary">Bli Frivillig</button>
          <button className="btn btn--secondary">Logg Inn</button>
        </div>
      </div>
    </header>
  )
}

export default Header
