import React from 'react';

export default function ScoreGauge({ score, total = 100 }) {
  const percentage = Math.round((score / total) * 100);
  const radius = 80;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percentage) / 100;

  let strokeColor = '#10b981';
  let badgeText = 'Outstanding';
  let badgeBg = '#ecfdf5';
  let badgeColor = '#065f46';

  if (percentage >= 85) {
    strokeColor = '#10b981';
    badgeText = 'Distinction';
    badgeBg = '#ecfdf5';
    badgeColor = '#065f46';
  } else if (percentage >= 70) {
    strokeColor = '#2563eb';
    badgeText = 'First Class';
    badgeBg = '#eff6ff';
    badgeColor = '#1e40af';
  } else if (percentage >= 50) {
    strokeColor = '#f59e0b';
    badgeText = 'Passed';
    badgeBg = '#fffbeb';
    badgeColor = '#92400e';
  } else {
    strokeColor = '#ef4444';
    badgeText = 'Needs Improvement';
    badgeBg = '#fef2f2';
    badgeColor = '#991b1b';
  }

  return (
    <div className="score-gauge-container">
      <div className="circular-gauge">
        <svg viewBox="0 0 190 190">
          <circle
            className="gauge-bg-circle"
            cx="95"
            cy="95"
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className="gauge-progress-circle"
            cx="95"
            cy="95"
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke={strokeColor}
          />
        </svg>

        <div className="gauge-center-content">
          <div className="gauge-score-value">{score}</div>
          <div className="gauge-score-total">out of {total}</div>
        </div>
      </div>

      <div
        className="gauge-badge"
        style={{ background: badgeBg, color: badgeColor }}
      >
        {badgeText} ({percentage}%)
      </div>
    </div>
  );
}

