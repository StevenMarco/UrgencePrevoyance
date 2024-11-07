import React, { useState } from 'react';
import './PageArticles.css'
import imgEau from "../assets/Eau.jpg";
import imgIncendie from "../assets/incendie.jpg";
import imgSeisme from "../assets/seisme.jpg";



function PageArticles() {
    const [backgroundColor, setBackgroundColor] = useState("#FFF"); 
  
    const handleClick = (type) => {
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
            <p>
            Connaissez vous les 3 plus grands risques de
            catastrophes sur la région PACA
            </p>
        </div>

        <div className='choix'>
            <div onClick={() => handleClick("eau")}>
            <img src={imgEau} className='Inondation' alt="imgEau"></img>
            </div>
            <div onClick={() => handleClick("feu")}>
            <img src={imgIncendie} className='Incendies' alt="imgIncendie"></img>
            </div>
            <div onClick={() => handleClick("terre")}>
            <img src={imgSeisme} className='Seisme' alt="img_seisme"></img>
            </div>
        </div>

        <div className='support'>

        <img src='../assets/Eau.jpg' className='Inondation'></img>
        <img src='UrgencePrevoyance/front/src/assets/feux_forêt.png' className='Incendies'></img>
        <img src='UrgencePrevoyance/front/src/assets/seisme.jpg' className='Seisme'></img>

            <div className='support_text'>
                <div>
                    <h1 className='Inondation'>Les inondations</h1>
                    <h2 className='Inondation'>Lors de fortes pluie, le risque est présent</h2>
                    <h1 className='Incendies'>Les incendies</h1>
                    <h2 className='Incendies'>Il peut y avoir plusieurs causes d'incendies</h2>
                    <h1 className='Seisme'>Les séismes</h1>
                    <h2 className='Seisme'>Les séisme</h2>    

                    <p className='Inondation'></p>
                    <p className='Incendie'>
                        La majorité des incendies sont d'origine humaine,
                        qu'ils soient accidentels (négligence, travaux agricoles, feux de camp)
                        ou volontaires (actes de pyromanie)
                        Les incendies sont principalement causés par :
                        <ul>
                            <li>La sécheresse et le manque de précipitations en été.</li>
                            <li>Le vent, notamment le Mistral, qui peut attiser les flammes.</li>
                            <li>Les actions humaines (négligences et incendies volontaires).</li>
                        </ul>
                    </p>
                    <p className='Seisme'></p>

                </div>
            </div>
        </div>
        
    </div>
  );
}

export default PageArticles;
