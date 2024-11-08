import React, { useEffect, useState } from 'react';
import './PageArticles.css';
import imgEau from "../assets/Eau.jpg";
import imgIncendie from "../assets/incendie.jpg";
import imgSeisme from "../assets/seisme.jpg";

function PageArticles() {
  const [backgroundColor, setBackgroundColor] = useState("#FFF");
  const [selectedRisk, setSelectedRisk] = useState(null);  // Nouvel état pour suivre le risque sélectionné

  const handleClick = (type) => {
    setSelectedRisk(type);  // Mettre à jour l'état avec le type de risque sélectionné
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
          <p>
            Connaissez-vous les 3 plus grands risques de catastrophes sur la région PACA ?
          </p>
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
              <h2 className='Incendies'>Les causes des incendies et les conseils de prévention</h2>
              <p className='Incendie'>
                En France, la majorité des feux de forêt sont d'origine humaine, qu'ils soient accidentels (négligence, travaux agricoles, feux de camp) ou volontaires (actes de pyromanie). Les incendies peuvent se déclencher rapidement et se propager sous certaines conditions environnementales :
                <ul>
                  <li><strong>Sécheresse</strong> : Pendant les périodes de canicule et de sécheresse, le sol et la végétation deviennent très inflammables.</li>
                  <li><strong>Vents forts</strong> : Le Mistral et la Tramontane, par exemple, peuvent attiser les flammes et accélérer la propagation du feu.</li>
                  <li><strong>Activités humaines</strong> : Négligence comme les feux de camp non surveillés ou les travaux mécaniques peuvent facilement initier un incendie.</li>
                </ul>
              </p>

              <h2 className='Incendies'>Mesures de prévention contre les incendies</h2>
              <p className='Incendie'>
                <strong>Respecter les interdictions de feu</strong> : En période de sécheresse ou de vents forts, les feux sont souvent interdits. Respecter ces restrictions est crucial pour prévenir les départs de feu.<br /><br />
                
                <strong>Limiter l'usage d'outils mécaniques en plein air</strong> : L’utilisation d’outils produisant des étincelles, comme les tronçonneuses ou les broyeurs, est à éviter durant les périodes à risque élevé.<br /><br />

                <strong>Maintenir une zone défensible autour de son habitation</strong> : Élaguer les arbres, tailler les haies et retirer les feuilles mortes à proximité des habitations pour limiter la propagation des flammes.<br /><br />

                <strong>S’informer régulièrement</strong> : Consultez les alertes météorologiques et les mises en garde incendies émises par les autorités locales et la préfecture, surtout dans les zones à risque.<br /><br />
              </p>

              <h2 className='Incendies'>Statistiques d’incendies en France</h2>
              <p className='Incendie'>
                En France, les incendies de forêt brûlent chaque année environ <strong>10 000 hectares</strong> de forêts, principalement dans le sud-est du pays. En 2022, par exemple, des incendies importants ont touché près de <strong>72 000 hectares</strong>, en raison de conditions climatiques extrêmes (chaleur, sécheresse). Ce type d'incident est en augmentation avec le changement climatique, et il est prévu que les risques augmentent de <strong>30%</strong> dans les prochaines décennies.
              </p>
            </div>
          )}
          {selectedRisk === "terre" && (
            <div className="fadeIn">
              <h1 className='Seisme'>Les séismes</h1>
              <h2 className='Seisme'>Les tremblements de terre en France : risques et prévention</h2>
              <p className='Seisme'>
                En France, les séismes sont moins fréquents que dans certaines autres régions du monde, mais certaines zones, comme les Alpes, les Pyrénées et la Provence, sont sujettes à une activité sismique modérée. Les séismes peuvent causer des dommages importants, notamment aux bâtiments non renforcés, et présenter des risques pour la population.  
              </p>

              <h2 className='Seisme'>Mesures de prévention et de sécurité lors d'un séisme</h2>
              <p className='Seisme'>
                <strong>Préparer son habitation</strong> : Dans les zones sismiques, il est recommandé de renforcer la structure des bâtiments pour réduire les risques d’effondrement. Attacher les meubles lourds aux murs et installer des verrous sur les armoires peut également prévenir les blessures.<br /><br />
                
                <strong>Savoir quoi faire pendant un séisme</strong> : En cas de tremblement de terre, il est conseillé de se mettre à l’abri sous une table solide ou de se tenir contre un mur porteur. Si vous êtes à l'extérieur, éloignez-vous des bâtiments, des arbres et des lignes électriques.<br /><br />

                <strong>Préparer un kit d'urgence</strong> : Gardez un kit d'urgence facilement accessible comprenant de l'eau, des vivres non périssables, une trousse de premiers secours, une lampe de poche et une radio pour recevoir les alertes.<br /><br />
              </p>

              <h2 className='Seisme'>Contexte sismique en France</h2>
              <p className='Seisme'>
                En France métropolitaine, le risque sismique est classé en zones allant de 1 à 5. Les zones 3 à 4 couvrent des régions comme le sud-est (Alpes et Provence) et les Pyrénées, où les séismes peuvent dépasser une magnitude de <strong>5 sur l’échelle de Richter</strong>. 
                Par exemple, en 2019, un séisme de magnitude 5,4 a été enregistré dans la Drôme, causant des dommages matériels et quelques blessés. Il est estimé qu'environ <strong>1 million de personnes</strong> vivent dans des zones à risque modéré à élevé en France.
              </p>

              <h2 className='Seisme'>Informations et alertes</h2>
              <p className='Seisme'>
                Le Réseau National de Surveillance Sismique (RéNaSS) enregistre les activités sismiques et informe la population en cas de risque majeur. Vous pouvez consulter les sites officiels pour obtenir les informations à jour et suivre les conseils de sécurité émis par les autorités.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageArticles;