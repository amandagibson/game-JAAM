// Default game state with dynamic questionsPerRound
export const gameState = {
  currentLevel: 1,
  get questionsPerRound() {
    return 5 + Math.floor((this.currentLevel - 1) / 3);
  },
  playerMoney: 0,
  playerLives: 3,
  highestScore: 0,
  playerName: "",
  currentCategory: "",
  currentCategoryQuestions: [],
  currentQuestionIndex: 0,
  activeQuestion: null,
  timerInterval: null,
  timeRemaining: 15,
  wheelRotation: 0,
  isSpinning: false,
};

//LocalStorage High Score Functions
// Loads the saved high score when the page initializes
export function loadHighScore() {
  const savedScore = localStorage.getItem("quizHighScore");[cite: 22]
  gameState.highestScore = savedScore ? parseInt(savedScore, 10) : 0;
}

// Checks if current money beats highestScore and updates localStorage
export function checkAndUpdateHighScore() {
  if (gameState.playerMoney > gameState.highestScore) {
    gameState.highestScore = gameState.playerMoney;
    localStorage.setItem("quizHighScore", gameState.highestScore);[cite: 22]
    return true; // Indicates a new high score was set
  }
  return false;
}

// Utilities

// Fisher-Yates Shuffle Function to randomize array order without changing original arrays
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];[cite: 20]
  }
  return arr;
}

//  Call this function to reset the game state (ex: when starting a new game)
export function resetGameState() {
  gameState.currentLevel = 1;
  gameState.questionsPerRound = 5;
  gameState.playerMoney = 0;
  gameState.playerLives = 3;
  gameState.currentCategory = "";
  gameState.currentCategoryQuestions = [];
  gameState.currentQuestionIndex = 0;
  gameState.activeQuestion = null;
  gameState.timeRemaining = 15;
  gameState.isSpinning = false;
}
