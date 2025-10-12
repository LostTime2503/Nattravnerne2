// src/sections/HomeArra.js
import React from 'react'
import ArraBox from '../components/arraBox'
import '../styles/sections/HomeArra.css'

// Ikon importering
import locationIcon from '../assets/icons/map_icon.png'
import clockIcon    from '../assets/icons/clock_icon.png'

// Pictures
import event1Img from '../assets/placeholders/avlangt_placeholder.png'
import GrayMuffin from '../assets/vectors/Vector_Muffin_Gray.png'

const events = [
  {
    id: 1,
    imageSrc: event1Img,
    date: { day: '12', month: 'NOV' },
    title: 'Høstfest 2025',
    points: ['Brumunddal Kulturhus', '18:00 – 22:00'],
  },
  {
    id: 2,
    imageSrc: event1Img,
    date: { day: '05', month: 'DES' },
    title: 'Julemarked',
    points: ['Torget, Lillehammer', 'Kunst & håndverk'],
  },
  {
    id: 3,
    imageSrc: event1Img,
    date: { day: '20', month: 'JAN' },
    title: 'Vintersportdag',
    points: ['Langrenn & alpint', 'Varme drikker inkludert'],
  },
  {
    id: 4,
    imageSrc: event1Img,
    date: { day: '14', month: 'FEB' },
    title: 'Valentines-konsert',
    points: ['Live Jazz', 'Gratis sjokolade'],
  },
  {
    id: 5,
    imageSrc: event1Img,
    date: { day: '08', month: 'MAR' },
    title: 'Kunstutstilling',
    points: ['Lokale talenter', 'Åpningsmottakelse'],
  },
  {
    id: 6,
    imageSrc: event1Img,
    date: { day: '30', month: 'APR' },
    title: 'Vårmarked',
    points: ['Planter & blomster', 'Utendørs musikk'],
  },
]

const HomeArra = () => (
  <section className="home-arra-section">
    <h2 className="home-arra-header">Arrangementer</h2>
    <div className="home-arra-boxes">
      {events.map(evt => (
        <ArraBox
          key={evt.id}
          imageSrc={evt.imageSrc}
          date={evt.date}
          title={evt.title}
          points={evt.points}
          firstIconSrc={locationIcon}
          secondIconSrc={clockIcon}
        />
      ))}
    </div>
    <img
      src={GrayMuffin}
      alt="Gray muffin"
      className="home-arra__muffin"
    />
  </section>
)

export default HomeArra
