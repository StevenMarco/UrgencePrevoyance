import React, { useState } from "react";
import risk1 from "./assets/risk1.jpg";
import risk2 from "./assets/risk2.jpg";
import risk3 from "./assets/risk3.jpg";
import risk4 from "./assets/risk4.jpg";
import "./Quiz.css"; // Importez le fichier CSS

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      imageUrl: risk1,
      isRisk: true,
    },
    {
      imageUrl: risk2,
      isRisk: false,
    },
    {
      imageUrl: risk3,
      isRisk: true,
    },
    {
      imageUrl: risk4,
      isRisk: false,
    },
  ];

  const handleAnswer = (isRisk) => {
    if (isRisk === questions[currentQuestion].isRisk) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Page</h1>
      {showScore ? (
        <div className="score-section">
          <h2>
            Votre score est {score} sur {questions.length}
          </h2>
        </div>
      ) : (
        <div className="question-section">
          <div className="image-container">
            <img
              src={questions[currentQuestion].imageUrl}
              alt="Quiz"
              className="quiz-image"
            />
          </div>
          <div className="answer-buttons">
            <button
              className="answer-button"
              onClick={() => handleAnswer(false)}
            >
              Ne présente pas de risque
            </button>
            <button
              className="answer-button"
              onClick={() => handleAnswer(true)}
            >
              Présente un risque
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
