const STARTING_LIVES = 3;
const BASE_QUESTIONS_PER_ROUND = 5;
const LEVELS_PER_EXTRA_QUESTION = 3; // +1 question every 3 levels

const gameState = {
  playerName: "",
  currentLevel: 1,
  playerMoney: 0,
  playerLives: STARTING_LIVES,
  currentScore: 0,
  highScore: null,
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
  gameState.highScore = null;
  gameState.wheelRotation = 0;
  gameState.isSpinning = false;
  gameState.currentCategory = "";
}

const roundState = {
  currentCategory: null,
  questionsPerRound: BASE_QUESTIONS_PER_ROUND,
  currentCategoryQuestions: [],
  currentQuestionIndex: 0,
};

function resetRoundState() {
  roundState.currentCategory = null;
  roundState.questionsPerRound = BASE_QUESTIONS_PER_ROUND;
  roundState.currentCategoryQuestions = [];
  roundState.currentQuestionIndex = 0;
}

// //LocalStorage High Score Functions
// // Loads the saved high score when the page initializes
// export function loadHighScore() {
//   const savedScore = localStorage.getItem("quizHighScore");
//   gameState.highestScore = savedScore ? parseInt(savedScore, 10) : 0;
// }

// // Checks if current money beats highestScore and updates localStorage
// export function checkAndUpdateHighScore() {
//   if (gameState.playerMoney > gameState.highestScore) {
//     gameState.highestScore = gameState.playerMoney;
//     localStorage.setItem("quizHighScore", gameState.highestScore);
//     return true; // a new high score was set
//   }
//   return false;
// }
