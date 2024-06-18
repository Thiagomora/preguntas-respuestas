import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/styles/quiz.css"

export function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleFinishQuiz = () => {
    navigate('/result', { state: { score: score, total: questions.length } });
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-container">
          <h1>Fin</h1>
          <button onClick={handleFinishQuiz}>Ver resultados</button>
        </div>
      ) : (
        <div className="question-wrapper">
          <div className="question-container">
            <h1 className="question">{questions[currentQuestion].question}</h1>
          </div>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
