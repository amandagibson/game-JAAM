const STARTING_LIVES = 3;
const BASE_QUESTIONS_PER_ROUND = 5;
const LEVELS_PER_EXTRA_QUESTION = 3; // +1 question every 3 levels
const QUESTION_TIME_LIMIT_SECONDS = 15; // adjust to taste
const MONEY_PER_SECOND = 1;

const gameState = {
  playerName: "",
  currentLevel: 1,
  playerMoney: 0,
  playerLives: STARTING_LIVES,
  currentScore: 0,
  highScore: 0,
  highScoreHolder: "",
  wheelRotation: 0,
  isSpinning: false,
  currentCategory: "",
};

function resetGameState() {
  gameState.playerName = "";
  gameState.currentLevel = 1;
  gameState.playerMoney = 0;
  gameState.playerLives = STARTING_LIVES;
  gameState.currentScore = 0;
  gameState.highScore = 0;
  gameState.highScoreHolder = "";
  gameState.wheelRotation = 0;
  gameState.isSpinning = false;
  gameState.currentCategory = "";
}

const roundState = {
  currentCategory: null,
  questionsPerRound: BASE_QUESTIONS_PER_ROUND,
  currentCategoryQuestions: [],
  currentQuestionIndex: 0,
  timeRemaining: QUESTION_TIME_LIMIT_SECONDS,
};

function resetRoundState() {
  roundState.currentCategory = null;
  roundState.questionsPerRound = BASE_QUESTIONS_PER_ROUND;
  roundState.currentCategoryQuestions = [];
  roundState.currentQuestionIndex = 0;
  roundState.timeRemaining = QUESTION_TIME_LIMIT_SECONDS;
}

// LocalStorage High Score Functions
function loadHighScore() {
  const saved = JSON.parse(localStorage.getItem("quizHighScore") || "null");
  gameState.highScore = saved?.score || 0;
  gameState.highScoreHolder = saved?.holder || "";
  return gameState.highScore;
}

function checkAndUpdateHighScore() {
  const currentHigh = loadHighScore();

  if (gameState.currentScore > currentHigh) {
    gameState.highScore = gameState.currentScore;
    gameState.highScoreHolder = gameState.playerName || "Player";
    localStorage.setItem(
      "quizHighScore",
      JSON.stringify({
        score: gameState.highScore,
        holder: gameState.highScoreHolder,
      }),
    );
    return true; // a new high score was set
  }

  return false;
}
