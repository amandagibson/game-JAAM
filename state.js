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

//  When calculating the number of questions per round, it will need to have this syntax!
//  questionsPerRound = 5 + Math.floor((currentLevel - 1) / 3),

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
