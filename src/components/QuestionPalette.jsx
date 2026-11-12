import React from 'react';
import { X, CheckCircle, HelpCircle } from 'lucide-react';
import { UNITS } from '../data/questions';

export default function QuestionPalette({
  totalQuestions = 100,
  currentIndex,
  answers,
  markedForReview,
  onSelectQuestion,
  isOpenMobile,
  onCloseMobile,
}) {
  const answeredCount = Object.keys(answers).length;

  const getQuestionState = (qId) => {
    const isAnswered = answers[qId] !== undefined && answers[qId] !== null;
    const isReview = !!markedForReview[qId];

    if (isAnswered && isReview) {
      return 'state-review-answered'; // Purple
    }
    if (isReview) {
      return 'state-review'; // Orange
    }
    if (isAnswered) {
      return 'state-answered'; // Green
    }
    return 'state-unanswered'; // Grey
  };

  const handleUnitClick = (startId) => {
    onSelectQuestion(startId - 1);
  };

  const currentUnitId = currentIndex < 25 ? 1 : currentIndex < 50 ? 2 : currentIndex < 75 ? 3 : 4;

  return (
    <>
      {isOpenMobile && (
        <div
          className="palette-backdrop"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside className={`palette-panel ${isOpenMobile ? 'mobile-open' : ''}`}>
        <div className="palette-header">
          <div>
            <h2 className="palette-title">Question Palette</h2>
            <div className="palette-stats-summary">
              {answeredCount} of {totalQuestions} Answered
            </div>
          </div>
          {isOpenMobile && (
            <button
              type="button"
              className="btn btn-secondary"
              style={{ padding: '6px' }}
              onClick={onCloseMobile}
              aria-label="Close Palette"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Quick Unit Jump Tabs */}
        <div className="unit-jump-tabs" title="Jump to Unit">
          {UNITS.map((u) => {
            const startQ = (u.id - 1) * 25 + 1;
            const isActive = currentUnitId === u.id;
            return (
              <button
                key={u.id}
                type="button"
                className={`unit-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleUnitClick(startQ)}
              >
                Unit {u.id}
              </button>
            );
          })}
        </div>

        {/* Status Legend */}
        <div className="palette-legend">
          <div className="legend-item">
            <span className="legend-color-dot legend-dot-current" />
            <span>Current</span>
          </div>
          <div className="legend-item">
            <span className="legend-color-dot legend-dot-answered" />
            <span>Answered</span>
          </div>
          <div className="legend-item">
            <span className="legend-color-dot legend-dot-unanswered" />
            <span>Not Answered</span>
          </div>
          <div className="legend-item">
            <span className="legend-color-dot legend-dot-review" />
            <span>Marked Review</span>
          </div>
          <div className="legend-item" style={{ gridColumn: 'span 2' }}>
            <span className="legend-color-dot legend-dot-review-answered" />
            <span>Answered &amp; Marked Review</span>
          </div>
        </div>

        {/* 1 to 100 Grid */}
        <div className="palette-grid-scrollable">
          <div className="palette-grid">
            {Array.from({ length: totalQuestions }, (_, i) => {
              const qId = i + 1;
              const isCurrent = i === currentIndex;
              const stateClass = getQuestionState(qId);

              return (
                <button
                  key={qId}
                  type="button"
                  className={`palette-q-btn ${stateClass} ${isCurrent ? 'state-current' : ''}`}
                  onClick={() => {
                    onSelectQuestion(i);
                    if (isOpenMobile) onCloseMobile();
                  }}
                  title={`Question ${qId}`}
                  aria-label={`Question ${qId}, ${stateClass.replace('state-', '')}`}
                >
                  {qId}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}

