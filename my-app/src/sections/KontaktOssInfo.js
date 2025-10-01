// src/sections/KontaktOssInfo.js
import React from 'react'
import '../styles/sections/KontaktOssInfo.css'

import kontaktOssIcon1 from '../assets/icons/phone_icon.png'
import kontaktOssIcon2 from '../assets/icons/email_icon.png'
import kontaktOssIcon3 from '../assets/icons/presse_icon.png'

const KontaktOssInfo = ({ items }) => {
  // Use the imported variables here
  const defaultItems = [
    {
      imgSrc: kontaktOssIcon1,
      title: 'Ring Oss',
      subtitle: '+47 123 45 678',
      alt: 'Telefonikon',
    },
    {
      imgSrc: kontaktOssIcon2,
      title: 'Send E-post',
      subtitle: 'post@dittdomene.no',
      alt: 'E-postikon',
    },
    {
      imgSrc: kontaktOssIcon3,
      title: 'Besøk Oss',
      subtitle: 'Storgata 1, 2800 Gjøvik',
      alt: 'Kartikon',
    },
  ]

  // If the parent passed in exactly 3 items, use those
  const cols = items?.length === 3 ? items : defaultItems

  return (
    <section className="kontakt-oss-info-section">
      <div className="kontakt-oss-info-container">
        {cols.map((col, idx) => (
          <div key={idx} className="kontakt-oss-info-item">
            <img
              className="kontakt-oss-info-image"
              src={col.imgSrc}
              alt={col.alt}
            />
            <h3 className="kontakt-oss-info-header">{col.title}</h3>
            <h4 className="kontakt-oss-info-subheader">
              {col.subtitle}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KontaktOssInfo
