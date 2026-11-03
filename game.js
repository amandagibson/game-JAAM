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

//calculate how many questions based on the level when the number of questions starts at 5 and then increases by 1 every three levels
function calculateQuestionsPerRound(currentLevel) {
  const baseQuestions = 5;
  const additionalQuestions = Math.floor((currentLevel - 1) / 3);
  return (questionsPerRound = baseQuestions + additionalQuestions);
}

function generateQuestions(categoryQuestionBank, questionsPerRound) {
  if (categoryQuestionBank && questionsPerRound > 0) {
    console.log(
      `Found ${categoryQuestionBank.length} questions out of ${categoryQuestionBank.length} available for category: ${currentCategory}`,
    );
    //build the questions for the round by randomly selecting from the category question bank
    currentCategoryQuestions = categoryQuestionBank
      .sort(() => Math.random() - 0.5)
      .slice(0, questionsPerRound);
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

  if (!currentQuestion || !currentQuestion.options) {
    console.log("The round is complete.");
    return;
  }

  console.log("Rendering question:", currentQuestion.q);

  const currentQuestionElement = document.getElementById("current-question");
  currentQuestionElement.textContent = currentQuestion.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  //loop through the options/answers for the current question and create buttons for each
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
