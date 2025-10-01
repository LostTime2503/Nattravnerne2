import React, { useState } from 'react'
import '../styles/sections/KontaktOssSkjema.css'
import BottomImage from '../assets/vectors/Vector_Footer.png'  // ← your image

const KontaktOssSkjema = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send `formData` to your API or email service
    console.log('Sending message:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="kontakt-oss-skjema-section">
      <div className="kontakt-oss-skjema-container">
        <h2 className="kontakt-oss-skjema-title">Kontakt Oss</h2>
        <form
          className="kontakt-oss-skjema-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="kontakt-oss-skjema-group">
            <label
              htmlFor="name"
              className="kontakt-oss-skjema-label"
            >
              Navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="kontakt-oss-skjema-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="kontakt-oss-skjema-group">
            <label
              htmlFor="email"
              className="kontakt-oss-skjema-label"
            >
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="kontakt-oss-skjema-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="kontakt-oss-skjema-group">
            <label
              htmlFor="message"
              className="kontakt-oss-skjema-label"
            >
              Melding
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="kontakt-oss-skjema-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="kontakt-oss-skjema-button"
          >
            Send Melding
          </button>
        </form>
      </div>
        <img
            src={BottomImage}
            alt=""
            aria-hidden="true"
            className="kontakt-oss-BottomImage"
        />
    </section>
  )
}

export default KontaktOssSkjema
