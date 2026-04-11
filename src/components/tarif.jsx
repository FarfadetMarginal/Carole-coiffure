import { useState, useRef, useEffect } from "react";
import tarifs from "../data/prix.json";

const horaires = {
  ete: [
    { jour: "Lundi",    heures: "Fermé" },
    { jour: "Mardi",    heures: "7h - 13h" },
    { jour: "Mercredi", heures: "7h - 13h" },
    { jour: "Jeudi",    heures: "7h - 13h" },
    { jour: "Vendredi", heures: "7h - 13h" },
    { jour: "Samedi",   heures: "7h - 13h" },
    { jour: "Dimanche", heures: "Fermé" },
  ],
  hiver: [
    { jour: "Lundi",    heures: "Fermé" },
    { jour: "Mardi",    heures: "9h00 - 12h00 ; 14h30 - 19h00" },
    { jour: "Mercredi", heures: "9h00 - 12h00" },
    { jour: "Jeudi",    heures: "9h00 - 12h00 ; 14h30 - 19h00" },
    { jour: "Vendredi", heures: "9h00 - 12h00 ; 14h30 - 18h00" },
    { jour: "Samedi",   heures: "9h00 - 12h00 ; 14h30 - 17h00" },
    { jour: "Dimanche", heures: "Fermé" },
  ],
};

const TARIFS_VISIBLES = 8;

function getSaison() {
  const mois = new Date().getMonth();
  return mois >= 5.5 && mois <= 7.5 ? "ete" : "hiver";
}

function AnimatedExtra({ open, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(open ? ref.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      style={{
        overflow: "hidden",
        height: height,
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function HorairesTarifs() {
  const saisonReelle = getSaison();
  const [saison, setSaison] = useState(saisonReelle);
  const [plusOuverts, setPlusOuverts] = useState(false);

  const saisonLabel = saison === "ete" ? "Été : du 15 juin au 15 août" : "Hiver";
  const autreSaison = saison === "ete" ? "hiver" : "ete";
  const autreSaisonLabel = saison === "ete" ? "Hiver" : "Été";

  const tarifsVisibles = tarifs.slice(0, TARIFS_VISIBLES);
  const tarifsExtra = tarifs.slice(TARIFS_VISIBLES);

  return (
    <section className="ht" id="ht">

      <div className="ht__horaires">
        <h2 className="ht__title">Horaires</h2>
        <div className="ht__badge-row">
          <span className="ht__badge">{saisonLabel}</span>
          <button
            className="ht__toggle"
            onClick={() => setSaison(autreSaison)}
          >
            Voir horaires {autreSaisonLabel}
          </button>
        </div>
        <table className="ht__table">
          <tbody>
            {horaires[saison].map((row) => (
              <tr key={row.jour} className={row.heures === "Fermé" ? "ht__row ht__row--ferme" : "ht__row"}>
                <td className="ht__jour">{row.jour}</td>
                <td className="ht__heures">{row.heures}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ht__tarifs">
        <h2 className="ht__title">Tarifs</h2>
        <ul className="ht__list">
          {tarifsVisibles.map((t) => (
            <li key={t.id} className="ht__item">
              <span className="ht__name">{t.name}</span>
              <span className="ht__line" />
              <span className="ht__prix">{t.prix.toFixed(2).replace(".", ",")} €</span>
            </li>
          ))}

          {tarifsExtra.length > 0 && (
            <>
              <AnimatedExtra open={plusOuverts}>
                {tarifsExtra.map((t) => (
                  <li key={t.id} className="ht__item">
                    <span className="ht__name">{t.name}</span>
                    <span className="ht__line" />
                    <span className="ht__prix">{t.prix.toFixed(2).replace(".", ",")} €</span>
                  </li>
                ))}
              </AnimatedExtra>

              <li className="ht__item ht__item--more">
                <button
                  className="ht__more"
                  onClick={() => setPlusOuverts(!plusOuverts)}
                >
                  {plusOuverts
                    ? `Afficher moins ▲`
                    : `Afficher plus (${tarifsExtra.length}) ▼`}
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

    </section>
  );
}