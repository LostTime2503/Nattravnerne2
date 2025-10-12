// src/pages/omOss.js
import React from 'react'
import '../styles/pages/omOss.css' // Stilark for Om Oss-siden

import OmOssOm from '../sections/OmOssOm' // Seksjon: om oss
import OmOssHistorie from '../sections/OmOssHistorie' // Seksjon: vår historie

const OmOss = () => (
  <div className="om-oss-page">
    <header className="om-oss-hero">
      <h1>Om Oss</h1> {/* Sideoverskrift */}
    </header>

    {/* Seksjoner under hero */}
    <OmOssOm /> {/* Om oss */}
    <OmOssHistorie /> {/* Historie */}
  </div>
)

export default OmOss // Eksporter komponent
