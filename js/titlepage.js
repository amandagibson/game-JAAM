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

// Background music
const backgroundMusic = document.querySelector("#background-music");
const musicToggle = document.querySelector("#music-toggle");

backgroundMusic.volume = 0.3;

// Track if the user manually turned the music off
let musicDisabledByUser = false;

// Update the music button
function updateMusicButton() {
  const isPlaying = !backgroundMusic.paused;

  musicToggle.setAttribute(
    "aria-label",
    isPlaying ? "Turn music off" : "Turn music on",
  );

  musicToggle.setAttribute("aria-pressed", String(isPlaying));
}

// Update button when music starts or stops
backgroundMusic.addEventListener("play", updateMusicButton);
backgroundMusic.addEventListener("pause", updateMusicButton);

// Try autoplay when the title page loads
backgroundMusic.play().catch(() => {
  console.log("Autoplay blocked. Waiting for user interaction.");
});

// Start music after the first click anywhere on the page
document.addEventListener(
  "click",
  () => {
    if (backgroundMusic.paused && !musicDisabledByUser) {
      backgroundMusic.play().catch((error) => {
        console.log("Could not play music:", error);
      });
    }
  },
  { once: true },
);

// Music toggle button
musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    musicDisabledByUser = false;

    try {
      await backgroundMusic.play();
    } catch (error) {
      console.log("Could not play music:", error);
    }
  } else {
    musicDisabledByUser = true;
    backgroundMusic.pause();
  }
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
