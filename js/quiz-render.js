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

function renderHud({ level, category, questionNumber, totalQuestions, lives }) {
  const label = categoryLabels[category] ?? category;
  document.getElementById("category-label").textContent = label;
  document.getElementById("level-display").textContent = level;
  document.getElementById("question-counter").textContent =
    `Question ${questionNumber}/${totalQuestions}`;
  document.getElementById("lives-display").textContent = lives;
}

function renderQuestion(question, onAnswer) {
  document.getElementById("question-text").textContent = question.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-btn");
    optionButton.addEventListener("click", () => onAnswer(optionIndex));
    optionsContainer.appendChild(optionButton);
  });
}
