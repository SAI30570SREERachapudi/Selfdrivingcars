import React from 'react';
import { ChevronLeft, ChevronRight, Bookmark, XCircle, Send } from 'lucide-react';

export default function QuizControls({
  currentIndex,
  totalQuestions,
  hasAnswer,
  isMarkedForReview,
  onPrevious,
  onSaveAndNext,
  onToggleMarkForReview,
  onClearResponse,
  onSubmitClick,
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="quiz-controls-card">
      <div className="controls-left">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPrevious}
          disabled={isFirst}
          title="Previous Question"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        <button
          type="button"
          className={`btn btn-warning ${isMarkedForReview ? 'active' : ''}`}
          onClick={onToggleMarkForReview}
          title="Mark current question for later review"
        >
          <Bookmark size={16} fill={isMarkedForReview ? 'currentColor' : 'none'} />
          <span>{isMarkedForReview ? 'Marked for Review' : 'Mark for Review'}</span>
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClearResponse}
          disabled={!hasAnswer}
          title={hasAnswer ? "Clear response" : "No response selected"}
        >
          <XCircle size={16} />
          <span>Clear Response</span>
        </button>
      </div>

      <div className="controls-right">
        {!isLast ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={onSaveAndNext}
            title="Next Question"
          >
            <span>Save &amp; Next</span>
            <ChevronRight size={18} />
          </button>
        ) : null}

        <button
          type="button"
          className="btn btn-submit"
          onClick={onSubmitClick}
          title="Submit Quiz and view results"
        >
          <Send size={16} />
          <span>Submit Quiz</span>
        </button>
      </div>
    </div>
  );
}

