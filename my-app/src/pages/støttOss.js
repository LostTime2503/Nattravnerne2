// src/pages/omOss.js
import React from 'react'
import '../styles/pages/støttOss.css'
import HvaStøtt from '../sections/StøttOssHva'
import Donasjoner from '../sections/StøttOssDonasjon'
import Bedrift from '../sections/StøttOssBedrift'
import Sponsor from '../sections/StøttOssSponsor'

const OmOss = () => (
  <div className="støtt-oss-page">
    <header className="støtt-oss-hero">
      <h1>Støtt Oss</h1>
    </header>
    {/* Import other sections under the 500px hero */}
    <HvaStøtt />
    <Donasjoner />
    <Bedrift />
    <Sponsor />
  </div>
)

export default OmOss
