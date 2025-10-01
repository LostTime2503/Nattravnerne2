// src/pages/omOss.js
import React from 'react'
import '../styles/pages/nyheter.css'

// (Optionally) import the sections you’ll render below the hero
import NyheterNyheter from '../sections/NyheterNyheter'

const OmOss = () => (
  <div className="nyheter-page">
    <header className="nyheter-hero">
      <h1>Nyheter</h1>
    </header>
    {/* Import other sections under the 500px hero */}
    <NyheterNyheter />
  </div>
)

export default OmOss
