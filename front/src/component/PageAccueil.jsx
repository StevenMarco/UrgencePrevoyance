import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importation de framer-motion
import './PageAccueil.css';
import logo from '../assets/Logo_UrgencePrevoyance2-removebg.png';
import Counter from './counter';

function PageAccueil() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Quiz');
  };

  // Paramètres pour l'animation de fondu en bas vers le haut
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Position de départ (bas)
    visible: { opacity: 1, y: 0 }, // Position finale (haut)
  };

  return (
    <div className="Page_Accueil">
      <div className="Titre">
        <h1>UrgencePrevoyance</h1>
        <img src={logo} alt="logo" width="300" height="200" />
      </div>
      <div className="Sous-titre">
        <h3>PREVOIR DEMAIN</h3>
        <p>Informez-vous sur les risques qui vous concernent et sachez reagir.</p>
      </div>
      <div className="Corps">
        {/* Animation lente pour chaque carte */}
        <motion.div
          className="tremblements"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1.5, delay: 0.2 }} // Durée et délai ajustés
        >
          <Counter endValue={1500} />
          <p>Le nombre de tremblements de terre en France est de 1500 en moyenne chaque année avec le sud-est comme région la plus touchée. Cela représente 5 tremblements de terre par jour en France.</p>
        </motion.div>

        <motion.div
          className="inondable"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1.5, delay: 0.4 }} // Durée et délai ajustés
        >
          <Counter endValue={18500000} />
          <p>En 2019, environ 18,5 millions de personnes (soit 27,4 % de la population française) résident dans une zone potentiellement inondable (débordement de cours d’eau et/ou submersion marine).</p>
        </motion.div>

        <motion.div
          className="mouvement_de_terrain"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1.5, delay: 0.6 }} // Durée et délai ajustés
        >
          <Counter endValue={63000} />
          <p>63 000 mouvements de terrain recensés entre 1900 et 2020 (BRGM/BDMVT).</p>
        </motion.div>
      </div>
      <div className="Bas-Page">
        <p>Testez vos connaissances et celles de votre famille !</p>
        <button onClick={handleClick}>Quizz!</button>
      </div>
    </div>
  );
}

export default PageAccueil;