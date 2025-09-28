import React from 'react'
import '../styles/components/footer.css'

// Replace these imports with your actual assets
import Logo from '../assets/logo/Svart_Logo.png'
import FacebookIcon from '../assets/icons/facebook_icon.png'
import TiktokIcon from '../assets/icons/tiktok_icon.png'
import InstagramIcon from '../assets/icons/instagram_icon.png'

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-Content">
      {/* Left column: Logo + description + social buttons */}
      <div className="Footer-Column Footer-Column--left">
        <img src={Logo} alt="Company logo" className="Footer-Logo" />
        <p className="Footer-Description">
          Vi er en ideell organisasjon som bygger fellesskap og trygghet.
        </p>
        <div className="Footer-Social">
        <a
            href="https://www.facebook.com/Natteravnene1"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-SocialButton"
        >
            <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a
            href="https://www.tiktok.com/@natteravnene.orkdal"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-SocialButton"
        >
            <img src={TiktokIcon} alt="TikTok" />
        </a>
        <a
            href="https://www.instagram.com/natteravnene/"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-SocialButton"
        >
            <img src={InstagramIcon} alt="Instagram" />
        </a>
        </div>
      </div>

      {/* Middle column: Navigation */}
      <div className="Footer-Column Footer-Column--middle">
        <h4 className="Footer-Heading">Navigasjon</h4>
        <nav className="Footer-Nav">
          <a href="/" className="Footer-NavLink">Hjem</a>
          <a href="/hva" className="Footer-NavLink">Hva vi gjør</a>
          <a href="/hvem" className="Footer-NavLink">Hvem vi er</a>
          <a href="/nyheter" className="Footer-NavLink">Nyheter</a>
          <a href="/arra" className="Footer-NavLink">Arrangementer</a>
          <a href="/sentraler" className="Footer-NavLink">Sentraler</a>
          <a href="/frivillig" className="Footer-NavLink">Frivillig</a>
        </nav>
      </div>

      {/* Right column: Contact info */}
      <div className="Footer-Column Footer-Column--right">
        <h4 className="Footer-Heading">Kontakt oss</h4>
        <p className="Footer-ContactHours">
          Mandag–Fredag: 09:00–16:30 <br></br><br></br>
          Fredag-Lørdag: 20:30-03:30
        </p>
        <button className="Footer-ContactButton">
          Ring oss
        </button>
      </div>
    </div>

    <hr className="Footer-Divider" />

    <p className="Footer-Copyright">
      &copy; {new Date().getFullYear()} DittFirmanavn. Alle rettigheter reservert.
    </p>
  </footer>
)

export default Footer
