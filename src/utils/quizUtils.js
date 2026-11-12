/**
 * Fisher-Yates (Knuth) unbiased array shuffling algorithm.
 * Never mutates the original array; returns a new shuffled copy.
 */
export function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates a freshly shuffled quiz attempt:
 * 1. Shuffles the options (A, B, C, D) for every question randomly.
 * 2. Re-maps the correctAnswer to match the new shuffled position of the correct text.
 * 3. Shuffles the question order itself.
 * 4. Preserves references to originalId, unit, and original question text without mutating data/questions.js.
 *
 * @param {Array} originalQuestions Original question list
 * @returns {Array} A newly shuffled set of question objects
 */
export function generateShuffledQuiz(originalQuestions) {
  const displayLetters = ['A', 'B', 'C', 'D'];

  // Step 1: Shuffle options for every question & update correctAnswer pointer
  const questionsWithShuffledOptions = originalQuestions.map((q) => {
    // Collect the original options with their keys and text
    const optionEntries = displayLetters.map((letter) => ({
      originalKey: letter,
      text: q.options[letter],
      isCorrect: letter === q.correctAnswer,
    }));

    // Randomize option order using Fisher-Yates
    const shuffledOptionsList = fisherYatesShuffle(optionEntries);

    // Reconstruct new options object with A, B, C, D display keys
    const newOptions = {};
    let newCorrectAnswer = null;

    shuffledOptionsList.forEach((entry, idx) => {
      const displayKey = displayLetters[idx];
      newOptions[displayKey] = entry.text;
      if (entry.isCorrect) {
        newCorrectAnswer = displayKey;
      }
    });

    return {
      ...q,
      originalId: q.id,
      originalCorrectAnswer: q.correctAnswer,
      options: newOptions,
      correctAnswer: newCorrectAnswer,
    };
  });

  // Step 2: Randomize the question order itself
  const fullyShuffledQuestions = fisherYatesShuffle(questionsWithShuffledOptions);

  return fullyShuffledQuestions;
}

