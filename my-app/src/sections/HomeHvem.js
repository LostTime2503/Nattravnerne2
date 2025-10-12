import React from 'react'
import '../styles/sections/HomeHvem.css'
import BackgroundVideo from '../assets/videos/bg_vid2.mp4'
import Button from '../components/button'

const HomeHvem = () => (
  <section className="hjem-hvem-section">
    {/* Background video */}
    <video
      className="hjem-hvem-video"
      src={BackgroundVideo}
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Dark overlay */}
    <div className="hjem-hvem-overlay" />

    {/* Content box on top */}
    <div className="hjem-hvem-content">
      <h2 className="hjem-hvem-header">Hvem kan bli med?</h2>
      <hr className="hjem-hvem-line" />
      <p className="hjem-hvem-paragraph">
        Kun voksne over 18 år kan være natteravner. Man trenger ingen spesiell
        utdannelse eller erfaring for å kunne være natteravn. Vi er opptatt av
        at det skal være mangfold i natteravnene, både når det gjelder bakgrunn,
        alder og kjønn.
      </p>
      <Button
        backgroundColor="#FFE618"
        color="#000"
        className="btn--rounded"
        onClick={() => console.log('Les mer clicked')}
      >
        Les mer
      </Button>
    </div>
  </section>
)

export default HomeHvem
