import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '../ui/button';

interface QuizPageProps {
  onComplete: () => void;
}

export function QuizPage({ onComplete }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: 'What is React?',
      options: ['A JavaScript library', 'A CSS framework', 'A database', 'A backend language'],
      correct: 0,
    },
    {
      question: 'What is JSX?',
      options: ['A syntax extension', 'A database query', 'A CSS preprocessor', 'A build tool'],
      correct: 0,
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete
      setTimeout(onComplete, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Question {currentQuestion + 1} of {questions.length}</h2>
              <button onClick={onComplete} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-xl mb-6">{questions[currentQuestion].question}</h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}