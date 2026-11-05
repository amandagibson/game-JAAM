//default category for testing, should be set by the wheel spin
let currentCategory = "artLiterature";
//increase by 1 with every round completed
let currentLevel = 1;
let questionsPerRound = 5;

//map the category from the wheel spin to the corresponding question bank
let questionBank = {
  artLiterature,
  filmTv,
  music,
  technology,
  cultureTradition,
  foodDrink,
  generalKnowledge,
  geography,
  history,
  maths,
  nature,
  science,
  sports,
  videoGames,
};

let categoryQuestionBank = questionBank[currentCategory] || [];
let currentCategoryQuestions = [];
let currentQuestionIndex = 0;
let playerLives = 3;

//calculate how many questions based on the level when the number of questions starts at 5 and then increases by 1 every three levels
function calculateQuestionsPerRound(currentLevel) {
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

function generateQuestions(categoryQuestionBank, questionsPerRound) {
  if (categoryQuestionBank && questionsPerRound > 0) {
    console.log(
      `Found ${questionsPerRound.length} questions out of ${categoryQuestionBank.length} available for category: ${currentCategory}`,
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
    console.error(
      "Current category or number of questions is not set. Cannot generate questions.",
      { currentCategory },
      { questionsPerRound },
    );
  }

  if (currentCategoryQuestions.length < questionsPerRound) {
    console.warn(
      `Not enough questions in category "${currentCategory}". Requested: ${questionsPerRound}, Available: ${currentCategoryQuestions.length}`,
    );
  }
  return currentCategoryQuestions;
}

function renderCurrentQuestion(currentCategoryQuestions) {
  const currentQuestion = currentCategoryQuestions[currentQuestionIndex];

  //TODO: refactor level completion logic into a separate function to keep renderCurrentQuestion focused on rendering the question and not managing game state
  if (!currentQuestion || !currentQuestion.options) {
    console.log("The round is complete.");
    currentLevel += 1;
    startRound();
    return;
  }

  console.log("Rendering question:", currentQuestion.q);

  const currentQuestionElement = document.getElementById("current-question");
  currentQuestionElement.textContent = currentQuestion.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  //loop through the options/answers for the current question and create buttons for each
  //TODO: **consider** refactoring this into a separate function to keep renderCurrentQuestion focused on rendering the question and not the options. maybe best to keep it here for now since the options are part of the question rendering
  currentQuestion.options.forEach((option, optionIndex) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-button");
    optionButton.addEventListener("click", () => {
      handleAnswer(currentQuestion, optionIndex);
    });
    optionsContainer.appendChild(optionButton);
  });
}

function handleAnswer(currentQuestion, selectedOptionIndex) {
  const isCorrect = selectedOptionIndex === currentQuestion.answer;
  console.log(isCorrect ? "Correct answer." : "Incorrect answer.");
  //TODO: pull this logic out into another function for playerLives management and game over handling
  if (!isCorrect) {
    console.log(`Incorrect answer. Lives remaining: ${playerLives}`);
    if (playerLives <= 0) {
      console.log("Game over.");
      return;
    }
  }
  // increase the current question index to move to the next question
  currentQuestionIndex += 1;
  renderCurrentQuestion(currentCategoryQuestions);
}

function startRound() {
  // setting the value to 0 here ensures that the round starts from the first question every time startRound is called
  currentQuestionIndex = 0;
  console.log(
    `Starting round ${currentLevel} with ${questionsPerRound} questions and category: ${currentCategory}`,
  );
  generateQuestions(categoryQuestionBank, questionsPerRound);
  renderCurrentQuestion(currentCategoryQuestions);
}
