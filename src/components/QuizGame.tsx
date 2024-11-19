import React from 'react';
import { Question } from '../types';

interface QuizGameProps {
  questions: Question[];
  currentQuestion: number;
  score: number;
  onAnswer: (answer: string) => void;
  isComplete: boolean;
  onReset: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({
  questions,
  currentQuestion,
  score,
  onAnswer,
  isComplete,
  onReset,
}) => {
  if (isComplete) {
    return (
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Quiz Complete!</h2>
        <p className="text-xl">Final Score: {score}</p>
        <button
          onClick={onReset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Start New Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-gray-600">Score: {score}</span>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full text-left p-3 rounded-lg border border-gray-300 hover:bg-blue-50 hover:border-blue-500 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;