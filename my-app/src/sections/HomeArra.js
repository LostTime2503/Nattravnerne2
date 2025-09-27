// /components/HomeArra.js
import React from 'react'
import ArraBox from '../components/arraBox'

// 1. Remove react-icons import
// import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'

// 2. Import your own icon assets
import mapIcon from '../assets/icons/map_icon.png'
import clockIcon from '../assets/icons/clock_icon.png'

// 3. Section‐level CSS (grid, header, colors)
import '../styles/sections/HomeArra.css'
// 4. Card‐level CSS (ArraBox styles)
import '../styles/components/arraBox.css'

const HomeArra = () => {
  const boxes = [
    {
      imageSrc: '/images/spot1.jpg',
      date: { day: '12', month: 'Oct' },
      title: 'Mountain Hike',
      points: [
        {
          icon: (
            <img
              src={mapIcon}
              alt="Location"
              className="arra-box-icon"
            />
          ),
          text: 'Byflaten, Norway',
        },
        {
          icon: (
            <img
              src={clockIcon}
              alt="Time"
              className="arra-box-icon"
            />
          ),
          text: '8:00 AM – 4:00 PM',
        },
      ],
    },
    {
      imageSrc: '/images/spot2.jpg',
      date: { day: '18', month: 'Oct' },
      title: 'Forest Foray',
      points: [
        {
          icon: (
            <img
              src={mapIcon}
              alt="Location"
              className="arra-box-icon"
            />
          ),
          text: 'Nord‐Østerdalen',
        },
        {
          icon: (
            <img
              src={clockIcon}
              alt="Time"
              className="arra-box-icon"
            />
          ),
          text: '10:00 AM – 2:00 PM',
        },
      ],
    },
    // …add more boxes here
  ]

  return (
    <section className="home-arra-section">
      <h2 className="home-arra-header">Upcoming Arrangements</h2>
      <div className="home-arra-boxes">
        {boxes.map((box, idx) => (
          <ArraBox key={idx} {...box} />
        ))}
      </div>
    </section>
  )
}

export default HomeArra
