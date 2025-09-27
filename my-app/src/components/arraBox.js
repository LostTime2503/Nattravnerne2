import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/arraBox.css'

const ArraBox = ({ imageSrc, date, title, points }) => (
  <div className="arra-box">
    <div className="arra-box-image-wrapper">
      <img
        src={imageSrc}
        alt={title}
        className="arra-box-image"
      />
      <div className="arra-box-date">
        <span className="arra-box-date-day">{date.day}</span>
        <span className="arra-box-date-month">{date.month}</span>
      </div>
    </div>

    <h3 className="arra-box-title">{title}</h3>

    <ul className="arra-box-points">
      {points.map((point, i) => (
        <li key={i} className="arra-box-point">
          <span className="arra-box-icon">{point.icon}</span>
          <span className="arra-box-text">{point.text}</span>
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
  points: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ArraBox
