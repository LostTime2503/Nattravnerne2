import React from 'react';
import '../styles/sections/StøttOssHva.css';

const supportItems = [
  {
    icon: '🦺',
    title: 'Refleksvester & utstyr',
    description:
      'Bidra til at Natteravnene er synlige og trygge på nattevakt med ekstra refleksvester og førstehjelpsutstyr.',
  },
  {
    icon: '☕',
    title: 'Varme drikker & snacks',
    description:
      'Støtt pauser under lange vakter – varme drikker og noe å bite i holder energien oppe gjennom hele natta.',
  },
  {
    icon: '🎓',
    title: 'Opplæring & kurs',
    description:
      'Gi frivillige Natteravnene tilgang på kurs og workshops som styrker trygghet og engasjement i lokalsamfunnet.',
  },
];

export default function StøttOssHva() {
  return (
    <section className="støtt-oss-hva">
      <div className="støtt-oss-hva__container">
        <h2 className="støtt-oss-hva__title">
          Hva støtter du hos Natteravnene?
        </h2>
        <div className="støtt-oss-hva__list">
          {supportItems.map(({ icon, title, description }) => (
            <div className="støtt-oss-hva__item" key={title}>
              <div className="støtt-oss-hva__icon">{icon}</div>
              <h3 className="støtt-oss-hva__item-title">{title}</h3>
              <p className="støtt-oss-hva__item-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
