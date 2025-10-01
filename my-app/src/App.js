// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import OmOss from './pages/omOss'
import KontaktOss from './pages/kontaktOss'
import Nyheter from './pages/nyheter'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/kontakt-oss" element={<KontaktOss />} />
        <Route path="/nyheter" element={<Nyheter />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
