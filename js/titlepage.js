const nameInput = document.getElementById("playerName");
const playerForm = document.getElementById("playerForm");
const highestScoreDisplay = document.getElementById("highestScore");

// Get saved players
function getPlayers() {
  try {
    const players = JSON.parse(localStorage.getItem("players"));

    if (players && typeof players === "object" && !Array.isArray(players)) {
      return players;
    }

    return {};
  } catch (error) {
    console.error("Could not load saved players:", error);
    return {};
  }
}
// Save players
function savePlayers(players) {
  localStorage.setItem("players", JSON.stringify(players));
}

// Display the player's highest score
function displayHighestScore() {
  const playerName = nameInput.value.trim().toLowerCase();
  const players = getPlayers();

  if (players[playerName]) {
    gameState.highestScore = players[playerName].highestScore;
  } else {
    gameState.highestScore = 0;
  }

  highestScoreDisplay.textContent = gameState.highestScore;
}

// Set the browser's built-in validation message
nameInput.setCustomValidity("What should we call you?");

// Listen for name input
nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity(
    nameInput.value.trim() ? "" : "What should we call you?",
  );

  displayHighestScore();
});

// Start the game when the form is submitted
playerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const playerName = nameInput.value.trim();
  gameState.playerName = playerName;
  const players = getPlayers();
  const playerKey = playerName.toLowerCase();

  // Create a new player if they don't exist
  if (!players[playerKey]) {
    players[playerKey] = {
      name: playerName,
      highestScore: 0,
    };
  }

  // Save player information
  savePlayers(players);
  localStorage.setItem("currentPlayer", playerKey);
});
