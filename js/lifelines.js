// Adjust lifeline prices here
const LIFELINE_COSTS = {
  extraTime: 30,
  fiftyFifty: 30,
  skipQuestion: 30,
};

const extraTimeBtn = document.getElementById("lifeline-extra-time");
const fiftyFiftyBtn = document.getElementById("lifeline-fifty-fifty");
const skipBtn = document.getElementById("lifeline-skip");

// Track which lifelines have been used on the current question
let extraTimeUsed = false;
let fiftyFiftyUsed = false;
let skipUsed = false;

// Set button labels with their configured costs
function renderLifelineLabels() {
  if (extraTimeBtn) {
    extraTimeBtn.textContent = "+10s Time ($" + LIFELINE_COSTS.extraTime + ")";
  }
  if (fiftyFiftyBtn) {
    fiftyFiftyBtn.textContent = "50 / 50 ($" + LIFELINE_COSTS.fiftyFifty + ")";
  }
  if (skipBtn) {
    skipBtn.textContent =
      "Switch Question ($" + LIFELINE_COSTS.skipQuestion + ")";
  }
}

// Enable/disable buttons based on usage and current playerMoney
function updateLifelineAvailability() {
  if (extraTimeBtn) {
    extraTimeBtn.disabled =
      extraTimeUsed || gameState.playerMoney < LIFELINE_COSTS.extraTime;
  }
  if (fiftyFiftyBtn) {
    fiftyFiftyBtn.disabled =
      fiftyFiftyUsed || gameState.playerMoney < LIFELINE_COSTS.fiftyFifty;
  }
  if (skipBtn) {
    skipBtn.disabled =
      skipUsed || gameState.playerMoney < LIFELINE_COSTS.skipQuestion;
  }
}

// Re-enable lifeline buttons for a new question (if the player can afford them)
function resetLifelineButtons() {
  extraTimeUsed = false;
  fiftyFiftyUsed = false;
  skipUsed = false;

  renderLifelineLabels();
  updateLifelineAvailability();
}

// Temporarily disable lifeline buttons during the answer feedback delay
function lockLifelines() {
  if (extraTimeBtn) extraTimeBtn.disabled = true;
  if (fiftyFiftyBtn) fiftyFiftyBtn.disabled = true;
  if (skipBtn) skipBtn.disabled = true;
}

// Deduct cost from playerMoney and update the HUD and button availability
function spendLifelineMoney(cost) {
  gameState.playerMoney -= cost;
  renderMoney(gameState.playerMoney);
  updateLifelineAvailability();
}

// Adds 10 seconds to the timer for the current question
function extraTime() {
  if (extraTimeUsed || gameState.playerMoney < LIFELINE_COSTS.extraTime) return;

  extraTimeUsed = true;
  spendLifelineMoney(LIFELINE_COSTS.extraTime);

  roundState.timeRemaining += 10;
  renderTimer(roundState.timeRemaining);
}

// Removes 2 wrong answers from the 4 available
function fiftyFifty() {
  if (fiftyFiftyUsed || gameState.playerMoney < LIFELINE_COSTS.fiftyFifty) {
    return;
  }

  const currentQuestion =
    roundState.currentCategoryQuestions[roundState.currentQuestionIndex];
  if (!currentQuestion) return;

  fiftyFiftyUsed = true;
  spendLifelineMoney(LIFELINE_COSTS.fiftyFifty);

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
  if (skipUsed || gameState.playerMoney < LIFELINE_COSTS.skipQuestion) return;

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

  skipUsed = true;
  spendLifelineMoney(LIFELINE_COSTS.skipQuestion);

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

renderLifelineLabels();
