const extraTimeBtn = document.getElementById("lifeline-extra-time");
const fiftyFiftyBtn = document.getElementById("lifeline-fifty-fifty");
const skipBtn = document.getElementById("lifeline-skip");

// Re-enable all lifeline buttons for the new question
function resetLifelineButtons() {
  if (extraTimeBtn) extraTimeBtn.disabled = false;
  if (fiftyFiftyBtn) fiftyFiftyBtn.disabled = false;
  if (skipBtn) skipBtn.disabled = false;
}

// Temporarily disable lifeline buttons during the 500ms answer feedback delay
function lockLifelines() {
  if (extraTimeBtn) extraTimeBtn.disabled = true;
  if (fiftyFiftyBtn) fiftyFiftyBtn.disabled = true;
  if (skipBtn) skipBtn.disabled = true;
}

// Adds 10 seconds to the timer for the current question
function extraTime() {
  if (extraTimeBtn) extraTimeBtn.disabled = true;

  roundState.timeRemaining += 10;
  renderTimer(roundState.timeRemaining);
}

// Removes 2 wrong answers from the 4 available
function fiftyFifty() {
  const currentQuestion =
    roundState.currentCategoryQuestions[roundState.currentQuestionIndex];
  if (!currentQuestion) return;

  if (fiftyFiftyBtn) fiftyFiftyBtn.disabled = true;

  // Collect indices of the 3 incorrect options
  const wrongIndices = [];
  for (let i = 0; i < currentQuestion.options.length; i++) {
    if (i !== currentQuestion.answer) {
      wrongIndices.push(i);
    }
  }

  // Shuffle wrong indices and disable 2 of them in the DOM
  const indicesToDisable = shuffleArray(wrongIndices).slice(0, 2);
  const optionButtons = document.querySelectorAll(
    "#options-container .option-btn",
  );

  indicesToDisable.forEach(function (index) {
    if (optionButtons[index]) {
      optionButtons[index].disabled = true;
      optionButtons[index].classList.add("eliminated");
    }
  });
}

// Replaces the current question with a fresh one from the category bank without losing a life
function skipQuestion() {
  if (skipBtn) skipBtn.disabled = true;

  const categoryData = questionBank[roundState.currentCategory];
  if (!categoryData || !categoryData.questions) return;

  const allCategoryQuestions = categoryData.questions;

  // Filter out questions already selected in the current round so we don't get duplicates
  const unusedQuestions = allCategoryQuestions.filter(function (question) {
    return !roundState.currentCategoryQuestions.includes(question);
  });

  if (unusedQuestions.length === 0) {
    console.warn(
      "No unused replacement questions available in category: " +
        roundState.currentCategory,
    );
    return;
  }

  // Pick a random replacement question from the unused pool
  const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
  const replacementQuestion = unusedQuestions[randomIndex];

  // Replace the question at the current index and re-render
  roundState.currentCategoryQuestions[roundState.currentQuestionIndex] =
    replacementQuestion;
  renderCurrentQuestion();
}

// Wire up click listeners
if (extraTimeBtn) {
  extraTimeBtn.addEventListener("click", extraTime);
}
if (fiftyFiftyBtn) {
  fiftyFiftyBtn.addEventListener("click", fiftyFifty);
}
if (skipBtn) {
  skipBtn.addEventListener("click", skipQuestion);
}
