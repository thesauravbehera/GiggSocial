import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Badge } from '../ui/Badge';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
  };
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<string | null>(selectedAnswer || null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (option: string) => {
    if (selected) return;
    
    setSelected(option);
    setShowFeedback(true);
    onAnswer(option);
  };

  const isCorrect = selected === question.correctAnswer;
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Progress */}
        <div className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <Badge variant="outline">
              Question {questionNumber} of {totalQuestions}
            </Badge>
            <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Question */}
        <h2 className="mb-8 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {question.question}
        </h2>

        {/* Options */}
        <div className="mb-8 space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selected === option;
            const isCorrectOption = option === question.correctAnswer;
            const showCorrect = showFeedback && isCorrectOption;
            const showWrong = showFeedback && isSelected && !isCorrect;

            return (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                disabled={!!selected}
                className={`
                  relative w-full transition-all
                  ${!selected ? 'hover:border-primary cursor-pointer' : ''}
                `}
              >
                <Card
                  className={`
                    transition-all
                    ${showCorrect ? 'border-green-600 bg-green-50' : ''}
                    ${showWrong ? 'border-red-600 bg-red-50' : ''}
                    ${isSelected && !showFeedback ? 'border-primary bg-primary/5' : ''}
                    ${selected && !isSelected && !showCorrect ? 'opacity-50' : ''}
                  `}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-current font-semibold">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="flex-1 text-left font-medium">{option}</span>
                    {showCorrect && (
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" />
                    )}
                    {showWrong && (
                      <XCircle className="h-6 w-6 shrink-0 text-red-600" />
                    )}
                  </div>
                </Card>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showFeedback && question.explanation && (
          <Card className={`${
            isCorrect ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'
          }`}>
            <div className="flex gap-4 p-6">
              <div className={`shrink-0 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? (
                  <CheckCircle2 className="h-6 w-6" />
                ) : (
                  <AlertCircle className="h-6 w-6" />
                )}
              </div>
              <div>
                <div className="mb-2 font-semibold">
                  {isCorrect ? 'Correct!' : 'Not quite right'}
                </div>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
