export const gameState = {
  currentLevel: 1,
  questionsPerRound: 5,
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
