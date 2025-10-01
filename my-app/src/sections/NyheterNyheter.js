import React from "react";
import NyheterBox from "../components/NyheterBox";
import "./../styles/sections/NyheterNyheter.css";
import placeholderPic from "../assets/vectors/picturenews.png";

const sampleNews = [
  {
    id: 1,
    title: "Nyhet 1: Viktig oppdatering",
    image: placeholderPic,
    excerpt: "Kort ingress for nyhet 1 som fanger oppmerksomheten.",
    content: (
      <>
        <p>Dette er hele innholdet i nyhet 1. Her kan du skrive flere avsnitt og HTML-elementer.</p>
        <p>Mer tekst, lenker eller bilder etter behov.</p>
      </>
    ),
  },
  {
    id: 2,
    title: "Nyhet 2: Hendelse i byen",
    image: placeholderPic,
    excerpt: "Kort ingress for nyhet 2.",
    content: (
      <>
        <p>Detaljert artikkeltekst for nyhet 2.</p>
      </>
    ),
  },
  {
    id: 3,
    title: "Nyhet 3: Teknologi nyvinning",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 3.",
    content: (
      <>
        <p>Tekst om teknologinyheten.</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Nyhet 4: Kultur og event",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 4.",
    content: <p>Detaljer om kulturarrangementet.</p>,
  },
  {
    id: 5,
    title: "Nyhet 5: Sport",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 5.",
    content: <p>Oppsummering av kamp og resultater.</p>,
  },
  {
    id: 6,
    title: "Nyhet 6: Økonomi",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 6.",
    content: <p>Økonominyheter og analyser.</p>,
  },
  {
    id: 7,
    title: "Nyhet 7: Vitenskap",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 7.",
    content: <p>Forskning og funn.</p>,
  },
  {
    id: 8,
    title: "Nyhet 8: Underholdning",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 8.",
    content: <p>Nyheter fra underholdningsbransjen.</p>,
  },
  {
    id: 9,
    title: "Nyhet 9: Lokalt",
    image: placeholderPic,
    excerpt: "Ingress for nyhet 9.",
    content: <p>Lokale nyheter og oppdateringer.</p>,
  },
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
              title={n.title}
              excerpt={n.excerpt}
              content={n.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
