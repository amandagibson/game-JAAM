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

// function renderQuestion() {}

// function checkAnswer() {}

// function nextQuestion() {}

function startRound() {
  console.log(
    `Starting round ${currentLevel} with ${questionsPerRound} questions and category: ${currentCategory}`,
  );
  generateQuestions(categoryQuestionBank, questionsPerRound);
  // renderQuestion();
}
