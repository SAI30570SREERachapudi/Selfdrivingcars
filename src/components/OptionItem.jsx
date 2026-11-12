import React from 'react';
import { Check, X } from 'lucide-react';

export default function OptionItem({
  letter,
  text,
  userAnswer,
  correctAnswer,
  isAnswered,
  onSelect,
}) {
  const isSelected = userAnswer === letter;
  const isCorrect = letter === correctAnswer;
  const isUserIncorrect = isSelected && !isCorrect;
  const isRevealedCorrect = isAnswered && isCorrect && !isSelected;

  let stateClass = '';
  if (isAnswered) {
    if (isSelected) {
      stateClass = isCorrect ? 'state-selected-correct' : 'state-selected-incorrect';
    } else if (isRevealedCorrect) {
      stateClass = 'state-revealed-correct';
    }
  }

  const handleClick = () => {
    if (isAnswered) return; // Locked once answered
    onSelect(letter);
  };

  return (
    <button
      type="button"
      className={`option-item ${stateClass} ${isAnswered ? 'locked' : ''}`}
      onClick={handleClick}
      disabled={isAnswered}
      aria-label={`Option ${letter}: ${text}`}
    >
      <div className="option-letter" aria-hidden="true">
        {isAnswered && isSelected ? (
          isCorrect ? <Check size={18} strokeWidth={3} /> : <X size={18} strokeWidth={3} />
        ) : isAnswered && isRevealedCorrect ? (
          <Check size={18} strokeWidth={3} />
        ) : (
          letter
        )}
      </div>

      <div className="option-text">{text}</div>

      {isAnswered && (
        <>
          {isSelected && isCorrect && (
            <span className="option-feedback-badge badge-badge-correct">
              <Check size={14} /> Correct
            </span>
          )}
          {isSelected && !isCorrect && (
            <span className="option-feedback-badge badge-badge-incorrect">
              <X size={14} /> Your Choice
            </span>
          )}
          {isRevealedCorrect && (
            <span className="option-feedback-badge badge-badge-correct">
              Correct Answer
            </span>
          )}
        </>
      )}
    </button>
  );
}

