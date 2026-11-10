// move these constants to a config file or a separate constants file?
const FEEDBACK_DELAY_MS = 500;

//map the category to the corresponding question bank
const questionBank = {
  artLiterature: artLiterature,
  filmTv: filmTv,
  music: music,
  technology: technology,
  cultureTradition: cultureTradition,
  foodDrink: foodDrink,
  generalKnowledge: generalKnowledge,
  geography: geography,
  history: history,
  maths: maths,
  nature: nature,
  science: science,
  sports: sports,
  videoGames: videoGames,
};

//calculate how many questions based on the level when the number of questions starts at 5 and then increases by 1 every three levels
function calculateQuestionsPerRound() {
  const baseQuestions = 5;
  const additionalQuestions = Math.floor(
    (gameState.currentLevel - 1) / LEVELS_PER_EXTRA_QUESTION,
  );
  return baseQuestions + additionalQuestions;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateQuestions(categoryQuestionBank) {
  if (categoryQuestionBank.length > 0 && roundState.questionsPerRound > 0) {
    console.log(
      `Found ${categoryQuestionBank.length} available questions for category: ${roundState.currentCategory}`,
    );
    //build a randomized list of questions for the round using the Fisher-Yates shuffle algo
    roundState.currentCategoryQuestions = shuffleArray(
      categoryQuestionBank,
    ).slice(0, roundState.questionsPerRound);
    console.log(
      `Selected the following ${roundState.questionsPerRound} questions for level ${gameState.currentLevel}:`,
      roundState.currentCategoryQuestions,
    );
  } else {
    roundState.currentCategoryQuestions = [];
    console.error(
      "Current category or number of questions is not set. Cannot generate questions.",
      { currentCategory: roundState.currentCategory },
      { questionsPerRound: roundState.questionsPerRound },
    );
    //TODO: present the wheel spin again to select a new category
    // spinWheel();
  }

  if (
    roundState.currentCategoryQuestions.length < roundState.questionsPerRound
  ) {
    console.warn(
      `Not enough questions in category "${roundState.currentCategory}". Requested: ${roundState.questionsPerRound}, Available: ${roundState.currentCategoryQuestions.length}`,
    );
  }
  return roundState.currentCategoryQuestions;
}

function renderCurrentQuestion() {
  const currentQuestion =
    roundState.currentCategoryQuestions[roundState.currentQuestionIndex];

  if (!currentQuestion || !currentQuestion.options) {
    handleRoundComplete();
    return;
  }

  renderHud({
    level: gameState.currentLevel,
    category: roundState.currentCategory,
    questionNumber: roundState.currentQuestionIndex + 1,
    totalQuestions: roundState.currentCategoryQuestions.length,
    lives: gameState.playerLives,
    maxLives: STARTING_LIVES,
  });

  renderQuestion(currentQuestion, (optionIndex, optionButton) =>
    handleAnswer(currentQuestion, optionIndex, optionButton),
  );
}

function handleAnswer(currentQuestion, selectedOptionIndex, optionButton) {
  const isCorrect = selectedOptionIndex === currentQuestion.answer;
  console.log(isCorrect ? "Correct answer." : "Incorrect answer.");

  lockOptions();
  markAnswer(optionButton, isCorrect);

  if (!isCorrect) {
    loseLife();
  }

  setTimeout(() => {
    if (isGameOver()) {
      console.log("Game over.");
      return;
    }
    roundState.currentQuestionIndex += 1;
    renderCurrentQuestion();
  }, FEEDBACK_DELAY_MS);
}

function loseLife() {
  gameState.playerLives -= 1;
  renderLives(gameState.playerLives, STARTING_LIVES);
  console.log(`Lives remaining: ${gameState.playerLives}`);
}

function isGameOver() {
  return gameState.playerLives <= 0;
}

function handleRoundComplete() {
  console.log("The round is complete.");
  gameState.currentLevel += 1;
  //return to the wheel spin to select a new category for the next round
  resetRoundState();
  console.log(
    `Level up! Now at level ${gameState.currentLevel}. Returning to wheel spin for next category selection.`,
  );
}

//this is the conneting point from the wheel spin to the start of a new round
function startRound(category) {
  resetRoundState();
  roundState.currentCategory = category;
  roundState.questionsPerRound = calculateQuestionsPerRound();
  console.log(
    `Starting round ${gameState.currentLevel} with ${gameState.playerLives} lives and ${roundState.questionsPerRound} questions from the category: ${roundState.currentCategory}`,
  );
  //generate the questions for the round here so they are fresh
  const categoryQuestionBank = questionBank[roundState.currentCategory] || [];
  generateQuestions(categoryQuestionBank);
  if (roundState.currentCategoryQuestions.length === 0) return; // nothing to play, the wheel should pick again here
  renderCurrentQuestion();
}
