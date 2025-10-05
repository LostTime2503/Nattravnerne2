import React from "react";
import NyheterBox from "../components/NyheterBox";
import "./../styles/sections/NyheterNyheter.css";
import placeholderPic from "../assets/vectors/picturenews.png";
import placeholderOverlay from "../assets/placeholders/avlangt_placeholder.png";
import BottomImage from '../assets/vectors/Vector_Footer.png'  // ← your image

const sampleNews = [
  { id: 1, title: "Nyhet 1: Viktig oppdatering", image: placeholderPic, content: (
      <>
        <p>Dette er hele innholdet i nyhet 1. Her kan du skrive flere avsnitt og HTML-elementer.</p>
        <p>Mer tekst, lenker eller bilder etter behov.</p>
      </>
    ),
  },
  { id: 2, title: "Nyhet 2: Hendelse i byen", image: placeholderPic, content: (
      <>
        <p>Detaljert artikkeltekst for nyhet 2.</p>
      </>
    ),
  },
  { id: 3, title: "Nyhet 3: Teknologi nyvinning", image: placeholderPic, content: (
      <>
        <p>Tekst om teknologinyheten.</p>
      </>
    ),
  },
  { id: 4, title: "Nyhet 4: Kultur og event", image: placeholderPic, content: <p>Detaljer om kulturarrangementet.</p> },
  { id: 5, title: "Nyhet 5: Sport", image: placeholderPic, content: <p>Oppsummering av kamp og resultater.</p> },
  { id: 6, title: "Nyhet 6: Økonomi", image: placeholderPic, content: <p>Økonominyheter og analyser.</p> },
  { id: 7, title: "Nyhet 7: Vitenskap", image: placeholderPic, content: <p>Forskning og funn.</p> },
  { id: 8, title: "Nyhet 8: Underholdning", image: placeholderPic, content: <p>Nyheter fra underholdningsbransjen.</p> },
  { id: 9, title: "Nyhet 9: Lokalt", image: placeholderPic, content: <p>Lokale nyheter og oppdateringer.</p> },
];

export default function NyheterNyheter() {
  return (
    <section className="Nyheter-Nyheter">
      <div className="Nyheter-Nyheter__inner">
        <h1 className="Nyheter-Nyheter__title">Nyheter</h1>

        <div className="Nyheter-Nyheter__grid">
          {sampleNews.map((n) => (
            <NyheterBox
              key={n.id}
              id={n.id}
              image={n.image}
              overlayImage={placeholderOverlay}
              title={n.title}
              content={n.content}
            />
          ))}
        </div>
      </div>
      <img
        src={BottomImage}
        alt=""
        aria-hidden="true"
        className="Nyheter-BottomImage"
      />
    </section>
  );
}
