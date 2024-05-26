import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../componentes/QuestionFutbol';
import "../styles/quiz.css"

export function QuizFutbol () {
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
    <div>
      {showScore ? (
        <div>
          <h1>Fin</h1>
          <button onClick={handleFinishQuiz}>ver resultados</button>
        </div>
      ) : (
        <>
          <div className='container'>
            <div className='question-container'>
                <h1>{questions[currentQuestion].question}</h1>
            </div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
