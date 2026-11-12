import React from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

export default function RestartConfirmation({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="restart-modal-title">
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-icon-wrapper" style={{ background: '#fef2f2', color: '#dc2626' }}>
            <RotateCcw size={28} />
          </div>
          <div>
            <h3 id="restart-modal-title" className="modal-title">Restart Examination?</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              This will erase all your current progress and answers.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px',
            background: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: '#92400e',
          }}
        >
          <AlertTriangle size={20} className="flex-shrink-0" />
          <span>
            Are you sure you want to reset? All answers, bookmarks, and timer progress will be cleared and the quiz will restart from Question 1.
          </span>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onConfirm}
          >
            Yes, Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

