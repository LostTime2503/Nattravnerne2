import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import '../styles/components/header.css'
import '../styles/components/headerAlt.css'

import whiteLogo from '../assets/logo/Hvit_Logo.png'
import blackLogo from '../assets/logo/Svart_Logo.png'

const Header = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname.startsWith('/frivillig')

  return (
    <header className={`site-header ${!isHome ? 'site-header--alt' : ''}`}>
      <div className="site-header__container">
        <div className="site-header__logo">
          <NavLink to="/">
            <img src={isHome ? whiteLogo : blackLogo} alt="Site Logo" />
          </NavLink>
        </div>

        <nav className="site-header__nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" end className="nav-list__link">Hjem</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/om-oss" className="nav-list__link">Om Oss</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/kontakt-oss" className="nav-list__link">Kontakt Oss</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/nyheter" className="nav-list__link">Nyheter</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/støtt-oss" className="nav-list__link">Støtt Oss</NavLink>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <NavLink
            to={{ pathname: '/frivillig', search: '?tab=bli-frivillig' }}
            className="btn btn--primary"
            aria-label="Bli Frivillig"
          >
            Bli Frivillig
          </NavLink>

          <NavLink
            to={{ pathname: '/frivillig', search: '?tab=logg-inn' }}
            className="btn btn--secondary"
            aria-label="Logg Inn"
          >
            Logg Inn
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
