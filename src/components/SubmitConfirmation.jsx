import React from 'react';
import { HelpCircle, CheckCircle, AlertTriangle, X } from 'lucide-react';

export default function SubmitConfirmation({
  isOpen,
  totalQuestions = 100,
  answeredCount,
  unansweredCount,
  reviewCount,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-icon-wrapper">
            <HelpCircle size={28} />
          </div>
          <div>
            <h3 id="modal-title" className="modal-title">Submit Examination</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Are you sure you want to finish and submit your quiz?
            </p>
          </div>
        </div>

        <div className="modal-stats-grid">
          <div className="modal-stat-box">
            <div className="modal-stat-value" style={{ color: '#059669' }}>
              {answeredCount}
            </div>
            <div className="modal-stat-label">Answered</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-value" style={{ color: '#d97706' }}>
              {unansweredCount}
            </div>
            <div className="modal-stat-label">Unanswered</div>
          </div>
          <div className="modal-stat-box">
            <div className="modal-stat-value" style={{ color: '#7c3aed' }}>
              {reviewCount}
            </div>
            <div className="modal-stat-label">For Review</div>
          </div>
        </div>

        {unansweredCount > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 14px',
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#92400e',
            }}
          >
            <AlertTriangle size={18} className="flex-shrink-0" />
            <span>
              You still have <strong>{unansweredCount} unanswered questions</strong>. Once submitted, you cannot change your answers.
            </span>
          </div>
        )}

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Return to Quiz
          </button>
          <button
            type="button"
            className="btn btn-submit"
            onClick={onConfirm}
          >
            Yes, Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

