// Show one screen and hide every other screen.
function showScreen(screenId) {
  const screens = document.querySelectorAll("[data-screen]");
  const screen = document.getElementById(screenId);

  if (!screen || !screen.matches("[data-screen]")) {
    console.error(`Cannot show screen "${screenId}": screen not found.`);
    return false;
  }

  screens.forEach((currentScreen) => {
    currentScreen.hidden = currentScreen !== screen;
  });

  return true;
}

// Start the game after the player submits their name.
function handleGamePlay(event) {
  event.preventDefault();

  startGame();
  startWheel();
}
