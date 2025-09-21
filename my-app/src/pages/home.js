import React from 'react'
import Header from '../components/header'
import Button from '../components/button'
import '../styles/pages/home.css'
import YellowMuffin from '../assets/vectors/Vector_Muffin_Gul.png'
import HomeSitat from '../sections/HomeSitat'
import HomeHva from '../sections/HomeHva'
import HomeHvem from '../sections/HomeHvem'

const Home = () => (
  <>
    <Header />

    <div className="home-landing">
      <h1>Trygghet Hele Veien Hjem</h1>
      <Button
        backgroundColor="#FFE618"
        color="#000"
        className="btn--rounded"
      >
        Sign Up
      </Button>

      {/* ← Add the muffin image here */}
      <img
        src={YellowMuffin}
        alt="Yellow muffin"
        className="home-landing__muffin"
      />
    </div>
    <HomeSitat/>
    <HomeHva />
    <HomeHvem />
    {/* future imported sections go here */}
  </>
)

export default Home
