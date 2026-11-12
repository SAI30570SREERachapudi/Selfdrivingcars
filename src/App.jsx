import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import QuestionPalette from './components/QuestionPalette';
import QuizControls from './components/QuizControls';
import SubmitConfirmation from './components/SubmitConfirmation';
import RestartConfirmation from './components/RestartConfirmation';
import ResultsDashboard from './components/ResultsDashboard';
import AnswerReview from './components/AnswerReview';
import { useTimer } from './hooks/useTimer';
import { questions } from './data/questions';

const STORAGE_KEY = 'autonomous_vehicles_quiz_state_v2';
const EXAM_TOTAL_SECONDS = 5400; // 90 minutes for 100 questions

export default function App() {
  // Hydrate initial state from localStorage if available
  const [initialData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved state from localStorage:', e);
    }
    return null;
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    return initialData?.currentIndex !== undefined ? initialData.currentIndex : 0;
  });

  const [answers, setAnswers] = useState(() => {
    return initialData?.answers || {};
  });

  const [markedForReview, setMarkedForReview] = useState(() => {
    return initialData?.markedForReview || {};
  });

  const [isSubmitted, setIsSubmitted] = useState(() => {
    return !!initialData?.isSubmitted;
  });

  const [timeTakenSeconds, setTimeTakenSeconds] = useState(() => {
    return initialData?.timeTakenSeconds || 0;
  });

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);

  // Auto-submit when timer expires
  const handleTimeUp = useCallback(() => {
    if (!isSubmitted) {
      setIsSubmitted(true);
      setShowSubmitModal(false);
    }
  }, [isSubmitted]);

  // Exam countdown timer
  const {
    timeLeft,
    elapsedTime,
    formatTime,
    reset: resetTimer,
    pause: pauseTimer,
  } = useTimer({
    totalSeconds: EXAM_TOTAL_SECONDS,
    autoStart: !isSubmitted,
    onTimeUp: handleTimeUp,
    initialTimeLeft: initialData?.savedTimeLeft,
  });

  // Persist state in localStorage
  useEffect(() => {
    try {
      const stateToSave = {
        currentIndex,
        answers,
        markedForReview,
        isSubmitted,
        timeTakenSeconds: isSubmitted ? timeTakenSeconds : elapsedTime,
        savedTimeLeft: timeLeft,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.warn('Failed to save state to localStorage:', e);
    }
  }, [currentIndex, answers, markedForReview, isSubmitted, timeTakenSeconds, elapsedTime, timeLeft]);

  // When submitted, freeze time taken
  useEffect(() => {
    if (isSubmitted) {
      pauseTimer();
      if (!timeTakenSeconds) {
        setTimeTakenSeconds(elapsedTime);
      }
    }
  }, [isSubmitted, elapsedTime, pauseTimer, timeTakenSeconds]);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id];
  const isCurrentMarked = !!markedForReview[currentQuestion.id];

  // Option selection - locked once selected
  const handleSelectOption = useCallback((letter) => {
    if (answers[currentQuestion.id] !== undefined) {
      // User cannot change the option once selected
      return;
    }
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: letter,
    }));
  }, [currentQuestion.id, answers]);

  // Clear Response - disabled once locked
  const handleClearResponse = useCallback(() => {
    // If the answer is already selected, user cannot change or re-roll answer
    // Only if not answered, but nothing to clear
  }, []);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleSaveAndNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  }, [currentIndex]);

  const handleToggleMarkForReview = useCallback(() => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  }, [currentQuestion.id]);

  const handleSelectQuestion = useCallback((index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  }, []);

  // Submit flow
  const handleSubmitConfirm = useCallback(() => {
    setShowSubmitModal(false);
    setTimeTakenSeconds(elapsedTime);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [elapsedTime]);

  // Restart flow
  const handleRestartConfirm = useCallback(() => {
    setShowRestartModal(false);
    setAnswers({});
    setMarkedForReview({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setTimeTakenSeconds(0);
    resetTimer(EXAM_TOTAL_SECONDS);
    localStorage.removeItem(STORAGE_KEY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [resetTimer]);

  const scrollToReview = useCallback(() => {
    const el = document.getElementById('answer-review');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Counts for modal
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const unansweredCount = useMemo(() => questions.length - answeredCount, [answeredCount]);
  const reviewCount = useMemo(() => Object.values(markedForReview).filter(Boolean).length, [markedForReview]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if an input is focused or modal is open
      if (showSubmitModal || showRestartModal || isSubmitted) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleSaveAndNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        handleToggleMarkForReview();
      } else if (['1', 'a', 'A'].includes(e.key)) {
        handleSelectOption('A');
      } else if (['2', 'b', 'B'].includes(e.key)) {
        handleSelectOption('B');
      } else if (['3', 'c', 'C'].includes(e.key)) {
        handleSelectOption('C');
      } else if (['4', 'd', 'D'].includes(e.key)) {
        handleSelectOption('D');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    showSubmitModal,
    showRestartModal,
    isSubmitted,
    handleSaveAndNext,
    handlePrevious,
    handleToggleMarkForReview,
    handleSelectOption,
  ]);

  return (
    <>
      <Header
        isSubmitted={isSubmitted}
        timeLeft={timeLeft}
        formatTime={formatTime}
        totalQuestions={questions.length}
        totalUnits={4}
        onTogglePalette={() => setIsMobilePaletteOpen((prev) => !prev)}
        isMobilePaletteOpen={isMobilePaletteOpen}
        onResetClick={() => setShowRestartModal(true)}
      />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {!isSubmitted ? (
          <div className="quiz-main-container">
            {/* Left Column: Question Area & Controls */}
            <section className="question-workspace" aria-label="Question Workspace">
              <QuestionCard
                question={currentQuestion}
                userAnswer={currentAnswer}
                onSelectOption={handleSelectOption}
                totalQuestions={questions.length}
              />

              <QuizControls
                currentIndex={currentIndex}
                totalQuestions={questions.length}
                hasAnswer={currentAnswer !== undefined}
                isMarkedForReview={isCurrentMarked}
                onPrevious={handlePrevious}
                onSaveAndNext={handleSaveAndNext}
                onToggleMarkForReview={handleToggleMarkForReview}
                onClearResponse={handleClearResponse}
                onSubmitClick={() => setShowSubmitModal(true)}
              />
            </section>

            {/* Right Column: Question Palette */}
            <QuestionPalette
              totalQuestions={questions.length}
              currentIndex={currentIndex}
              answers={answers}
              markedForReview={markedForReview}
              onSelectQuestion={handleSelectQuestion}
              isOpenMobile={isMobilePaletteOpen}
              onCloseMobile={() => setIsMobilePaletteOpen(false)}
            />
          </div>
        ) : (
          <div>
            <ResultsDashboard
              questions={questions}
              answers={answers}
              timeTakenFormatted={formatTime(timeTakenSeconds || elapsedTime)}
              onRestartClick={() => setShowRestartModal(true)}
              onScrollToReview={scrollToReview}
            />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 64px 24px' }}>
              <AnswerReview
                questions={questions}
                answers={answers}
              />
            </div>
          </div>
        )}
      </main>

      {/* Confirmation Modals */}
      <SubmitConfirmation
        isOpen={showSubmitModal}
        totalQuestions={questions.length}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        reviewCount={reviewCount}
        onCancel={() => setShowSubmitModal(false)}
        onConfirm={handleSubmitConfirm}
      />

      <RestartConfirmation
        isOpen={showRestartModal}
        onCancel={() => setShowRestartModal(false)}
        onConfirm={handleRestartConfirm}
      />
    </>
  );
}

