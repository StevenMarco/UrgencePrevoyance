import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageAccueil.css';
import logo from "../assets/test2.png";

function	PageAccueil(){
	const	navigate = useNavigate();
	const	handleClick = () => {navigate('/Quiz')}
	return (
		<div className="Page_Accueil">
			<div className="Titre">
				<h1>UrgencePrevoyance</h1>
				<img src={logo} alt="logo" width="300" height="200"></img>
			</div>
			<div className="Sous-titre">
				<h3>PREVOIR DEMAIN</h3>
				<p>Informez-vous sur les risques qui vous concerne et sachez reagir.</p>
			</div>
			<div className="Corps">
				<div className="tremblements">
					<p>1500</p>
					<p>En 2019, 1 500 personnes ont subi un tremblement de terre.</p>
				</div>
				<div className='inondable'>
					<p>18,5M</p>
					<p>En 2019, environ 18,5 millions de personnes on subi un inondable.</p>
				</div>
				<div className='mouvement_de_terrain'>
					<p>63000</p>
					<p>63 000 mouvements de terrain recensés entre 1900 et 2020</p>
				</div>
			</div>
			<div className='Bas-Page'>
				<p>connaître les risques, informer, éduquer, surveiller, prévoir, réduire la vulnérabilité, protéger, se préparer à la crise, exploiter le retour d’expérience et responsabiliser.</p>
		 		  <button onClick={handleClick}>Quizz!</button>
			</div>
		</div>
		);
}

export default PageAccueil;