import { useState, useEffect } from "react";

const photos = [
  { src: "/DSC_0599.jpg", alt: "Photo 1" },
  { src: "/DSC_0600.jpg", alt: "Photo 2" },
  { src: "/DSC_0602.jpg", alt: "Photo 3" },
];

const MAP_EMBED_URL =
  "https://cartes.app/?clic=43.38675%7C6.09542&style=base#19.2/43.3867559/6.0956007";

export default function Ou() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="localisation" id="localisation">

      <div className="localisation__map">
        <div className="locname2">
            <h2 className="localisation__title">Où me trouver?</h2>
        <a href="https://www.google.com/maps/place/Carole+coiffure/@43.3868909,6.0953293,17.75z/data=!4m15!1m8!3m7!1s0x12c941e57cd2f639:0x40819a5fd8fcf40!2s83170+Brignoles!3b1!8m2!3d43.406204!4d6.0592489!16s%2Fg%2F11bc6bnnbq!3m5!1s0xd56612310c563d3:0x80800229a6bfc390!8m2!3d43.3868209!4d6.0955772!16s%2Fg%2F11vwp0mdhy?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
        className="localisation__link"
        >
            Ouvrir dans Google Maps
        </a>
        </div>
            <p className="localisation__address">13 chemin Neuf, 83170 Camps la Source</p>
        <div className="localisation__map-frame">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
      </div>

      <div className="localisation__slideshow">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className={`localisation__slide ${i === current ? "localisation__slide--active" : ""}`}
          />
        ))}
  
      </div>

    </section>
  );
}