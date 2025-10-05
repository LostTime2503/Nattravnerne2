import React from "react";
import "./../styles/components/NyheterBox.css";

export default function NyheterBox({ id, image, overlayImage, title, content }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function onOverlayClick(e) {
    if (e.target.classList.contains("Nyheter-Box__overlay")) setOpen(false);
  }

  return (
    <div className="Nyheter-Box">
      <div className="Nyheter-Box__media">
        <img
          className="Nyheter-Box__image"
          src={image}
          alt={title}
          onClick={() => setOpen(true)}
        />
      </div>

      <div className="Nyheter-Box__header-row">
        <h3
          className="Nyheter-Box__header"
          onClick={() => setOpen(true)}
        >
          {title}
        </h3>
        <button
          className="Nyheter-Box__open-btn"
          aria-expanded={open}
          aria-controls={`nyheter-article-${id}`}
          onClick={() => setOpen(true)}
        >
          <span className="Nyheter-Box__open-arrow">→</span>
        </button>
      </div>

      {open && (
        <div
          className="Nyheter-Box__overlay"
          role="dialog"
          aria-modal="true"
          id={`nyheter-article-${id}`}
          onClick={onOverlayClick}
        >
          <div className="Nyheter-Box__dialog">
            <button
              className="Nyheter-Box__close"
              aria-label="Lukk artikkel"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <div className="Nyheter-Box__dialog-media">
              <img
                className="Nyheter-Box__dialog-image"
                src={overlayImage}
                alt={title}
              />
            </div>

            <div className="Nyheter-Box__dialog-body">
              <h2 className="Nyheter-Box__dialog-title">{title}</h2>
              <div className="Nyheter-Box__dialog-content">
                {content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
