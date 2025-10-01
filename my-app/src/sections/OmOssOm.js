import React from 'react'
import '../styles/sections/OmOssOm.css'
import BackgroundImage from '../assets/background_pics/bilde_nattravnene.png'  // ← your background image
import BlackMuffin from '../assets/vectors/Vector_Muffin_PitchBlack.png'

const OmOssOm = () => (
  <section
    className="OmOss-Om"
    style={{ backgroundImage: `url(${BackgroundImage})` }}
  >
    <div className="OmOss-Om-overlay" />
    <div className="OmOss-Om-content">
      <div className="OmOss-Om-box">
        <h2 className="OmOss-Om-header">Om Natteravnene</h2>
        <p className="OmOss-Om-text">
          Natteravnene® er en politisk og religiøs nøytral organisasjon som arbeider for å gjøre bysentrum og nærmiljø til trygge steder å være for alle. Natteravnene® har vært aktive siden 1990. <br></br>
          Natteravnenes visjon er at voksnes synlige tilstedeværelse virker dempende på rus-, vold- og skadeverksproblematikk. Vi jobber for å oppnå positiv kontakt mellom barn/ungdom og voksne ute på vandring. Vi skal også bistå personer som av en eller annen grunn ikke er i stand til å ta vare på seg selv, noen ganger ved å formidle kontakt til det offentlige hjelpeapparatet.
        </p>
      </div>
    </div>
    <img
      src={BlackMuffin}
      alt="Black muffin"
      className="OmOss-Om__muffin"
    />
  </section>
)

export default OmOssOm
