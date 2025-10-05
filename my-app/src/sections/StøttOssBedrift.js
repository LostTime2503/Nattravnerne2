import React from 'react';
import '../styles/sections/StøttOssBedrift.css';
import bgImage from '../assets/background_pics/bilde_nattravnene.png';
import BlackMuffin from '../assets/vectors/Vector_Muffin_PitchBlack.png'

const sponsorBenefits = [
  {
    icon: '🚀',
    title: 'Økt synlighet',
    description:
      'Få bedriftens logo på vår nettside, i sosiale medier og i arrangementsmateriell.',
  },
  {
    icon: '🤝',
    title: 'Nettverksmuligheter',
    description:
      'Delta på eksklusive bedriftsarrangementer og bygg relasjoner med lokale aktører.',
  },
  {
    icon: '📈',
    title: 'Positiv merkevarebygging',
    description:
      'Vis at dere tar samfunnsansvar og styrk omdømmet hos både kunder og ansatte.',
  },
];

export default function StøttOssBedrift() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleContact = () => {
    window.location.href = '/kontakt?tema=sponsor';
  };

  return (
    <section className="støtt-oss-bedrift">
      <div className="støtt-oss-bedrift__header" style={headerStyle}>
        <h2 className="støtt-oss-bedrift__title">Støtt oss som bedrift</h2>
        <p className="støtt-oss-bedrift__subtitle">
          Vis at deres bedrift bryr seg om trygge lokalmiljø – bli sponsor hos Natteravnene.
        </p>
      </div>

      <div className="støtt-oss-bedrift__box">
        <div className="støtt-oss-bedrift__benefits">
          {sponsorBenefits.map(({ icon, title, description }) => (
            <div className="støtt-oss-bedrift__benefit" key={title}>
              <div className="støtt-oss-bedrift__icon">{icon}</div>
              <h3 className="støtt-oss-bedrift__benefit-title">{title}</h3>
              <p className="støtt-oss-bedrift__benefit-desc">{description}</p>
            </div>
          ))}
        </div>
        <button
          className="støtt-oss-bedrift__button"
          onClick={handleContact}
        >
          Kontakt oss om sponsing
        </button>
      </div>
        <img
            src={BlackMuffin}
            alt="Black muffin"
            className="støtt-oss-bedrift__muffin"
        />
    </section>
  );
}
