import React, { useRef } from 'react';
import '../styles/sections/StøttOssSponsor.css';
import BottomImage from '../assets/vectors/Vector_Footer.png'  // ← your image

// Import your sponsor logos here
import sponsor1 from '../assets/pictures/sponsor_1.png';
import sponsor2 from '../assets/pictures/sponsor_2.png';
import sponsor3 from '../assets/pictures/sponsor_3.png';
import sponsor4 from '../assets/pictures/sponsor_4.png';
import sponsor5 from '../assets/pictures/sponsor_5.png';

const sponsors = [
  {
    name: 'Sponsor One',
    logo: sponsor1,
    url: 'https://sponsor-one.com',
  },
  {
    name: 'Sponsor Two',
    logo: sponsor2,
    url: 'https://sponsor-two.com',
  },
  {
    name: 'Sponsor Three',
    logo: sponsor3,
    url: 'https://sponsor-three.com',
  },
  {
    name: 'Sponsor Four',
    logo: sponsor4,
    url: 'https://sponsor-four.com',
  },
  {
    name: 'Sponsor Five',
    logo: sponsor5,
    url: 'https://sponsor-five.com',
  },
];

export default function StøttOssSponsor() {
  const carouselRef = useRef(null);
  const scrollAmount = 240; // item width + gap

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="støtt-oss-sponsor">
      <div className="støtt-oss-sponsor__container">
        <h2 className="støtt-oss-sponsor__title">Våre sponsorer</h2>

        <button
          className="støtt-oss-sponsor__arrow støtt-oss-sponsor__arrow--left"
          onClick={scrollLeft}
          aria-label="Forrige sponsor"
        >
          ‹
        </button>

        <div
          className="støtt-oss-sponsor__carousel"
          ref={carouselRef}
        >
          {sponsors.map(({ name, logo, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="støtt-oss-sponsor__item"
            >
              <img
                src={logo}
                alt={name}
                className="støtt-oss-sponsor__logo"
              />
            </a>
          ))}
        </div>

        <button
          className="støtt-oss-sponsor__arrow støtt-oss-sponsor__arrow--right"
          onClick={scrollRight}
          aria-label="Neste sponsor"
        >
          ›
        </button>
      </div>
    <img
        src={BottomImage}
        alt=""
        aria-hidden="true"
        className="støtt-oss-sponsor-BottomImage"
    />
    </section>
  );
}
