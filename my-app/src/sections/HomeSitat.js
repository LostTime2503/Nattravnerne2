import React from 'react'
import '../styles/sections/HomeSitat.css'
import GrayMuffin from '../assets/vectors/Vector_Muffin_Gray.png'  // ← adjust filename

const HomeSitat = () => (
  <section className="home-sitat">
    <p>
      <b>
        “Har du tid og lyst til å gjøre nærmiljøet ditt tryggere? <br />
        Vi trenger deg mellom 18 og 80 år som frivillig hos oss. 
        Bli med å gjør en forskjell du også.”
      </b>
    </p>

    {/* muffin pinned to bottom of this section only */}
    <img
      src={GrayMuffin}
      alt="Gray muffin"
      className="home-sitat__muffin"
    />
  </section>
)

export default HomeSitat
