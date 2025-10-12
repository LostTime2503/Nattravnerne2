import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/pages/frivillig.css'
import BottomImage from '../assets/vectors/Vector_Footer.png'  // ← your image

const FrivilligPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // derive tab from the current location.search every time
  const getTabFromSearch = (search) => {
    const params = new URLSearchParams(search)
    return params.get('tab') === 'logg-inn' ? 'logg-inn' : 'bli-frivillig'
  }

  const [activeTab, setActiveTab] = useState(() => getTabFromSearch(location.search))
  const [age, setAge] = useState('')

  // Keep activeTab in sync with URL (so header links that change only the query update the UI)
  useEffect(() => {
    const tab = getTabFromSearch(location.search)
    setActiveTab(tab)
  }, [location.search])

  // Keep URL in sync when user switches tabs via the page controls
  useEffect(() => {
    const search = activeTab === 'logg-inn' ? '?tab=logg-inn' : '?tab=bli-frivillig'
    const path = `/frivillig${search}`
    if (location.pathname + location.search !== path) {
      navigate(path, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    const numericAge = Number(age)
    if (!Number.isFinite(numericAge) || numericAge < 18) {
      alert('Du må være minst 18 år for å bli frivillig.')
      return
    }
    // submit logic here
    alert('Registrering sendt')
  }

  return (
    <div className="frivillig-page__wrapper">
      <div className="frivillig-page__overlay">
        <div className="frivillig-page__card" role="region" aria-labelledby="frivillig-card-heading">
          <h2 id="frivillig-card-heading" className="frivillig-page__title">Velg handling</h2>

          <div className="frivillig-page__tabs" role="tablist" aria-label="Logg inn eller Bli frivillig">
            <button
              className={`frivillig-page__tab ${activeTab === 'logg-inn' ? 'frivillig-page__tab--active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'logg-inn'}
              onClick={() => setActiveTab('logg-inn')}
            >
              Logg Inn
            </button>

            <button
              className={`frivillig-page__tab ${activeTab === 'bli-frivillig' ? 'frivillig-page__tab--active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'bli-frivillig'}
              onClick={() => setActiveTab('bli-frivillig')}
            >
              Bli frivillig
            </button>
          </div>

          <div className="frivillig-page__form-area">
            {activeTab === 'logg-inn' && (
              <form className="logg-inn-page__form" onSubmit={(e) => e.preventDefault()}>
                <label className="logg-inn-page__label" htmlFor="li-email">E-post</label>
                <input className="logg-inn-page__input" id="li-email" type="email" required />

                <label className="logg-inn-page__label" htmlFor="li-password">Passord</label>
                <input className="logg-inn-page__input" id="li-password" type="password" required />

                <div className="logg-inn-page__actions">
                  <button className="logg-inn-page__submit btn btn--primary" type="submit">Logg Inn</button>
                  <button
                    type="button"
                    className="logg-inn-page__link btn btn--secondary"
                    onClick={() => setActiveTab('bli-frivillig')}
                  >
                    Vil du heller bli frivillig?
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'bli-frivillig' && (
              <form className="frivillig-page__form" onSubmit={handleRegisterSubmit}>
                <div className="frivillig-page__two-col">
                  <div>
                    <label className="frivillig-page__label" htmlFor="fv-name">Navn</label>
                    <input className="frivillig-page__input" id="fv-name" type="text" required />
                  </div>

                  <div>
                    <label className="frivillig-page__label" htmlFor="fv-email">E-post</label>
                    <input className="frivillig-page__input" id="fv-email" type="email" required />
                  </div>
                </div>

                <label className="frivillig-page__label" htmlFor="fv-age">Alder</label>
                <input
                  className="frivillig-page__input"
                  id="fv-age"
                  type="number"
                  min="18"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
                <div className="frivillig-page__help">Du må være minst 18 år for å registrere deg.</div>

                <label className="frivillig-page__label" htmlFor="fv-interest">Interessefelt</label>
                <select className="frivillig-page__input" id="fv-interest" defaultValue="">
                  <option value="" disabled>Velg ett</option>
                  <option value="arrangement">Arrangement</option>
                  <option value="administrasjon">Administrasjon</option>
                  <option value="sosialt">Sosialt arbeid</option>
                </select>

                <label className="frivillig-page__label" htmlFor="fv-message">Kort melding</label>
                <textarea className="frivillig-page__textarea" id="fv-message" rows="4" />

                <div className="frivillig-page__actions">
                  <button className="frivillig-page__submit btn btn--primary" type="submit">Send søknad</button>
                  <button
                    type="button"
                    className="frivillig-page__link btn btn--secondary"
                    onClick={() => setActiveTab('logg-inn')}
                  >
                    Allerede medlem? Logg inn
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    <img
        src={BottomImage}
        alt=""
        aria-hidden="true"
        className="Frivillig-Page-BottomImage"
    />
    </div>
  )
}

export default FrivilligPage
