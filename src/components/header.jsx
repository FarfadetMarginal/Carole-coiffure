import { useState } from "react";

const Header = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <a className="logorelou" href="#">
          Carole <img src="./logovuhbjn.png" alt="logo" /> Fazi
        </a>
        <div className="header1">
          <img src="./epinglegauche.png" alt="epingle gauche cool" />
          <a href="#" onClick={(e) => { e.preventDefault(); setContactOpen(true); }}>
            Prendre rendez-vous
          </a>
          <a href="#ht" onClick={(e) => handleSmoothScroll(e, "ht")}>
            Tarifs et horaires
          </a>
          <a href="#localisation" onClick={(e) => handleSmoothScroll(e, "localisation")}>
            Où me trouver
          </a>
          <img src="./epingledroite.png" alt="epingle droite cool" />
        </div>
      </header>


      {contactOpen && (
        <div className="contact-overlay" onClick={() => setContactOpen(false)}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="contact-popup__close" onClick={() => setContactOpen(false)}>
              ✕
            </button>
            <p className="contact-popup__label">Prendre rendez-vous</p>
            <a className="contact-popup__tel" href="tel:+33494808695">
              04 94 80 86 95
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;