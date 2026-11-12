import React from 'react';
import ScoreGauge from './ScoreGauge';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Target,
  Award,
  RotateCcw,
  Printer,
  ChevronDown,
  Layers,
  FileText
} from 'lucide-react';
import { UNITS } from '../data/questions';

export default function ResultsDashboard({
  questions,
  answers,
  timeTakenFormatted,
  onRestartClick,
  onScrollToReview,
}) {
  const totalQuestions = questions.length;

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  // Unit-wise metrics
  const unitStats = {
    1: { total: 0, correct: 0, incorrect: 0, unanswered: 0 },
    2: { total: 0, correct: 0, incorrect: 0, unanswered: 0 },
    3: { total: 0, correct: 0, incorrect: 0, unanswered: 0 },
    4: { total: 0, correct: 0, incorrect: 0, unanswered: 0 },
  };

  questions.forEach((q) => {
    const userAns = answers[q.id];
    const uId = q.unit;
    unitStats[uId].total += 1;

    if (userAns === undefined || userAns === null) {
      unansweredCount += 1;
      unitStats[uId].unanswered += 1;
    } else if (userAns === q.correctAnswer) {
      correctCount += 1;
      unitStats[uId].correct += 1;
    } else {
      incorrectCount += 1;
      unitStats[uId].incorrect += 1;
    }
  });

  const totalMarks = correctCount;
  const percentage = Math.round((totalMarks / totalQuestions) * 100);
  const attemptedCount = correctCount + incorrectCount;
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  // Performance feedback based on score
  let feedback = {
    title: 'Outstanding Performance!',
    message: 'Exceptional mastery across vehicle dynamics, state estimation, perception architectures, and motion planning algorithms.',
    bannerClass: 'banner-excellent',
  };

  if (percentage >= 85) {
    feedback = {
      title: 'Outstanding Performance!',
      message: 'Exceptional mastery across vehicle dynamics, state estimation, computer vision, and trajectory planning.',
      bannerClass: 'banner-excellent',
    };
  } else if (percentage >= 70) {
    feedback = {
      title: 'Very Good Performance!',
      message: 'Strong grasp of core autonomous driving principles. Review flagged questions in visual perception and localization to achieve full mastery.',
      bannerClass: 'banner-good',
    };
  } else if (percentage >= 50) {
    feedback = {
      title: 'Good Effort – Qualifying Score',
      message: 'You have cleared the examination benchmark. Continue refining Kalman filtering, sensor fusion, and behavior planning.',
      bannerClass: 'banner-average',
    };
  } else {
    feedback = {
      title: 'Needs Further Preparation',
      message: 'Take time to review the 4 fundamental units, especially sensor configurations, coordinate transforms, and kinematic vehicle models.',
      bannerClass: 'banner-needs-work',
    };
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="results-wrapper fade-in">
      {/* Hero Overview */}
      <div className="results-hero-card">
        <ScoreGauge score={totalMarks} total={totalQuestions} />

        <div className="results-hero-details">
          <div className="results-title-group">
            <span className="badge badge-primary">Official Examination Report</span>
            <h2>Autonomous Vehicles &amp; Self-Driving Cars</h2>
            <p>100 Multiple-Choice Questions Comprehensive Assessment</p>
          </div>

          <div className={`performance-banner ${feedback.bannerClass}`}>
            <Award size={22} className="flex-shrink-0" />
            <div>
              <strong>{feedback.title}</strong> — {feedback.message}
            </div>
          </div>

          <div className="results-actions-bar">
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          

              <button
                type="button"
                className="btn btn-secondary btn-print-hide"
                onClick={onScrollToReview}
                title="Jump to Detailed Answer Review"
              >
                <FileText size={16} />
                <span>Review All Questions</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <button
              type="button"
              className="btn btn-danger btn-print-hide"
              onClick={onRestartClick}
              title="Restart the Quiz from Question 1"
            >
              <RotateCcw size={16} />
              <span>Restart Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric-card card-correct">
          <div className="metric-card-header">
            <span className="metric-card-title">Correct Answers</span>
            <CheckCircle2 size={18} color="#059669" />
          </div>
          <div className="metric-card-value">{correctCount}</div>
          <div className="metric-card-sub">+{correctCount} Marks earned</div>
        </div>

        <div className="metric-card card-incorrect">
          <div className="metric-card-header">
            <span className="metric-card-title">Incorrect Answers</span>
            <XCircle size={18} color="#dc2626" />
          </div>
          <div className="metric-card-value">{incorrectCount}</div>
          <div className="metric-card-sub">0 Negative penalty</div>
        </div>

        <div className="metric-card card-unanswered">
          <div className="metric-card-header">
            <span className="metric-card-title">Unanswered</span>
            <HelpCircle size={18} color="#d97706" />
          </div>
          <div className="metric-card-value">{unansweredCount}</div>
          <div className="metric-card-sub">Skipped questions</div>
        </div>

        <div className="metric-card card-accuracy">
          <div className="metric-card-header">
            <span className="metric-card-title">Time &amp; Accuracy</span>
            <Target size={18} color="#2563eb" />
          </div>
          <div className="metric-card-value">{accuracy}%</div>
          <div className="metric-card-sub" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} />
            <span>Time Taken: {timeTakenFormatted}</span>
          </div>
        </div>
      </div>

      {/* Unit-wise Breakdown */}
      <div className="unit-breakdown-section">
        <div className="section-header">
          <h3 className="section-title">
            <Layers size={20} color="#1e3a8a" />
            <span>Unit-Wise Performance Analysis</span>
          </h3>
          <span className="badge badge-neutral">4 Units • 25 Questions Each</span>
        </div>

        <div className="unit-cards-grid">
          {UNITS.map((u) => {
            const stats = unitStats[u.id];
            const unitPercent = Math.round((stats.correct / stats.total) * 100);

            return (
              <div key={u.id} className="unit-card">
                <div className="unit-card-top">
                  <div>
                    <h4 className="unit-card-name">{u.name}</h4>
                    <span style={{ fontSize: '0.775rem', color: '#64748b' }}>
                      Questions {u.range}
                    </span>
                  </div>
                  <span className="unit-card-badge">{unitPercent}% Score</span>
                </div>

                <div className="unit-progress-bar-bg">
                  <div
                    className="unit-progress-bar-fill"
                    style={{ width: `${unitPercent}%` }}
                  />
                </div>

                <div className="unit-stat-pills">
                  <div className="unit-pill">
                    <div className="unit-pill-val" style={{ color: '#059669' }}>
                      {stats.correct}
                    </div>
                    <div className="unit-pill-lbl">Correct</div>
                  </div>
                  <div className="unit-pill">
                    <div className="unit-pill-val" style={{ color: '#dc2626' }}>
                      {stats.incorrect}
                    </div>
                    <div className="unit-pill-lbl">Incorrect</div>
                  </div>
                  <div className="unit-pill">
                    <div className="unit-pill-val" style={{ color: '#d97706' }}>
                      {stats.unanswered}
                    </div>
                    <div className="unit-pill-lbl">Unanswered</div>
                  </div>
                  <div className="unit-pill">
                    <div className="unit-pill-val" style={{ color: '#2563eb' }}>
                      {stats.correct}/{stats.total}
                    </div>
                    <div className="unit-pill-lbl">Marks</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

