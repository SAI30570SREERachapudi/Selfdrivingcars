import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Filter,
  Check,
  X,
  ArrowUp,
  Layers
} from 'lucide-react';
import { UNITS } from '../data/questions';

export default function AnswerReview({ questions, answers }) {
  const [filterType, setFilterType] = useState('ALL'); // ALL, CORRECT, INCORRECT, UNANSWERED
  const [selectedUnit, setSelectedUnit] = useState(0); // 0 = all units, 1..4

  const optionsKeys = ['A', 'B', 'C', 'D'];

  const getQuestionStatus = (q) => {
    const userAns = answers[q.id];
    if (userAns === undefined || userAns === null) return 'UNANSWERED';
    if (userAns === q.correctAnswer) return 'CORRECT';
    return 'INCORRECT';
  };

  const counts = {
    ALL: questions.length,
    CORRECT: questions.filter((q) => getQuestionStatus(q) === 'CORRECT').length,
    INCORRECT: questions.filter((q) => getQuestionStatus(q) === 'INCORRECT').length,
    UNANSWERED: questions.filter((q) => getQuestionStatus(q) === 'UNANSWERED').length,
  };

  const filteredQuestions = questions.filter((q) => {
    const status = getQuestionStatus(q);
    const matchesStatus = filterType === 'ALL' || status === filterType;
    const matchesUnit = selectedUnit === 0 || q.unit === selectedUnit;
    return matchesStatus && matchesUnit;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="answer-review" className="review-section">
      <div className="section-header">
        <h3 className="section-title">
          <CheckCircle2 size={22} color="#10b981" />
          <span>Detailed Answer Review &amp; Explanations</span>
        </h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="badge badge-neutral">Showing {filteredQuestions.length} of {questions.length} questions</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="review-filter-tabs">
          <button
            type="button"
            className={`review-filter-btn ${filterType === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilterType('ALL')}
          >
            All Questions ({counts.ALL})
          </button>
          <button
            type="button"
            className={`review-filter-btn ${filterType === 'CORRECT' ? 'active' : ''}`}
            onClick={() => setFilterType('CORRECT')}
            style={{ color: filterType === 'CORRECT' ? '#065f46' : undefined }}
          >
            ✓ Correct ({counts.CORRECT})
          </button>
          <button
            type="button"
            className={`review-filter-btn ${filterType === 'INCORRECT' ? 'active' : ''}`}
            onClick={() => setFilterType('INCORRECT')}
            style={{ color: filterType === 'INCORRECT' ? '#991b1b' : undefined }}
          >
            ✗ Incorrect ({counts.INCORRECT})
          </button>
          <button
            type="button"
            className={`review-filter-btn ${filterType === 'UNANSWERED' ? 'active' : ''}`}
            onClick={() => setFilterType('UNANSWERED')}
            style={{ color: filterType === 'UNANSWERED' ? '#92400e' : undefined }}
          >
            ⚪ Unanswered ({counts.UNANSWERED})
          </button>
        </div>

        {/* Unit Filter Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Layers size={14} /> Filter by Unit:
          </span>
          <button
            type="button"
            className={`unit-tab-btn ${selectedUnit === 0 ? 'active' : ''}`}
            style={{ padding: '4px 10px' }}
            onClick={() => setSelectedUnit(0)}
          >
            All Units
          </button>
          {UNITS.map((u) => (
            <button
              key={u.id}
              type="button"
              className={`unit-tab-btn ${selectedUnit === u.id ? 'active' : ''}`}
              style={{ padding: '4px 10px' }}
              onClick={() => setSelectedUnit(u.id)}
            >
              Unit {u.id}
            </button>
          ))}
        </div>
      </div>

      {/* Review Questions List */}
      <div className="review-questions-list">
        {filteredQuestions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px', color: '#64748b', background: '#f8fafc', borderRadius: '12px' }}>
            No questions found matching the selected filter.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const status = getQuestionStatus(q);
            const userAns = answers[q.id];
            const isCorrect = status === 'CORRECT';
            const isUnanswered = status === 'UNANSWERED';

            let cardStatusClass = 'status-card-incorrect';
            if (isCorrect) cardStatusClass = 'status-card-correct';
            if (isUnanswered) cardStatusClass = 'status-card-unanswered';

            return (
              <div
                key={q.id}
                className={`review-question-card ${cardStatusClass}`}
                id={`review-q-${q.id}`}
              >
                <div className="review-card-header">
                  <div className="review-card-meta">
                    <span className="unit-indicator">Unit {q.unit}</span>
                    <span className="question-number-badge">Question {q.id}</span>
                  </div>

                  <div>
                    {isCorrect && (
                      <span className="badge badge-success">
                        <Check size={14} /> Correct (+1 Mark)
                      </span>
                    )}
                    {status === 'INCORRECT' && (
                      <span className="badge badge-danger">
                        <X size={14} /> Incorrect (0 Marks)
                      </span>
                    )}
                    {isUnanswered && (
                      <span className="badge badge-neutral">
                        <HelpCircle size={14} /> Not Attempted (0 Marks)
                      </span>
                    )}
                  </div>
                </div>

                <div className="question-body">
                  {q.id}. {q.question}
                </div>

                <div className="review-options-grid">
                  {optionsKeys.map((letter) => {
                    const isOptionCorrect = letter === q.correctAnswer;
                    const isUserChoice = letter === userAns;

                    let optionClass = '';
                    if (isOptionCorrect) {
                      optionClass = 'option-is-correct';
                    } else if (isUserChoice && !isOptionCorrect) {
                      optionClass = 'option-is-user-incorrect';
                    }

                    return (
                      <div key={letter} className={`review-option ${optionClass}`}>
                        <div
                          className="option-letter"
                          style={{
                            background: isOptionCorrect
                              ? '#10b981'
                              : isUserChoice
                              ? '#ef4444'
                              : '#f1f5f9',
                            color: isOptionCorrect || isUserChoice ? '#ffffff' : '#475569',
                            borderColor: isOptionCorrect
                              ? '#059669'
                              : isUserChoice
                              ? '#dc2626'
                              : '#cbd5e1',
                          }}
                        >
                          {isOptionCorrect ? (
                            <Check size={16} strokeWidth={3} />
                          ) : isUserChoice ? (
                            <X size={16} strokeWidth={3} />
                          ) : (
                            letter
                          )}
                        </div>

                        <div className="option-text">{q.options[letter]}</div>

                        {isOptionCorrect && (
                          <span
                            className="badge badge-success"
                            style={{ marginLeft: 'auto', flexShrink: 0 }}
                          >
                            Correct Answer
                          </span>
                        )}

                        {isUserChoice && !isOptionCorrect && (
                          <span
                            className="badge badge-danger"
                            style={{ marginLeft: 'auto', flexShrink: 0 }}
                          >
                            Your Selection
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="review-summary-chips">
                  <div className="chip-user-ans">
                    <span style={{ color: '#64748b' }}>Your Choice:</span>
                    {userAns ? (
                      <span
                        style={{
                          color: isCorrect ? '#059669' : '#dc2626',
                          fontWeight: 700,
                        }}
                      >
                        Option {userAns} ({q.options[userAns]})
                      </span>
                    ) : (
                      <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                        None (Unanswered)
                      </span>
                    )}
                  </div>

                  <div className="chip-user-ans" style={{ marginLeft: 'auto' }}>
                    <span style={{ color: '#64748b' }}>Correct Answer:</span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>
                      Option {q.correctAnswer} ({q.options[q.correctAnswer]})
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          type="button"
          className="btn btn-secondary btn-print-hide"
          onClick={scrollToTop}
        >
          <ArrowUp size={16} />
          <span>Back to Top</span>
        </button>
      </div>
    </section>
  );
}

