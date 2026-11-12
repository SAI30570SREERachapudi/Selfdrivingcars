import React from 'react';
import { Car, CheckCircle2, BookOpen, Layers, Zap, Menu, RotateCcw } from 'lucide-react';
import Timer from './Timer';

export default function Header({
  isSubmitted,
  timeLeft,
  formatTime,
  totalQuestions = 100,
  totalUnits = 4,
  onTogglePalette,
  isMobilePaletteOpen,
  onResetClick,
}) {
  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand-section">
          <div className="brand-icon-wrapper" aria-hidden="true">
            <Car size={26} strokeWidth={2.2} />
          </div>
          <div className="brand-text">
            <h1>AUTONOMOUS VEHICLES &amp; SELF-DRIVING CARS</h1>
            <p>Interactive MCQ Practice Test</p>
          </div>
        </div>

        <div className="header-right">
          {!isSubmitted && (
            <>
              <Timer timeLeft={timeLeft} formatTime={formatTime} />
              <button
                type="button"
                className="btn btn-secondary palette-toggle-btn"
                onClick={onTogglePalette}
                aria-label="Toggle Question Palette"
              >
                <Menu size={18} />
                <span>Palette</span>
              </button>
            </>
          )}

          {isSubmitted && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onResetClick}
              title="Restart Quiz"
            >
              <RotateCcw size={16} />
              <span>Restart Quiz</span>
            </button>
          )}
        </div>
      </div>

      <div className="header-info-bar">
        <div className="header-info-inner">
          <div className="meta-tags">
            <div className="meta-pill">
              <BookOpen size={14} className="text-muted" />
              <span className="meta-pill-label">Total Questions:</span>
              <span>{totalQuestions}</span>
            </div>
            <div className="meta-pill">
              <Layers size={14} className="text-muted" />
              <span className="meta-pill-label">Total Units:</span>
              <span>{totalUnits}</span>
            </div>
            <div className="meta-pill">
              <CheckCircle2 size={14} className="text-muted" />
              <span className="meta-pill-label">Question Type:</span>
              <span>Multiple Choice Questions</span>
            </div>
            <div className="meta-pill">
              <Zap size={14} className="text-muted" />
              <span className="meta-pill-label">Quiz Mode:</span>
              <span>Real-Time Practice</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

