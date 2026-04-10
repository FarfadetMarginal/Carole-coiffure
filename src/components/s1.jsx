import { useEffect, useRef } from "react";

const photos = [
  { src: "/DSC_0600.jpg", alt: "Photo 1" },
  { src: "/pexels-cottonbro-3993442.jpg", alt: "Photo 2" },
  { src: "/DSC_0591.jpg", alt: "Photo 3" },
  { src: "/pexels-konrads-photo-14615063.jpg", alt: "Photo 4" },
  { src: "/DSC_0592.jpg", alt: "Photo 5" },
  { src: "/pexels-cottonbro-3993467.jpg", alt: "Photo 6" },
  { src: "/DSC_0593.jpg", alt: "Photo 7" },
  { src: "/pexels-cottonbro-7440128.jpg", alt: "Photo 8" },
  { src: "/pexels-vozradui-12298452.jpg", alt: "Photo 9" },
];

export default function Carousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...photos, ...photos].map((p, i) => (
          <div className="carousel-card" key={i}>
            <img src={p.src} alt={p.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}