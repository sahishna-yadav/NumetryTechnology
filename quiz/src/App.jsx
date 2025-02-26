import React, { useState } from 'react';


const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of India?',
    answerOptions: [
      { answerText: 'Dhaka', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Delhi', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the capital of Afghanistan?',
    answerOptions: [
      { answerText: 'Delhi', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Kabul', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Pakistan?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'Islamabad', isCorrect: true },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
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

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
        <div className="p-2 border text-center font-bold mb-4 text-xl">Quiz App</div>

        {showScore ? (
          <div className="text-center text-lg font-bold">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="mb-4 text-lg">{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                className="block w-full p-2 mt-2 rounded border hover:bg-gray-200"
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
            <p className="text-center text-gray-400 text-sm mt-4">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
