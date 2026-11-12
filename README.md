# Autonomous Vehicles & Self-Driving Cars – Professional MCQ Quiz Application

A modern, high-performance, professional online examination platform built with **React + Vite** for testing knowledge across Autonomous Vehicles and Self-Driving Cars.

Contains all **100 Multiple-Choice Questions** across 4 core units:
- **Unit 1: Introduction to Self-Driving Cars** (Questions 1–25)
- **Unit 2: State Estimation and Localization for Self-Driving Cars** (Questions 26–50)
- **Unit 3: Visual Perception for Self-Driving Cars** (Questions 51–75)
- **Unit 4: Motion Planning for Self-Driving Cars** (Questions 76–100)

---

## 🚀 Key Features

1. **Instant Real-Time Practice Examination**:
   - Starts directly at Question 1 with no login, signup, or barrier screens.
   - Shows one question at a time with 4 selectable options ($A, B, C, D$).
   - **Immediate In-line Evaluation**: As soon as an option is chosen, instant visual feedback is displayed without disruptive modal popups.
   - **Answer Locking**: Enforces strict examination practice — once selected, an answer is locked.
   - **Full Navigation**: Previous, Save & Next, Mark for Review, and direct jumping via the question palette.
   - Keyboard shortcuts (`←` / `→` navigation, `1-4` / `A-D` to select options, `M` to bookmark).

2. **Interactive 1–100 Question Palette**:
   - **Green**: Answered
   - **Grey**: Not Answered
   - **Blue Outline**: Current Question
   - **Orange**: Marked for Review
   - **Purple**: Answered & Marked for Review
   - Quick Unit Jump Tabs (Unit 1, 2, 3, 4).
   - Collapsible drawer for tablet and mobile devices.

3. **Real-Time Exam Countdown Timer**:
   - 90-minute countdown with warning indicator when under 10 minutes remain.
   - Automatically submits the quiz when time runs out.
   - Accurate elapsed time tracking for score analytics.

4. **Detailed Results & Analytics Dashboard**:
   - Circular SVG score gauge displaying total marks out of 100 and percentage.
   - Key metrics: Total Questions, Correct, Incorrect, Unanswered, Marks, Accuracy %, and Time Taken.
   - Custom performance evaluation badge & recommendations.
   - **Unit-Wise Breakdown**: Detailed comparative metrics and progress bars for all 4 units.
   - Print Score Report feature for physical records or PDF export.

5. **Comprehensive Answer Review Section**:
   - Review all 100 questions with complete options breakdown.
   - Instant filtering tabs: **All Questions**, **Correct**, **Incorrect**, **Unanswered**, and **By Unit**.
   - Color highlighting: Emerald Green for correct answers, Crimson Red for incorrect user selections.

6. **State Persistence**:
   - Automatically saves progress to browser `localStorage`.
   - Refreshing or closing the tab preserves chosen answers and question location.
   - Confirmed Restart feature cleanses the state for a fresh attempt.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Language**: JavaScript (ES Modules)
- **Icons**: Lucide React
- **Styling**: CSS3 Modern Design Tokens (Flexbox & CSS Grid, Responsive)
- **Deployment**: Static Single Page App (ready for Netlify, Vercel, GitHub Pages)

---

## 📦 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build production bundle:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

---

## 🌐 Netlify Deployment

The project includes `public/_redirects` for Single Page Application handling.
To deploy on Netlify:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

