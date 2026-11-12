import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to manage exam countdown timer and elapsed time tracking.
 * @param {number} totalSeconds Total duration in seconds (default 5400s = 90 mins for 100 questions)
 * @param {boolean} autoStart Whether timer should start immediately
 * @param {function} onTimeUp Callback invoked when timer hits zero
 * @param {number} initialTimeLeft Optional saved time left from storage
 */
export function useTimer({
  totalSeconds = 5400,
  autoStart = true,
  onTimeUp,
  initialTimeLeft = null,
}) {
  const [timeLeft, setTimeLeft] = useState(() => {
    if (initialTimeLeft !== null && initialTimeLeft !== undefined && initialTimeLeft > 0) {
      return initialTimeLeft;
    }
    return totalSeconds;
  });

  const [isRunning, setIsRunning] = useState(autoStart);
  const onTimeUpRef = useRef(onTimeUp);

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      if (onTimeUpRef.current) {
        onTimeUpRef.current();
      }
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (onTimeUpRef.current) {
            onTimeUpRef.current();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const elapsedTime = totalSeconds - timeLeft;

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(
    (newTotal = totalSeconds) => {
      setTimeLeft(newTotal);
      setIsRunning(true);
    },
    [totalSeconds]
  );

  const formatTime = useCallback((seconds) => {
    const s = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const secs = s % 60;

    const pad = (n) => String(n).padStart(2, '0');

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    }
    return `${pad(minutes)}:${pad(secs)}`;
  }, []);

  return {
    timeLeft,
    elapsedTime,
    isRunning,
    start,
    pause,
    reset,
    formatTime,
    totalSeconds,
  };
}

