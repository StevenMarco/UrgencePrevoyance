import React, { useEffect, useState } from 'react';
import './PageArticles.css';
import imgEau from "../assets/Eau.jpg";
import imgIncendie from "../assets/incendie.jpg";
import imgSeisme from "../assets/seisme.jpg";

function PageArticles() {
  const [backgroundColor, setBackgroundColor] = useState("#FFF");
  const [selectedRisk, setSelectedRisk] = useState(null);  

  useEffect(() => {
    if (selectedRisk === null) {
      setBackgroundColor("#E8E8E8");
    }
  });

  const handleClick = (type) => {
    setSelectedRisk(type);  
    switch (type) {
      case "eau":
        setBackgroundColor("#30475E");
        break;
      case "feu":
        setBackgroundColor("#F05454");
        break;
      case "terre":
        setBackgroundColor("#E8E8E8");
        break;
      default:
        setBackgroundColor("#E8E8E8");
    }
  };

  return (
    <div className="Page_Articles" style={{ backgroundColor }}>
      <div className='Paragraphe'>
        {selectedRisk === null && (
          <h1>
            Connaissez-vous les 3 plus grands risques de catastrophes sur la région PACA ?
          </h1>
        )}
      </div>

      <div className='choix'>
        <div onClick={() => handleClick("eau")}>
          <img src={imgEau} className='Inondation' alt="imgEau" />
        </div>
        <div onClick={() => handleClick("feu")}>
          <img src={imgIncendie} className='Incendies' alt="imgIncendie" />
        </div>
        <div onClick={() => handleClick("terre")}>
          <img src={imgSeisme} className='Seisme' alt="img_seisme" />
        </div>
      </div>

      <div className='support'>
        <div className='support_text'>
          {selectedRisk === "eau" && (
            <div className="fadeIn">
              <h1 className='Inondation'>Les inondations</h1>
              <h2 className='Inondation'>Lors de fortes pluies, le risque est présent</h2>
              <p className='Inondation'>
                Importance des mesures d’évacuation rapide : Une montée des eaux peut submerger une zone en quelques minutes seulement, surtout lors d’épisodes de crues soudaines. Préparez un kit d’urgence comprenant de l'eau, de la nourriture, une lampe de poche et une radio à piles pour recevoir les alertes en temps réel.
              </p>
              <p className='Inondation'>
                Vigilance sur les crues : En France, <strong>1 logement sur 3</strong> se trouve en zone inondable, ce qui fait de l'inondation le risque naturel le plus fréquent dans le pays. Il est crucial de rester informé et d'écouter les bulletins météorologiques, surtout lors d'alertes orange ou rouge.
              </p>
              <p className='Inondation'>
                Assurez la sécurité des habitations : Si vous habitez en zone inondable, placez vos biens précieux à un étage supérieur et investissez dans des barrières anti-inondation. Cela peut réduire les dégâts en cas de montée des eaux. Un mètre d'eau suffit pour déplacer un véhicule, donc ne laissez pas vos voitures dans les rues lors des fortes pluies.
              </p>
              <p className='Inondation'>
                Aménagements anti-inondation : Des petits gestes comme dégager les gouttières, protéger les ouvertures et installer des clapets anti-retour peuvent prévenir de gros dégâts en évitant les refoulements d’eau.
              </p>
              <p className='Inondation'>
                Savoir où aller : En cas d’évacuation, dirigez-vous vers les hauteurs et éloignez-vous des zones à risques. Une zone de sécurité peut se situer à seulement quelques centaines de mètres mais faire une grande différence.
              </p>
            </div>
          )}
          {selectedRisk === "feu" && (
            <div className="fadeIn">
              <h1 className='Incendies'>Les incendies</h1>
              <h2 className='Incendies'>Il peut y avoir plusieurs causes d'incendies</h2>
              <p className='Incendies'>
                La majorité des incendies sont d'origine humaine, qu'ils soient accidentels (négligence, travaux agricoles, feux de camp) ou volontaires (actes de pyromanie).
                Les incendies sont principalement causés par :
                <ul>
                  <li>La sécheresse et le manque de précipitations en été.</li>
                  <li>Le vent, notamment le Mistral, qui peut attiser les flammes.</li>
                  <li>Les actions humaines (négligences et incendies volontaires).</li>
                </ul>
              </p>
            </div>
          )}
          {selectedRisk === "terre" && (
            <div className="fadeIn">
              <h1 className='Seisme'>Les séismes</h1>
              <h2 className='Seisme'>Les séismes sont des tremblements de terre soudains</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageArticles;
