import React, { useState, useEffect } from "react";
import MapComponent from "./mapComponent";
import InputAddress from "./inputAddress";
import "./articleMap.css";

const ArticleMap = () => {
  // Statuts des risques
  const [innondationStatus, setInnondationStatus] = useState(true);
  const [fireStatus, setFireStatus] = useState(true);
  const [seismeStatus, setSeismeStatus] = useState(false);

  // Fonction pour générer l'information dynamique
  const getStatusInfo = () => {
    if (innondationStatus && fireStatus && seismeStatus) {
      return {
        title: "Tous les risques sont présents",
        details: "Risque d'inondation, de feu et de séisme dans cette zone. Soyez vigilant et suivez les recommandations locales."
      };
    } else if (innondationStatus && fireStatus) {
      return {
        title: "Risque d'inondation et de feu",
        details: "L'inondation et les incendies peuvent coexister dans certaines zones. Assurez-vous d'avoir un plan d'évacuation et un kit d'urgence."
      };
    } else if (innondationStatus && seismeStatus) {
      return {
        title: "Risque d'inondation et de séisme",
        details: "Les inondations peuvent entraîner des glissements de terrain et des secousses sismiques. Il est essentiel d'avoir un plan d'évacuation."
      };
    } else if (fireStatus && seismeStatus) {
      return {
        title: "Risque de feu et de séisme",
        details: "Les incendies et les séismes peuvent rendre certaines zones particulièrement dangereuses. Soyez préparé à des évacuations rapides."
      };
    } else if (innondationStatus) {
      return {
        title: "Risque d'inondation",
        details: "Les inondations peuvent submerger des zones entières, entrainer des coupures de courant et déstabiliser les infrastructures. Ayez un plan d'évacuation."
      };
    } else if (fireStatus) {
      return {
        title: "Risque de feu",
        details: "Le risque d'incendie est élevé dans cette région. Assurez-vous que vos habitats sont protégés et soyez attentif aux alertes locales."
      };
    } else if (seismeStatus) {
      return {
        title: "Risque de séisme",
        details: "Les séismes peuvent causer des dégâts considérables. Préparez-vous avec un kit d'urgence et sachez où vous protéger en cas de tremblement de terre."
      };
    } else {
      return {
        title: "Aucun risque n'est présent",
        details: "Aucun danger identifié dans cette région pour l'instant. Restez vigilant aux changements de conditions locales."
      };
    }
  };

  useEffect(() => {
    getStatusInfo();
  }, [innondationStatus, fireStatus, seismeStatus]);

  const statusInfo = getStatusInfo();

  return (
    <div className="container-article-map test-padding-top">
      <h1 className="article-map-title">Titre de la Carte</h1>

      <div className="input-container">
        <InputAddress />
      </div>

      <div className="map-and-info">
        <div className="container-global-map">
          <MapComponent />
        </div>

        <div className="container-info-card">
          <h2>{statusInfo.title}</h2>
          <p>{statusInfo.details}</p>
        </div>
      </div>

      {/* Checklist de risques */}
      <div className="checklist-container">
        {innondationStatus && (
          <div className="checklist">
            <h3>Checklist Inondation</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Assurez-vous que votre logement est à l'abri des inondations.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Préparez un kit d'urgence incluant des vivres, de l'eau et des médicaments.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Évacuez les zones basses en cas de montée des eaux.
                </label>
              </li>
            </ul>
          </div>
        )}
        {fireStatus && (
          <div className="checklist">
            <h3>Checklist Incendie</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Évitez les zones à risque d'incendie.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Assurez-vous que vos foyers et appareils électriques sont sécurisés.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Gardez une trousse d'urgence avec des masques et de l'eau.
                </label>
              </li>
            </ul>
          </div>
        )}
        {seismeStatus && (
          <div className="checklist">
            <h3>Checklist Séisme</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Installez des dispositifs de sécurité pour limiter les risques de blessures pendant un tremblement de terre.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Identifiez les zones sûres de votre habitation.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Préparez un kit de survie avec des lampes de poche et de l'eau potable.
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleMap;
