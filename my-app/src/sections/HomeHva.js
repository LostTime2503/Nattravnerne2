import React from 'react'
import Button from '../components/button'
import '../styles/sections/HomeHva.css'
// ← just swap in your actual image path/filename
import HvaImage from '../assets/placeholders/avlangt_placeholder.png'
import BlackMuffin from '../assets/vectors/Vector_Muffin_Black.png'

const HomeHva = () => (
  <section className="hjem-hva-section">
    <div className="hjem-hva-inner">
      {/* Left: square image */}
      <img
        src={HvaImage}
        alt="Hva seksjon bilde"
        className="hjem-hva-image"
      />

      {/* Right: text + button */}
      <div className="hjem-hva-content">
        <h2 className="hjem-hva-header">
          Hva gjør vi?
        </h2>
        <hr className="hjem-hva-line" />

        <p className="hjem-hva-text">
          Natteravning handler om å være til stede for barn og unge når de ferdes ute på kveld- og nattestid, 
          ta ansvar og vise medmenneskelig omsorg.
        </p>

        <p className="hjem-hva-text">
          Når voksne er til stede der ungdommer ferdes virker det forebyggende og dempende på uønskede hendelser.
        </p>

        <div className="hjem-hva-button-wrapper">
          <Button
            backgroundColor="#FFE618"
            color="#000"
            className="hjem-hva-button"
          >
            Les mer
          </Button>
        </div>
      </div>
          <img
            src={BlackMuffin}
            alt="Black muffin"
            className="home-hva__muffin"
          />
    </div>
  </section>
)

export default HomeHva
