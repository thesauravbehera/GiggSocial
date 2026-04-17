import React, { useState } from 'react';
import { QuizIntro } from '../quiz/QuizIntro';
import { QuizQuestion } from '../quiz/QuizQuestion';
import { QuizResults } from '../quiz/QuizResults';
import { quizQuestions } from '../../data/quizData';

interface QuizPageProps {
  userData: any;
  onComplete: (result: any) => void;
}

type QuizState = 'intro' | 'quiz' | 'results';

export function QuizPage({ userData, onComplete }: QuizPageProps) {
  const [state, setState] = useState<QuizState>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);

  const skill = userData.skills[0];
  const questions = quizQuestions[skill] || quizQuestions.default;

  const handleStart = () => {
    setState('quiz');
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
  };

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setState('results');
      }
    }, 1500);
  };

  const handleRetake = () => {
    handleStart();
  };

  const handleComplete = () => {
    const percentage = (score / questions.length) * 100;
    let badge = 'unverified';
    
    if (percentage >= 90) badge = 'master';
    else if (percentage >= 70) badge = 'expert';
    else if (percentage >= 50) badge = 'verified';
    
    onComplete({
      score: percentage,
      badge,
      answersCorrect: score,
      totalQuestions: questions.length
    });
  };

  return (
    <>
      {state === 'intro' && (
        <QuizIntro skill={skill} onStart={handleStart} />
      )}
      
      {state === 'quiz' && (
        <QuizQuestion
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestion]}
        />
      )}
      
      {state === 'results' && (
        <QuizResults
          score={score}
          totalQuestions={questions.length}
          skill={skill}
          onRetake={handleRetake}
          onComplete={handleComplete}
        />
      )}
    </>
  );
}
