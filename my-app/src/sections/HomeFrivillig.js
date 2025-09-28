// src/sections/HomeFrivillig.js
import React from 'react'
import '../styles/sections/HomeFrivillig.css'
import BottomImage from '../assets/vectors/Vector_Footer.png'  // ← your image

const stats = [
  { number: '1600+', label: 'Frivillige' },
  { number: '80+',   label: 'Aktive Grupper' },
  { number: '50+',    label: 'Kommuner' },
]

const HomeFrivillig = () => (
  <section className="Home-Frivillig">
    <h2 className="Home-Frivillig-Header">Bli frivillig hos oss</h2>
    <p className="Home-Frivillig-Intro">
      Engasjer deg i lokalsamfunnet, møt nye mennesker og gjør en forskjell.
    </p>

    <div className="Home-Frivillig-Stats">
      {stats.map((stat, idx) => (
        <div key={idx} className="Home-Frivillig-Stat">
          <h3 className="Home-Frivillig-StatNumber">{stat.number}</h3>
          <h4 className="Home-Frivillig-StatLabel">{stat.label}</h4>
        </div>
      ))}
    </div>

    {/*  ← Add the bottom image here */}
    <img
      src={BottomImage}
      alt=""
      aria-hidden="true"
      className="Home-Frivillig-BottomImage"
    />
  </section>
)

export default HomeFrivillig
