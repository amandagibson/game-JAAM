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

// Start the game when the form is submitted
playerForm.addEventListener("submit", (event) => {
  event.preventDefault();

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

  // Save player information
  savePlayers(players);
  localStorage.setItem("currentPlayer", playerKey);
});

// Background music
const backgroundMusic = document.querySelector("#background-music");

backgroundMusic.volume = 0.3;

// Try to start music automatically
backgroundMusic.play().catch(() => {
  console.log("Autoplay blocked. Waiting for user interaction.");
});

// Start music after the first user interaction if autoplay was blocked
document.addEventListener(
  "click",
  () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  },
  { once: true },
);
