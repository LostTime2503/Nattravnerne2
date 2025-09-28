// src/components/ArraBox.js
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/arraBox.css'

const ArraBox = ({
  imageSrc,
  date,
  title,
  points,
  firstIconSrc,
  secondIconSrc,
}) => (
  <div className="arra-box">
    <div className="arra-box-image-wrapper">
      <img src={imageSrc} alt={title} className="arra-box-image" />
      <div className="arra-box-date">
        <span className="arra-box-date-day">{date.day}</span>
        <span className="arra-box-date-month">{date.month}</span>
      </div>
    </div>

    <h3 className="arra-box-title">{title}</h3>

    <ul className="arra-box-points">
      {points.map((text, i) => (
        <li key={i} className="arra-box-point">
          <img
            src={i === 0 ? firstIconSrc : secondIconSrc}
            alt=""
            className="arra-box-icon-image"
          />
          <span className="arra-box-text">{text}</span>
        </li>
      ))}
    </ul>
  </div>
)

ArraBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  date: PropTypes.shape({
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstIconSrc: PropTypes.string.isRequired,
  secondIconSrc: PropTypes.string.isRequired,
}

export default ArraBox
