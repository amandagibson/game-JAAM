//move to state
let currentLevel = 1;
let playerLives = 3;
let currentCategory = "artLiterature"; //default category for testing, should be set by the wheel spin
let questionsPerRound = 5;
let currentCategoryQuestions = [];
let currentQuestionIndex = 0;

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
  const additionalQuestions = Math.floor((currentLevel - 1) / 3);
  return (questionsPerRound = baseQuestions + additionalQuestions);
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
  if (categoryQuestionBank.length > 0 && questionsPerRound > 0) {
    console.log(
      `Found ${categoryQuestionBank.length} available questions for category: ${currentCategory}`,
    );
    //build a randomized list of questions for the round using the Fisher-Yates shuffle algo
    currentCategoryQuestions = shuffleArray(categoryQuestionBank).slice(
      0,
      questionsPerRound,
    );
    console.log(
      `Selected the following ${questionsPerRound} questions for level ${currentLevel}:`,
      currentCategoryQuestions,
    );
  } else {
    currentCategoryQuestions = [];
    console.error(
      "Current category or number of questions is not set. Cannot generate questions.",
      { currentCategory },
      { questionsPerRound },
      //TODO: what behavior should happen here? Should the game end, or should it just skip to the next round? For now, just log an error and return an empty array.
    );
  }

  if (currentCategoryQuestions.length < questionsPerRound) {
    console.warn(
      `Not enough questions in category "${currentCategory}". Requested: ${questionsPerRound}, Available: ${currentCategoryQuestions.length}`,
    );
  }
  return currentCategoryQuestions;
}

function renderCurrentQuestion() {
  const currentQuestion = currentCategoryQuestions[currentQuestionIndex];

  if (!currentQuestion || !currentQuestion.options) {
    handleRoundComplete();
    return;
  }

  renderHud({
    level: currentLevel,
    category: currentCategory,
    questionNumber: currentQuestionIndex + 1,
    totalQuestions: questionsPerRound,
    lives: playerLives,
  });

  renderQuestion(currentQuestion, (optionIndex) =>
    handleAnswer(currentQuestion, optionIndex),
  );
}

function handleAnswer(currentQuestion, selectedOptionIndex) {
  const isCorrect = selectedOptionIndex === currentQuestion.answer;
  console.log(isCorrect ? "Correct answer." : "Incorrect answer.");

  if (!isCorrect) {
    loseLife();
    if (isGameOver()) {
      console.log("Game over.");
      return;
    }
  }
  currentQuestionIndex += 1;
  renderCurrentQuestion(currentCategoryQuestions);
}

function loseLife() {
  playerLives -= 1;
  console.log(`Lives remaining: ${playerLives}`);
}

function isGameOver() {
  return playerLives <= 0;
}

function handleRoundComplete() {
  console.log("The round is complete.");
  currentLevel += 1;
  //return to the wheel spin to select a new category for the next round
  console.log(
    `Level up! Now at level ${currentLevel}. Returning to wheel spin for next category selection.`,
  );
  //reset the round state for the next round
  // resetRoundState();
}

//TODO: this is the conneting point from the wheel spin to the start of a new round
//update to take a `category` parameter selected from the wheel spin, then this function is called to start the round with the selected category
function startRound() {
  // setting the value to 0 here ensures that the round starts from the first question every time startRound is called
  currentQuestionIndex = 0;
  questionsPerRound = calculateQuestionsPerRound();
  console.log(
    `Starting round ${currentLevel} with ${playerLives} lives and ${questionsPerRound} questions from the category: ${currentCategory}`,
  );
  //generate the questions for the round here so they are fresh
  const categoryQuestionBank = questionBank[currentCategory] || [];
  generateQuestions(categoryQuestionBank);
  renderCurrentQuestion();
}
