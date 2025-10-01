import React from 'react'
import '../styles/sections/OmOssHistorie.css'
import BottomImage from '../assets/vectors/Vector_Footer.png'  // ← your image

const historyEvents = [
  { year: '2010', title: 'Grunnleggelse', text: 'Organisasjonen ble stiftet av en gruppe engasjerte studenter.' },
  { year: '2011', title: 'Første prosjekt', text: 'Vi lanserte vårt første frivillighetsprosjekt i lokalmiljøet.' },
  { year: '2012', title: 'Utvidelse', text: 'Nytt kontor åpnet i samarbeid med næringslivet.' },
  { year: '2013', title: 'Award', text: 'Nominasjon til Årets Ungdomsinnsats.' },
  { year: '2015', title: 'Partnerskap', text: 'Inngikk strategisk partnerskap med andre frivillige organisasjoner.' },
  { year: '2016', title: 'Digital satsning', text: 'Lansering av ny nettside og digitale verktøy for frivillige.' },
  { year: '2018', title: 'Regional vekst', text: 'Åpnet kontorer i fem nye fylker.' },
  { year: '2020', title: 'Pandemiprosjekt', text: 'Nødhjelpskampanje under Covid-19.' },
  { year: '2022', title: 'Bærekraftsmål', text: 'Lanserte bærekraftsinitiativ med FN-profiler.' },
  { year: '2025', title: 'Fremtid', text: 'Vi bygger videre på erfaringene våre for å nå enda flere.' },
]

const OmOssHistorie = () => (
  <section className="OmOss-Historie">
    <h2 className="OmOss-Historie-title">Vår historie</h2>
    <div className="OmOss-Historie-container">
      {historyEvents.map((ev, idx) => (
        <div key={idx} className="OmOss-Historie-event">
          <div className="OmOss-Historie-dot" />
          <div className="OmOss-Historie-content">
            <span className="OmOss-Historie-year">{ev.year}</span>
            <h3 className="OmOss-Historie-header">{ev.title}</h3>
            <p className="OmOss-Historie-text">{ev.text}</p>
          </div>
        </div>
      ))}
    </div>
    <img
        src={BottomImage}
        alt=""
        aria-hidden="true"
        className="OmOss-BottomImage"
    />
  </section>
)

export default OmOssHistorie
