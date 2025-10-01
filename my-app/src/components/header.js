// src/components/Header.js
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// Base styles and modifier styles
import '../styles/components/header.css'
import '../styles/components/headerAlt.css'

// Two logo variants
import whiteLogo from '../assets/logo/Hvit_Logo.png'
import blackLogo from '../assets/logo/Svart_Logo.png'

const Header = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={`site-header ${!isHome ? 'site-header--alt' : ''}`}>
      <div className="site-header__container">
        <div className="site-header__logo">
          <NavLink to="/">
            <img
              src={isHome ? whiteLogo : blackLogo}
              alt="Site Logo"
            />
          </NavLink>
        </div>

        <nav className="site-header__nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" end className="nav-list__link">
                Hjem
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/om-oss" className="nav-list__link">
                Om Oss
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/kontakt-oss" className="nav-list__link">
                Kontakt Oss
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/nyheter" className="nav-list__link">
                Nyheter
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <button className="btn btn--primary">Bli Frivillig</button>
          <button className="btn btn--secondary">Logg Inn</button>
        </div>
      </div>
    </header>
  )
}

export default Header
