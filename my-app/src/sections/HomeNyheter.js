import React from 'react'
import Button from '../components/button'
import '../styles/sections/HomeNyheter.css'

import nyhet1Img from '../assets/vectors/picturenews.png'
import BlackMuffin from '../assets/vectors/Vector_Muffin_PitchBlack.png'

const newsItems = [
  { id: 1, title: 'Nyhet 1', text: 'Kort beskrivelse av nyhet 1.', image: nyhet1Img },
  { id: 2, title: 'Nyhet 2', text: 'Kort beskrivelse av nyhet 2.', image: nyhet1Img },
  { id: 3, title: 'Nyhet 3', text: 'Kort beskrivelse av nyhet 3.', image: nyhet1Img },
]

function HomeNyheter() {
  return (
    <section className="home-nyheter">
      <div className="home-nyheter-inner">
        <h2 className="home-nyheter-header">Nyheter</h2>
        <p className="home-nyheter-description">
          Hold deg oppdatert på våre siste nyheter og arrangementer.
        </p>

        <div className="home-nyheter-pics">
          {newsItems.map(({ id, title, text, image }) => (
            <div key={id} className="home-nyheter-pic-item">
              <img
                src={image}
                alt={title}
                className="home-nyheter-pic-image"
                loading="lazy"
              />
              <h3 className="home-nyheter-pic-title">{title}</h3>
              <p className="home-nyheter-pic-text">{text}</p>
            </div>
          ))}
        </div>

        <div className="home-nyheter-actions">
          <Button
            backgroundColor="#FFE618"
            color="#000"
            className="btn--rounded"
          >
            Se flere
          </Button>
        </div>

        <img
          src={BlackMuffin}
          alt="Black muffin"
          className="home-nyheter__muffin"
        />
      </div>
    </section>
  )
}

export default HomeNyheter
