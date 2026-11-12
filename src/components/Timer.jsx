import React from 'react';
import { Clock } from 'lucide-react';

export default function Timer({ timeLeft, formatTime, totalSeconds = 5400 }) {
  const isWarning = timeLeft <= 600; // Under 10 minutes

  return (
    <div
      className={`timer-container ${isWarning ? 'timer-warning' : ''}`}
      title={isWarning ? 'Less than 10 minutes remaining!' : 'Time Remaining'}
      aria-label={`Time Remaining: ${formatTime(timeLeft)}`}
    >
      <Clock size={16} />
      <span className="timer-label">Time:</span>
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
}

