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
import { generateShuffledQuiz } from './utils/quizUtils';

const STORAGE_KEY = 'autonomous_vehicles_quiz_state_v4';
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

  // Maintain the shuffled question set in React state across navigation & reloads
  const [activeQuestions, setActiveQuestions] = useState(() => {
    if (
      initialData?.activeQuestions &&
      Array.isArray(initialData.activeQuestions) &&
      initialData.activeQuestions.length === 100
    ) {
      return initialData.activeQuestions;
    }
    return generateShuffledQuiz(questions);
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

  // Persist state in localStorage so refreshes do NOT reshuffle
  useEffect(() => {
    try {
      const stateToSave = {
        activeQuestions,
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
  }, [activeQuestions, currentIndex, answers, markedForReview, isSubmitted, timeTakenSeconds, elapsedTime, timeLeft]);

  // When submitted, freeze time taken
  useEffect(() => {
    if (isSubmitted) {
      pauseTimer();
      if (!timeTakenSeconds) {
        setTimeTakenSeconds(elapsedTime);
      }
    }
  }, [isSubmitted, elapsedTime, pauseTimer, timeTakenSeconds]);

  const safeIndex =
    typeof currentIndex === 'number' && currentIndex >= 0 && currentIndex < activeQuestions.length
      ? currentIndex
      : 0;

  const currentQuestion = activeQuestions[safeIndex] || activeQuestions[0];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isCurrentMarked = currentQuestion ? !!markedForReview[currentQuestion.id] : false;

  // Option selection - locked once selected
  const handleSelectOption = useCallback((letter) => {
    if (!currentQuestion) return;
    if (answers[currentQuestion.id] !== undefined) {
      // User cannot change the option once selected
      return;
    }
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: letter,
    }));
  }, [currentQuestion, answers]);

  // Clear Response - disabled once locked
  const handleClearResponse = useCallback(() => {}, []);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleSaveAndNext = useCallback(() => {
    if (safeIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  }, [safeIndex, activeQuestions.length]);

  const handleToggleMarkForReview = useCallback(() => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  }, [currentQuestion]);

  const handleSelectQuestion = useCallback((index) => {
    if (index >= 0 && index < activeQuestions.length) {
      setCurrentIndex(index);
    }
  }, [activeQuestions.length]);

  // Submit flow
  const handleSubmitConfirm = useCallback(() => {
    setShowSubmitModal(false);
    setTimeTakenSeconds(elapsedTime);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [elapsedTime]);

  // Restart flow - generates brand new random order for questions & options
  const handleRestartConfirm = useCallback(() => {
    setShowRestartModal(false);
    const freshShuffled = generateShuffledQuiz(questions);
    setActiveQuestions(freshShuffled);
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
  const unansweredCount = useMemo(() => activeQuestions.length - answeredCount, [activeQuestions.length, answeredCount]);
  const reviewCount = useMemo(() => Object.values(markedForReview).filter(Boolean).length, [markedForReview]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
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
        totalQuestions={activeQuestions.length}
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
                questionNumber={safeIndex + 1}
                userAnswer={currentAnswer}
                onSelectOption={handleSelectOption}
                totalQuestions={activeQuestions.length}
              />

              <QuizControls
                currentIndex={safeIndex}
                totalQuestions={activeQuestions.length}
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
              questions={activeQuestions}
              totalQuestions={activeQuestions.length}
              currentIndex={safeIndex}
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
              questions={activeQuestions}
              answers={answers}
              timeTakenFormatted={formatTime(timeTakenSeconds || elapsedTime)}
              onRestartClick={() => setShowRestartModal(true)}
              onScrollToReview={scrollToReview}
            />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 64px 24px' }}>
              <AnswerReview
                questions={activeQuestions}
                answers={answers}
              />
            </div>
          </div>
        )}
      </main>

      {/* Confirmation Modals */}
      <SubmitConfirmation
        isOpen={showSubmitModal}
        totalQuestions={activeQuestions.length}
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
