// src/pages/omOss.js
import React from 'react'
import '../styles/pages/omOss.css'

// (Optionally) import the sections you’ll render below the hero
import OmOssOm from '../sections/OmOssOm'
import OmOssHistorie from '../sections/OmOssHistorie'

const OmOss = () => (
  <div className="om-oss-page">
    <header className="om-oss-hero">
      <h1>Om Oss</h1>
    </header>
    {/* Import other sections under the 500px hero */}
    <OmOssOm />
    <OmOssHistorie />
  </div>
)

export default OmOss
