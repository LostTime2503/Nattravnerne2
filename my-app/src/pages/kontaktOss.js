// src/pages/omOss.js
import React from 'react'
import '../styles/pages/kontaktOss.css' // Stil for kontaktsiden

import KontaktOssInfo from '../sections/KontaktOssInfo' // Informasjonsside
import KontaktOssSkjema from '../sections/KontaktOssSkjema' // Kontaktskjema

const OmOss = () => (
  <div className="kontakt-oss-page">
    <header className="kontakt-oss-hero">
      <h1>Kontakt Oss</h1> {/* Sideoverskrift */}
    </header>

    {/* Seksjoner under hero */}
    <KontaktOssInfo /> {/* Kontaktinfo */}
    <KontaktOssSkjema /> {/* Skjema for melding */}
  </div>
)

export default OmOss // Eksporter komponent
