const FEEDBACK_DELAY_MS = 500;

//map the category to the corresponding question bank
const questionBank = {
  artLiterature: { questions: artLiterature, color: "#e74c3c" },
  filmTv: { questions: filmTv, color: "#3498db" },
  music: { questions: music, color: "#c0392b" },
  technology: { questions: technology, color: "#f39c12" },
  cultureTradition: { questions: cultureTradition, color: "#8e44ad" },
  foodDrink: { questions: foodDrink, color: "#16a085" },
  generalKnowledge: { questions: generalKnowledge, color: "#2ecc71" },
  geography: { questions: geography, color: "#f1c40f" },
  history: { questions: history, color: "#e67e22" },
  maths: { questions: maths, color: "#d35400" },
  nature: { questions: nature, color: "#9b59b6" },
  science: { questions: science, color: "#2980b9" },
  sports: { questions: sports, color: "#27ae60" },
  videoGames: { questions: videoGames, color: "#e84393" },
};

let questionTimerId = null;

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
    console.log(
      `Selected the following ${roundState.questionsPerRound} questions for level ${gameState.currentLevel}:`,
      roundState.currentCategoryQuestions,
    );
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
    money: gameState.playerMoney,
  });
  resetLifelineButtons();
  renderQuestion(currentQuestion, (optionIndex, optionButton) =>
    handleAnswer(currentQuestion, optionIndex, optionButton),
  );

  startQuestionTimer(() => handleTimeout(currentQuestion));
}

function handleAnswer(currentQuestion, selectedOptionIndex, optionButton) {
  stopQuestionTimer(); // stop first so timeRemaining is frozen

  const isCorrect = selectedOptionIndex === currentQuestion.answer;
  console.log(isCorrect ? "Correct answer." : "Incorrect answer.");

  lockOptions();
  lockLifelines();
  markAnswer(optionButton, isCorrect);

  if (isCorrect) {
    awardMoney(roundState.timeRemaining * MONEY_PER_SECOND);
  } else {
    loseLife();
  }

  advanceAfterFeedback();
}

function handleTimeout() {
  console.log("Time's up.");

  lockOptions();
  loseLife();
  advanceAfterFeedback();
}

function advanceAfterFeedback() {
  setTimeout(() => {
    if (isGameOver()) {
      handleGameOver();
      return;
    }
    roundState.currentQuestionIndex += 1;
    renderCurrentQuestion();
  }, FEEDBACK_DELAY_MS);
}

function startQuestionTimer(onTimeout) {
  stopQuestionTimer();
  roundState.timeRemaining = QUESTION_TIME_LIMIT_SECONDS;
  renderTimer(roundState.timeRemaining);

  questionTimerId = setInterval(() => {
    roundState.timeRemaining -= 1;
    renderTimer(roundState.timeRemaining);

    if (roundState.timeRemaining <= 0) {
      stopQuestionTimer();
      onTimeout();
    }
  }, 1000);
}

function stopQuestionTimer() {
  clearInterval(questionTimerId);
  questionTimerId = null;
}

function awardMoney(amount) {
  gameState.playerMoney += amount;
  gameState.currentScore += amount;
  console.log(
    "Money:",
    gameState.playerMoney,
    "Score:",
    gameState.currentScore,
  );
  renderMoney(gameState.playerMoney);
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
  stopQuestionTimer();
  // grab the category before resetRoundState() clears it
  const completedCategory = roundState.currentCategory;

  gameState.currentLevel += 1;
  console.log(`Level up! Now at level ${gameState.currentLevel}.`);
  resetRoundState();

  renderRoundComplete({
    category: completedCategory,
    newLevel: gameState.currentLevel,
    onSpinAgain: handleSpinAgain,
  });
}

// the connecting point from the round-complete screen back to the wheel
function handleSpinAgain() {
  startWheel();
}

function handlePlayAgain() {
  const currentPlayer = gameState.playerName;
  resetGameState();
  gameState.playerName = currentPlayer;
  resetRoundState();
  startWheel();
}

function handleBackToTitle() {
  resetGameState();
  resetRoundState();
  displayHighestScore();
  showScreen("title-screen");
}

function handleGameOver() {
  console.log("Game over.");
  const isNewHighScore = checkAndUpdateHighScore();
  stopQuestionTimer();
  renderGameOver({
    level: gameState.currentLevel,
    isNewHighScore,
    onPlayAgain: handlePlayAgain,
    onBackToTitle: handleBackToTitle,
  });
}

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
  const categoryQuestionBank =
    questionBank[roundState.currentCategory]?.questions || [];
  generateQuestions(categoryQuestionBank);
  if (roundState.currentCategoryQuestions.length === 0) {
    // nothing to play, so send the player back to the wheel to pick again
    startWheel();
    return;
  }
  renderCurrentQuestion();
}
