// src/components/StøttOssDonasjon.js
import React from 'react';
import '../styles/sections/StøttOssDonasjon.css';

const donationOptions = [
  { amount: 100, description: 'En kopp kaffe ☕' },
  { amount: 250, description: 'Et godt måltid 🍽️' },
  { amount: 500, description: 'Full dags støtte 💪' },
];

export default function StøttOssDonasjon() {
  const handleDonate = (amount) => {
    // By default, redirect to a query-based URL. Swap out for your gateway.
    window.location.href = `/donate?amount=${amount}`;
  };

  return (
    <section className="støtt-oss-donasjon">
      <div className="støtt-oss-donasjon__container">
        <h2 className="støtt-oss-donasjon__title">Donere</h2>
        <p className="støtt-oss-donasjon__subtitle">
          Din støtte hjelper oss å fortsette arbeidet med å gjøre en forskjell.
        </p>
        <div className="støtt-oss-donasjon__grid">
          {donationOptions.map(({ amount, description }) => (
            <div
              key={amount}
              className="støtt-oss-donasjon__card"
            >
              <h3 className="støtt-oss-donasjon__card-title">
                {amount} kr
              </h3>
              <p className="støtt-oss-donasjon__card-description">
              </p>
              <button
                className="støtt-oss-donasjon__button"
                onClick={() => handleDonate(amount)}
              >
                Doner nå
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
