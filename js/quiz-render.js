const HEART_PATH =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

const categoryLabels = {
  artLiterature: "Art & Literature",
  filmTv: "Film & TV",
  music: "Music",
  technology: "Technology",
  cultureTradition: "Culture & Tradition",
  foodDrink: "Food & Drink",
  generalKnowledge: "General Knowledge",
  geography: "Geography",
  history: "History",
  maths: "Maths",
  nature: "Nature",
  science: "Science",
  sports: "Sports",
  videoGames: "Video Games",
};

function renderHud({
  level,
  category,
  questionNumber,
  totalQuestions,
  lives,
  maxLives,
}) {
  const label = categoryLabels[category] ?? category;
  document.getElementById("category-label").textContent = label;
  document.getElementById("level-display").textContent = level;
  document.getElementById("question-counter").textContent =
    `Question ${questionNumber}/${totalQuestions}`;
  renderLives(lives, maxLives);
}

function renderQuestion(question, onAnswer) {
  showQuestionView();
  document.getElementById("question-text").textContent = question.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-btn");
    optionButton.addEventListener("click", () =>
      onAnswer(optionIndex, optionButton),
    );
    optionsContainer.appendChild(optionButton);
  });
}

function markAnswer(optionButton, isCorrect) {
  optionButton.classList.add(isCorrect ? "correct" : "wrong");
}

function lockOptions() {
  document
    .querySelectorAll(".option-btn")
    .forEach((btn) => (btn.disabled = true));
}

function renderLives(lives, maxLives) {
  const container = document.getElementById("lives-display");
  container.setAttribute("aria-label", `Lives: ${lives}`);
  container.innerHTML = Array.from({ length: maxLives }, (_, i) => {
    const lostClass = i < lives ? "" : " heart--lost";
    return `<svg class="heart${lostClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="${HEART_PATH}" /></svg>`;
  }).join("");
}

function showQuestionView() {
  document.getElementById("question-view").hidden = false;
  document.getElementById("round-info").hidden = false;
  document.getElementById("result-view").hidden = true;
}

// shared by round complete and game over
function renderResult({ title, message, actions }) {
  document.getElementById("question-view").hidden = true;
  document.getElementById("round-info").hidden = true;
  document.getElementById("result-view").hidden = false;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-message").textContent = message;

  const actionsContainer = document.getElementById("result-actions");
  actionsContainer.innerHTML = "";
  actions.forEach(({ label, onClick }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.classList.add("option-btn");
    button.addEventListener("click", onClick);
    actionsContainer.appendChild(button);
  });
}

function renderRoundComplete({ category, newLevel, onSpinAgain }) {
  const label = categoryLabels[category] ?? category;
  renderResult({
    title: "Round complete!",
    message: `You finished the ${label} round and moved up to level ${newLevel}.`,
    actions: [{ label: "Spin the wheel", onClick: onSpinAgain }],
  });
}

function renderGameOver({ level, onPlayAgain, onBackToTitle }) {
  renderResult({
    title: "Game over",
    message: `You ran out of lives on level ${level}.`,
    actions: [
      { label: "Play again", onClick: onPlayAgain },
      { label: "Back to title", onClick: onBackToTitle },
    ],
  });
}
