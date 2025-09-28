import React from 'react'
import '../styles/components/sentralerBox.css'

const SentralerBox = ({
  imageSrc,
  title,
  description,
  link = '#',
  iconSrc
}) => (
  <div className="Sentraler-Box">
    <div className="Sentraler-Box__image-wrapper">
      <img
        src={imageSrc}
        alt={title}
        className="Sentraler-Box__image"
      />
    </div>

    <h3 className="Sentraler-Box__header">
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          className="Sentraler-Box__header-icon"
        />
      )}
      <a href={link} className="Sentraler-Box__header-link">
        {title}
      </a>
    </h3>

    <p className="Sentraler-Box__text">{description}</p>
  </div>
)

export default SentralerBox
