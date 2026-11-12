import React from 'react';
import { X, CheckCircle, HelpCircle } from 'lucide-react';
import { UNITS } from '../data/questions';

export default function QuestionPalette({
  questions = [],
  totalQuestions = 100,
  currentIndex,
  answers,
  markedForReview,
  onSelectQuestion,
  isOpenMobile,
  onCloseMobile,
}) {
  const answeredCount = Object.keys(answers).length;

  const getQuestionState = (index) => {
    const q = questions[index];
    if (!q) return 'state-unanswered';

    const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
    const isReview = !!markedForReview[q.id];

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

  const handleUnitClick = (unitId) => {
    // Jump to the first question belonging to this unit in the active attempt
    const targetIdx = questions.findIndex((q) => q.unit === unitId);
    if (targetIdx !== -1) {
      onSelectQuestion(targetIdx);
    }
  };

  const currentQ = questions[currentIndex];
  const currentUnitId = currentQ?.unit || 1;

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
            const isActive = currentUnitId === u.id;
            return (
              <button
                key={u.id}
                type="button"
                className={`unit-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleUnitClick(u.id)}
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
              const isCurrent = i === currentIndex;
              const stateClass = getQuestionState(i);

              return (
                <button
                  key={i}
                  type="button"
                  className={`palette-q-btn ${stateClass} ${isCurrent ? 'state-current' : ''}`}
                  onClick={() => {
                    onSelectQuestion(i);
                    if (isOpenMobile) onCloseMobile();
                  }}
                  title={`Question ${i + 1}`}
                  aria-label={`Question ${i + 1}, ${stateClass.replace('state-', '')}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
