// src/pages/omOss.js
import React from 'react'
import '../styles/pages/støttOss.css' // Stil for støtt-oss siden

import HvaStøtt from '../sections/StøttOssHva' // Hva betyr støtte
import Donasjoner from '../sections/StøttOssDonasjon' // Donasjonsinfo
import Bedrift from '../sections/StøttOssBedrift' // Bedriftssamarbeid
import Sponsor from '../sections/StøttOssSponsor' // Sponsorinfo

const OmOss = () => (
  <div className="støtt-oss-page">
    <header className="støtt-oss-hero">
      <h1>Støtt Oss</h1> {/* Sidetittel */}
    </header>

    {/* Seksjoner under hero */}
    <HvaStøtt /> {/* Hvorfor støtte */}
    <Donasjoner /> {/* Slik donerer du */}
    <Bedrift /> {/* Bedriftspartnere */}
    <Sponsor /> {/* Sponsormuligheter */}
  </div>
)

export default OmOss // Eksporter komponent
