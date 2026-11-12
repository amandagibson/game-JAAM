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
  const baseQuestions = BASE_QUESTIONS_PER_ROUND;
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
    roundState.currentCategoryQuestions = shuffleArray(
      categoryQuestionBank,
    ).slice(0, roundState.questionsPerRound);

    if (
      roundState.currentCategoryQuestions.length < roundState.questionsPerRound
    ) {
      console.warn(
        `Not enough questions in category "${roundState.currentCategory}". Requested: ${roundState.questionsPerRound}, Available: ${roundState.currentCategoryQuestions.length}`,
      );
    }
  } else {
    roundState.currentCategoryQuestions = [];
    console.error(
      `No questions available for category "${roundState.currentCategory}".`,
      { questionsPerRound: roundState.questionsPerRound },
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
      handleGameOver();
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

  // grab the category before resetRoundState() clears it
  const completedCategory = roundState.currentCategory;

  gameState.currentLevel += 1;
  resetRoundState();

  renderRoundComplete({
    category: completedCategory,
    newLevel: gameState.currentLevel,
  });
  showScreen("round-complete-screen");
}

function handleGameOver() {
  console.log("Game over.");

  renderGameOver({ level: gameState.currentLevel });
  showScreen("game-over-screen");
}

function handlePlayAgain() {
  resetGameState();
  resetRoundState();
  showScreen("wheel-screen"); // TODO: same placeholder id as handleSpinAgain
}

function handleBackToTitle() {
  resetGameState();
  resetRoundState();
  showScreen("title-screen");
}

// the connecting point from the round-complete screen back to the wheel
function handleSpinAgain() {
  // TODO: swap in the real wheel screen id once the wheel PR is merged
  showScreen("wheel-screen");
}

document
  .getElementById("spin-again-btn")
  .addEventListener("click", handleSpinAgain);

document
  .getElementById("play-again-btn")
  .addEventListener("click", handlePlayAgain);
document
  .getElementById("back-to-title-btn")
  .addEventListener("click", handleBackToTitle);

  
//this is the conneting point from the wheel spin to the start of a new round
function startRound(category) {
  showScreen("game-container");
  resetRoundState();
  roundState.currentCategory = category;
  roundState.questionsPerRound = calculateQuestionsPerRound();
  console.log(
    `Starting round ${gameState.currentLevel} with ${gameState.playerLives} lives and ${roundState.questionsPerRound} questions from the category: ${roundState.currentCategory}`,
  );
  //generate the questions for the round here so they are fresh
  const categoryQuestionBank = questionBank[roundState.currentCategory] || [];
  generateQuestions(categoryQuestionBank);
  if (roundState.currentCategoryQuestions.length === 0) {
    // nothing to play, so send the player back to the wheel to pick again
    showScreen("wheel-screen"); //TODO: same placeholder id as handleSpinAgain
    return;
  }
  renderCurrentQuestion();
}
