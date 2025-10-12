import React from 'react'
import Header from '../components/header' // Toppfelt
import Button from '../components/button' // Gjenbrukbar knapp
import '../styles/pages/home.css' // Stilark
import YellowMuffin from '../assets/vectors/Vector_Muffin_Gul.png' // Dekorbilde
import HomeSitat from '../sections/HomeSitat'
import HomeHva from '../sections/HomeHva'
import HomeHvem from '../sections/HomeHvem'
import HomeNyheter from '../sections/HomeNyheter'
import HomeArra from '../sections/HomeArra'
import HomeSentraler from '../sections/HomeSentraler'
import HomeFrivillig from '../sections/HomeFrivillig'

const Home = () => (
  <>
    <Header /> {/* Header */}

    <div className="home-landing">
      <h1>Trygghet Hele Veien Hjem</h1>
      <Button
        backgroundColor="#FFE618" // Knappfarge
        color="#000" // Tekstfarge
        className="btn--rounded"
      >
        Sign Up
      </Button>

      <img
        src={YellowMuffin}
        alt="Yellow muffin" // Alt-tekst
        className="home-landing__muffin"
      />
    </div>

    <HomeSitat /> {/* Sitat */}
    <HomeHva /> {/* Hva */}
    <HomeHvem /> {/* Hvem */}
    <HomeNyheter /> {/* Nyheter */}
    <HomeArra /> {/* Arrangementer */}
    <HomeSentraler /> {/* Sentraler */}
    <HomeFrivillig /> {/* Frivillig */}
  </>
)

export default Home
