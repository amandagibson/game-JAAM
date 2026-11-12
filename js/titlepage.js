const nameInput = document.getElementById("playerName");
const playerForm = document.getElementById("playerForm");
const highestScoreDisplay = document.getElementById("highestScore");

// Get saved players
function getPlayers() {
  return JSON.parse(localStorage.getItem("players")) || {};
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
    highestScoreDisplay.textContent = players[playerName].highestScore;
  } else {
    highestScoreDisplay.textContent = 0;
  }
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

playerForm.addEventListener("submit", (event) => {
  handleGamePlay(event);
});

document.addEventListener("DOMContentLoaded", () => {
  showScreen("title-screen");
});

// Start the game when the form is submitted
function startGame() {
  const playerName = nameInput.value.trim();
  const players = getPlayers();
  const playerKey = playerName.toLowerCase();

  // Create a new player if they don't exist
  if (!players[playerKey]) {
    players[playerKey] = {
      name: playerName,
      highestScore: 0,
    };
  }
  savePlayers(players);
  // Save player information
  localStorage.setItem("currentPlayer", playerKey);
}
