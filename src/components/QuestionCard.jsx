import React from 'react';
import OptionItem from './OptionItem';
import { CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

export default function QuestionCard({
  question,
  questionNumber,
  userAnswer,
  onSelectOption,
  totalQuestions = 100,
}) {
  if (!question) return null;

  const displayNum = questionNumber !== undefined ? questionNumber : question.id;
  const isAnswered = userAnswer !== undefined && userAnswer !== null;
  const isCorrect = isAnswered && userAnswer === question.correctAnswer;
  const optionsKeys = ['A', 'B', 'C', 'D'];

  return (
    <div className="question-card fade-in">
      <div className="question-card-header">
        <div className="question-unit-info">
          <span className="unit-indicator">Unit {question.unit}</span>
          <span className="unit-title-text">{question.unitName}</span>
          {question.originalId && question.originalId !== displayNum && (
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>
              (Ref #{question.originalId})
            </span>
          )}
        </div>
        <div className="question-number-badge">
          Question {displayNum} of {totalQuestions}
        </div>
      </div>

      <div className="question-body">
        {displayNum}. {question.question}
      </div>

      <div className="options-list">
        {optionsKeys.map((letter) => (
          <OptionItem
            key={letter}
            letter={letter}
            text={question.options[letter]}
            userAnswer={userAnswer}
            correctAnswer={question.correctAnswer}
            isAnswered={isAnswered}
            onSelect={onSelectOption}
          />
        ))}
      </div>

      {/* Immediate Inline Feedback (No Modal Popups) */}
      {isAnswered ? (
        <div
          className={`inline-feedback-banner ${
            isCorrect ? 'feedback-correct' : 'feedback-incorrect'
          }`}
        >
          {isCorrect ? (
            <CheckCircle2 size={20} className="flex-shrink-0" />
          ) : (
            <AlertCircle size={20} className="flex-shrink-0" />
          )}
          <div>
            <div className="feedback-banner-title">
              {isCorrect ? 'Correct Answer!' : 'Incorrect Choice'}
            </div>
            <div>
              {isCorrect ? (
                <span>Well done! Option ({question.correctAnswer}) is correct.</span>
              ) : (
                <span>
                  The correct answer is <strong>({question.correctAnswer}) {question.options[question.correctAnswer]}</strong>.
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="inline-feedback-banner" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}>
          <HelpCircle size={18} className="flex-shrink-0" />
          <span>Click on an option to record your answer. In practice mode, your response is locked upon selection.</span>
        </div>
      )}
    </div>
  );
}
