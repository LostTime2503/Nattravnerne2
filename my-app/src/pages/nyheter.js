// src/pages/omOss.js
import React from 'react'
import '../styles/pages/nyheter.css' // Stilark for nyhetssiden

import NyheterNyheter from '../sections/NyheterNyheter' // Hovednyhetsseksjon

const OmOss = () => (
  <div className="nyheter-page">
    <header className="nyheter-hero">
      <h1>Nyheter</h1> {/* Sideoverskrift */}
    </header>

    {/* Seksjoner under hero */}
    <NyheterNyheter /> {/* Viser nyhetsinnlegg */}
  </div>
)

export default OmOss // Eksporter komponent
